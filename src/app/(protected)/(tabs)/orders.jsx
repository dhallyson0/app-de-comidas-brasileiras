import { View, Text, StyleSheet } from "react-native";

export default function Orders() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página dos pedidos 📋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22 },
});