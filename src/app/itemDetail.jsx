import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ItemDetail() {
  const router = useRouter();
  const { nome, preco } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página de detalhes</Text>

      <Text>Nome: {nome}</Text>
      <Text>Preço: R$ {preco}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/home")}
      >
        <Text style={styles.buttonText}>Ir para home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22 },
  button: { backgroundColor: "#6200ee", padding: 14, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16 },
});