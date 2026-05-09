import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const produtos = [
    { id: 1, nome: "Café", preco: 10 },
    { id: 2, nome: "Suco", preco: 8 },
    { id: 3, nome: "Chá", preco: 6 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Home 🏠</Text>

      {produtos.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/itemDetail",
              params: {
                nome: item.nome,
                preco: item.preco,
              },
            })
          }
        >
          <Text style={styles.buttonText}>
            Ver {item.nome}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 22 },
  button: { backgroundColor: "#6200ee", padding: 14, borderRadius: 8, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 16 },
});