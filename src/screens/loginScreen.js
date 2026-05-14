import { API_URL } from "../config/api";

const handleLogin = async () => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (response.ok) {
    // Salva o uid para usar nas próximas telas
    navigation.navigate("Home", { uid: data.uid });
  } else {
    Alert.alert("Erro", "E-mail ou senha incorretos.");
  }
};