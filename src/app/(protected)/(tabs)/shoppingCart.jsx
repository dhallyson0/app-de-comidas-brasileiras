import { useContext, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { ICONS } from "../../../components/assets";
import Screen from "../../../components/screen";
import tabelaprodutos from "../../../components/tabelaprodutos";
import { CartContext } from "../../../context/cartContext";
import { useOrders } from "../../../context/ordersContext";
import { styles } from "../../../styles/shoppingCartStyle";

export default function ShoppingCart() {

  const produtos= tabelaprodutos;

  const [pagamento, setPagamento] = useState("dinheiro");
  const [expandirPagamento, setExpandirPagamento] = useState(false);

  const [tipoEntrega, setTipoEntrega] = useState("entrega");

  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const { criarPedido } = useOrders();

  const subtotal = produtos.reduce((acc, item) => {
    const qtd = cart[item.id] || 0;
    return acc + item.preco * qtd;
  }, 0);

  const enderecoLoja = "Rua São João Batista, 2780"
  const entrega =
  tipoEntrega === "retirada"
    ? 0
    : subtotal >= 30
    ? 0
    : 7;
  const total = (subtotal + entrega).toFixed(2);

  function finalizarPedido() {
  const itensNoCarrinho = produtos.filter((item) => cart[item.id] > 0);

  if (itensNoCarrinho.length === 0) return; // carrinho vazio, não faz nada

  const cartItems = itensNoCarrinho.map((item) => ({
    ...item,
    quantidade: cart[item.id],
  }));

  criarPedido(cartItems, parseFloat(total), tipoEntrega); // 👈 cria o pedido
  clearCart(); // 👈 limpa o carrinho
}

  return (
    <Screen>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.conteudo}>

        <Text style={styles.titulo}>Carrinho</Text>
        {tipoEntrega === "retirada" && (
       <Text style={styles.enderecoRetirada}>
       📍Retirar em: {enderecoLoja}
       </Text>
        )}

        <View style={styles.containerEntrega}>

  <TouchableOpacity
    style={[
      styles.botaoEntrega,
      tipoEntrega === "entrega" && styles.botaoAtivo
    ]}
    onPress={() => setTipoEntrega("entrega")}
  >
    <Text
      style={[
        styles.textoEntrega,
        tipoEntrega === "entrega" && styles.textoAtivo
      ]}
    >
      Entrega
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.botaoEntrega,
      tipoEntrega === "retirada" && styles.botaoAtivo
    ]}
    onPress={() => setTipoEntrega("retirada")}
  >
    <Text
      style={[
        styles.textoEntrega,
        tipoEntrega === "retirada" && styles.textoAtivo
      ]}
    >
      Retirada
    </Text>
  </TouchableOpacity>

</View>

       {produtos
        .filter((item) => cart[item.id] > 0)
        .map((item) => (
          <View key={item.id} style={styles.produtoArea}>

            <View style={styles.linhaTop}>
              <Image source={item.imagem} style={styles.imagem} />

              <View>
                <Text style={styles.nomeProduto}>{item.nome}</Text>
                <Text style={styles.descricao}>{item.categoria}</Text>
              </View>
            </View>

            <View style={styles.linhaBottom}>

              <Text style={styles.texto}>
                R$ {item.preco.toFixed(2)}
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>

                
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => removeFromCart(item)}
                >
                  <Text style={styles.botaoTexto}>-</Text>
                </TouchableOpacity>
                
                <Text style={styles.quantidade}>
                  {cart[item.id] || 0}
                </Text>

                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.botaoTexto}>+</Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
        ))}

        <View style={styles.resumo}>
          <Text style={styles.resumoTitulo}>Resumo</Text>

          <View style={styles.linhaResumo}>
            <Text style={styles.texto}>Produto</Text>
            <Text style={styles.texto}>R$ {subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.linhaResumo}>
            <Text style={styles.texto}>Entrega</Text>

              <Text style={styles.texto}>
              {entrega === 0 ? "Grátis 🎉" : `R$ ${entrega.toFixed(2)}`}
            </Text>
          </View>

          <Text style={styles.total}>Total: R$ {total}</Text>
        </View>

        <TouchableOpacity
          style={styles.pagamentoContainer}
          onPress={() => setExpandirPagamento(!expandirPagamento)}
        >
          <View style={styles.pagamentoEsquerda}>
            <View style={styles.pagamentoIconBox}>
              <Image 
              source={ICONS.wallet}
              style={styles.pagamentoIcone} 
              />
            </View>

            <View>
              <Text style={styles.pagamentoTitulo}>Dinheiro</Text>
              <Text style={styles.pagamentoTotal}>R$ {total}</Text>
            </View>
          </View>

          <Text style={styles.pagamentoSeta}>
            {expandirPagamento ? "∧" : "∨"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botaoFinalizar}
        onPress={finalizarPedido}>
          <Text style={styles.textoBotao}>Finalizar Pedido</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
    </Screen>
  );
}