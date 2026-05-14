import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { IMG } from "../components/assets";
import Screen from "../components/screen";
import { styles } from "../styles/loginStyle";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha e-mail e senha.");
      return;
    }
    setCarregando(true);
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", "E-mail ou senha incorretos.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Screen>
      <ImageBackground source={IMG.cuscuzCarne} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <View style={styles.content}>

            <View style={styles.searchLoginBox}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#ccc"
                style={styles.searchInput}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.searchLoginBox}>
              <TextInput
                placeholder="Senha"
                placeholderTextColor="#ccc"
                secureTextEntry
                style={styles.searchInput}
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <TouchableOpacity onPress={() => {}} style={styles.forgotContainer}>
              <Text style={styles.forgotText}>
                Esqueceu sua senha?{" "}
                <Text style={styles.forgotHighlight}>Recuperar senha</Text>
              </Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>
              Explore pratos típicos e mergulhe na cultura brasileira.
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={carregando}>
                <Text style={styles.buttonText}>
                  {carregando ? "Entrando..." : "Entrar"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push("/signUp")} style={styles.registerContainer}>
              <Text style={styles.registerText}>
                Não possui uma conta?{" "}
                <Text style={styles.registerHighlight}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>
    </Screen>
  );
}