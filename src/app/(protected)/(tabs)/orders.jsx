import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Screen from "../../../components/screen";
import { useOrders } from "../../../context/ordersContext";
import { styles } from "../../../styles/orderStyle";

function formatarData(date) {
  const d = new Date(date);
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatarHora(date) {
  const d = new Date(date);
  return d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

export default function Orders() {
  const { orders } = useOrders();
  const router = useRouter(); 

  return (
    
    <Screen>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seus pedidos</Text>
      </View>

      {/* Lista de pedidos ou empty state */}
      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛍️</Text>
          <Text style={styles.emptyTitle}>Nenhum pedido ainda</Text>
          <Text style={styles.emptySubtitle}>
            Seus pedidos aparecerão aqui depois de finalizados
          </Text>
        </View>
      ) : (
        <ScrollView
          style={styles.list}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        >
          {orders.map((pedido) => (
            <TouchableOpacity 
            key={pedido.id} 
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/[pedidoId]",
                params: { pedidoId: pedido.id },
              })
            }
            >

              <View style={styles.cardTop}>
                <View style={styles.checkCircle}>
                  <Text style={styles.checkIcon}>✓</Text>
                </View>

                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>Pedido Nº {pedido.numero}</Text>
                  <Text style={styles.cardDate}>
                    Feito em {formatarData(pedido.data)}
                  </Text>
                  <Text style={styles.cardDetails}>
                    Tipo:{" "}
                    <Text style={styles.bold}>{pedido.tipoEntrega}</Text>
                    {"   "}Total:{" "}
                    <Text style={styles.bold}>
                      R$ {pedido.total.toFixed(2).replace(".", ",")}
                    </Text>
                  </Text>
                </View>

                <Text style={styles.arrow}>›</Text>
              </View>

              <View style={styles.cardBottom}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>{pedido.status}</Text>
                <Text style={styles.statusTime}>
                  {formatarData(pedido.data)}, {formatarHora(pedido.data)}
                </Text>
              </View>

            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Screen>
  );
}