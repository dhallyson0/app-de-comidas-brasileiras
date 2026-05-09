import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.buttonText}>Ir para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: "#6200ee", padding: 14, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16 },
});