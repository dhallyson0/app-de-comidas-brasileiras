import { useRouter } from "expo-router";
import { ImageBackground, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { IMG } from "../components/assets";
import Screen from "../components/screen";
import { styles } from "../styles/loginStyle";

export default function login() {
  const router = useRouter();

  return (
    <Screen>
    <ImageBackground 
      source={IMG.cuscuzCarne}
      style={styles.background}
      resizeMode="cover"
    >
      
      <View style={styles.overlay}>
        <View style={styles.content}>

          {/* EMAIL */}
          <View style={styles.searchLoginBox}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ccc"
              style={styles.searchInput}
            />
          </View>

          {/* SENHA */}
          <View style={styles.searchLoginBox}>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#ccc"
              secureTextEntry
              style={styles.searchInput}
            />
          </View>

          {/* ESQUECEU SENHA */}
          <TouchableOpacity
            onPress={() => {}}
            style={styles.forgotContainer}
          >
            <Text style={styles.forgotText}>
              Esqueceu sua senha?{" "}
              <Text style={styles.forgotHighlight}>
                Recuperar senha
              </Text>
            </Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>
            Explore pratos típicos e mergulhe na cultura brasileira.
          </Text>

          {/* BOTÃO ENTRAR */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace("/")}
            >
              <Text style={styles.buttonText}>
                Entrar
              </Text>
            </TouchableOpacity>
          </View>

          {/* CADASTRO */}
          <TouchableOpacity
            onPress={() => {}}
            style={styles.registerContainer}
          >
            <Text style={styles.registerText}>
              Não possui uma conta?{" "}
              <Text style={styles.registerHighlight}>
                Cadastre-se
              </Text>
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
    </Screen>  
  );
}