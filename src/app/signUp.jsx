import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IMG } from "../components/assets";
import Screen from "../components/screen";
import { auth, db } from "../config/firebase";
import { styles } from "../styles/singUpStyle";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [numeroResidencial, setNumeroResidencial] = useState("");
  const [complemento, setComplemento] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async () => {
    if (!email || !senha || !localizacao || !numeroResidencial) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }
    setCarregando(true);
    try {
      // Cria o usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      // Salva os dados no Firestore
      await setDoc(doc(db, "usuarios", uid), {
        email,
        senha,
        localizacao,
        numeroResidencial: Number(numeroResidencial),
        complemento: complemento || "",
        criadoEm: new Date().toISOString(),
      });

      Alert.alert("Sucesso!", "Cadastro realizado!");
      router.replace("/login");
    } catch (error) {
      Alert.alert("Erro", error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <ImageBackground source={IMG.cuscuzCarne} style={styles.background} resizeMode="cover">
            <View style={styles.overlay}>
              <View style={styles.content}>

                <Text style={styles.subtitle}>Cadastro</Text>

                <View style={styles.searchLoginBox}>
                  <TextInput placeholder="Email" placeholderTextColor="#ccc"
                    style={styles.searchInput} value={email} onChangeText={setEmail}
                    keyboardType="email-address" autoCapitalize="none" />
                </View>

                <View style={styles.searchLoginBox}>
                  <TextInput placeholder="Senha" placeholderTextColor="#ccc"
                    secureTextEntry style={styles.searchInput}
                    value={senha} onChangeText={setSenha} />
                </View>

                <View style={styles.searchLoginBox}>
                  <TextInput placeholder="Endereço (ex: Rua Edson Cunha)"
                    placeholderTextColor="#ccc" style={styles.searchInput}
                    value={localizacao} onChangeText={setLocalizacao} />
                </View>

                <View style={styles.searchLoginBox}>
                  <TextInput placeholder="Número da casa" placeholderTextColor="#ccc"
                    style={styles.searchInput} value={numeroResidencial}
                    onChangeText={setNumeroResidencial} keyboardType="numeric" />
                </View>

                <View style={styles.searchLoginBox}>
                  <TextInput placeholder="Complemento (opcional)" placeholderTextColor="#ccc"
                    style={styles.searchInput} value={complemento} onChangeText={setComplemento} />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={handleCadastro} disabled={carregando}>
                    <Text style={styles.buttonText}>
                      {carregando ? "Cadastrando..." : "Cadastrar"}
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}