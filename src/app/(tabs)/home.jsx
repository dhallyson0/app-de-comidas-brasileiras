import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tabelaprodutos from "../../components/tabelaprodutos";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Home 🏠</Text>

      {tabelaprodutos.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/itemDetail",
              params: {
                id: item.id,
              },
            })
          }
        >
          <Text style={styles.buttonText}>
           {item.nome}
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