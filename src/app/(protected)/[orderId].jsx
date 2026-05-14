import { useLocalSearchParams, useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ICONS } from "../../components/assets";
import Screen from "../../components/screen";
import { auth, db } from "../../config/firebase";
import { useOrders } from "../../context/ordersContext";
import { styles } from "../../styles/orderIdStyle";

function formatarDataExtenso(date) {
  const d = new Date(date);
  return d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

function formatarHora(date) {
  const d = new Date(date);
  return d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function gerarTimeline(dataBase, tipoEntrega) {
  const base = new Date(dataBase);
  if (tipoEntrega === "retirada") {
    return [
      { label: "Aguardando aprovação", data: new Date(base) },
      { label: "Pedido em preparação", data: new Date(base) },
      { label: "Pronto para retirada", data: new Date(base.getTime() + 67 * 60 * 1000) },
      { label: "Pedido concluído",     data: new Date(base.getTime() + 307 * 60 * 1000) },
    ];
  }
  return [
    { label: "Aguardando aprovação",      data: new Date(base) },
    { label: "Pedido em preparação",      data: new Date(base) },
    { label: "Pedido em rota de entrega", data: new Date(base.getTime() + 67 * 60 * 1000) },
    { label: "Pedido concluído",          data: new Date(base.getTime() + 307 * 60 * 1000) },
  ];
}

const STEP_ICONS_ENTREGA  = ["✓", "📦", "🛵", "✅"];
const STEP_ICONS_RETIRADA = ["✓", "📦", "🏪", "✅"];

export default function OrderDetail() {
  const router = useRouter();
  const { orderId } = useLocalSearchParams();
  const { orders } = useOrders();
  const [showTimeline, setShowTimeline] = useState(false);
  const [endereco, setEndereco] = useState("Carregando...");

  const pedido = orders.find((p) => String(p.id) === String(orderId));

  useEffect(() => {
    const buscarEndereco = async () => {
      const uid = auth.currentUser?.uid;
      if (!uid) return;
      const docSnap = await getDoc(doc(db, "usuarios", uid));
      if (docSnap.exists()) {
        const d = docSnap.data();
        setEndereco(`${d.localizacao}, ${d.numeroResidencial}${d.complemento ? ` - ${d.complemento}` : ""}`);
      }
    };
    buscarEndereco();
  }, []);

  // ← verificação DEPOIS dos hooks
  if (!pedido) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>Pedido não encontrado.</Text>
      </View>
    );
  }

  const isRetirada = pedido.tipoEntrega === "retirada";
  const frete      = isRetirada ? 0 : 7.0;
  const subtotal   = pedido.total - frete;
  const timeline   = gerarTimeline(pedido.data, pedido.tipoEntrega);
  const STEP_ICONS = isRetirada ? STEP_ICONS_RETIRADA : STEP_ICONS_ENTREGA;

  return (
    <Screen>
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={ICONS.left} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do pedido</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* ── Status ── */}
        <TouchableOpacity style={styles.sectionHeader} activeOpacity={0.7} onPress={() => setShowTimeline(!showTimeline)}>
          <View style={styles.statusDot} />
          <Text style={styles.sectionTitle}>Pedido concluído</Text>
          <Image source={showTimeline ? ICONS.up : ICONS.down} style={styles.chevron} />
        </TouchableOpacity>

        {/* ── Timeline ── */}
        {showTimeline && (
          <View style={styles.timeline}>
            {timeline.map((step, index) => (
              <View key={index} style={styles.timelineRow}>
                <View style={styles.timelineLeft}>
                  <View style={styles.timelineIconWrap}>
                    <Text style={styles.timelineIconText}>{STEP_ICONS[index]}</Text>
                  </View>
                  {index < timeline.length - 1 && <View style={styles.timelineLine} />}
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineLabel}>{step.label}</Text>
                  <Text style={styles.timelineDate}>
                    {formatarDataExtenso(step.data)}, {formatarHora(step.data)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={styles.divider} />

        {/* ── Itens ── */}
        <Text style={styles.orderNumber}>Pedido Nº {pedido.numero}</Text>
        <View style={styles.itemsList}>
          {pedido.itens.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <View style={styles.qtyBadge}>
                <Text style={styles.qtyText}>{item.quantidade}x</Text>
              </View>
              <Text style={styles.itemName} numberOfLines={2}>{item.nome}</Text>
              <Text style={styles.itemPrice}>
                R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.dividerLight} />

        {/* ── Endereço ── */}
        <View style={styles.enderecoBlock}>
          {isRetirada ? (
            <>
              <Text style={styles.enderecoTitulo}>📍 Local de retirada</Text>
              <Text style={styles.enderecoTexto}>Rua São João Batista, 2780</Text>
              <Text style={styles.enderecoAviso}>Retire seu pedido diretamente no estabelecimento.</Text>
            </>
          ) : (
            <>
              <Text style={styles.enderecoTitulo}>Endereço de entrega</Text>
              <Text style={styles.enderecoTexto}>{endereco}</Text>
            </>
          )}
        </View>

        <View style={styles.dividerLight} />

        {/* ── Totais ── */}
        <View style={styles.totalsBlock}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>R$ {subtotal.toFixed(2).replace(".", ",")}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Taxa de entrega</Text>
            <Text style={styles.totalValue}>
              {isRetirada ? "Grátis 🎉" : `R$ ${frete.toFixed(2).replace(".", ",")}`}
            </Text>
          </View>
          <View style={[styles.totalRow, styles.totalRowFinal]}>
            <Text style={styles.totalLabelBold}>Total</Text>
            <Text style={styles.totalValueBold}>R$ {pedido.total.toFixed(2).replace(".", ",")}</Text>
          </View>
        </View>

      </ScrollView>

      {/* ── Botão WhatsApp ── */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.whatsappButton} activeOpacity={0.85}>
          <Image source={ICONS.calling} style={styles.whatsappIcon} />
          <Text style={styles.whatsappLabel}>FALAR COM O ESTABELECIMENTO</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}