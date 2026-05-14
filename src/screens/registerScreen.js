import { API_URL } from "../config/api";

const handleCadastro = async () => {
  const response = await fetch(`${API_URL}/auth/cadastro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha, endereco }),
  });

  const data = await response.json();

  if (response.ok) {
    Alert.alert("Sucesso!", "Cadastro realizado!");
    navigation.navigate("Login");
  } else {
    Alert.alert("Erro", data.erro);
  }
};