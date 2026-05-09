import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Delivery() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página da entrega</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22 },
});