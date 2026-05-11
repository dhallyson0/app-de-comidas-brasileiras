import { View, Text, StyleSheet } from "react-native";

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página do carrinho de compra 🛒</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22 },
});