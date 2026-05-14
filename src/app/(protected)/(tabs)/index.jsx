import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ICONS } from "../../../components/assets";
import Screen from "../../../components/screen";
import tabelaprodutos from "../../../components/tabelaprodutos";
import { auth, db } from "../../../config/firebase";
import { CartContext } from "../../../context/cartContext";
import { colors } from "../../../styles/globalStyle";
import { styles } from "../../../styles/homeStyle";

export default function Home() {
  const router = useRouter();
  const { addToCart } = useContext(CartContext);

  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Geral");

  const [localizacao, setLocalizacao] = useState("Carregando..."); 

  // Busca a localização do usuário logado
  useEffect(() => {
    const buscarDados = async () => {
      const uid = auth.currentUser?.uid;
      if (!uid) return;

      const docSnap = await getDoc(doc(db, "usuarios", uid));
      if (docSnap.exists()) {
        const dados = docSnap.data();
        // Monta o endereço completo
        const endereco = `${dados.localizacao}, ${dados.numeroResidencial}${dados.complemento ? ` - ${dados.complemento}` : ""}`;
        setLocalizacao(endereco);
      }
    };
    buscarDados();
  }, []);

  const resultados = tabelaprodutos.filter(({ nome, categoria }) =>
  nome.toLowerCase().includes(pesquisa.toLowerCase()) &&
  (categoriaSelecionada === "Geral" ||
    categoria === categoriaSelecionada)
);
  return (
    <Screen>
    <View style={styles.header}>
    {/* LOC */}
    <View style={styles.locationContainer}>
    <Text style={styles.locationLabel}>
      Endereço
    </Text>

    <View style={styles.locationRow}>
      <Text style={styles.locationText}>
        {localizacao}
      </Text>
      <Image
        source={ICONS.down}
        style={styles.downIcon}
      />
    </View>
  </View>

    <View style={styles.searchContainer}>
      <Image
        source={ICONS.search}
        style={styles.searchIcon}
      />

      <TextInput
        placeholder="Pesquisar comida..."
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        value={pesquisa}
        onChangeText={(texto) => setPesquisa(texto)}
      />
    </View>
  </View>

  {/* CATEGORIAS */}
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.categoriasContainer}
  >
        {["Geral", "Lanches", "Bebidas", "Sobremesas"].map(
          (categoria) => (
            <TouchableOpacity
              key={categoria}
              style={[
                styles.categoriaButton,
                categoriaSelecionada === categoria &&
                  styles.categoriaAtiva,
              ]}
              onPress={() =>
                setCategoriaSelecionada(categoria)
              }
            >
              <Text
                style={[
                  styles.categoriaTexto,
                  categoriaSelecionada === categoria &&
                    styles.categoriaTextoAtivo,
                ]}
              >
                {categoria}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* // COMIDAS  */}
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/itemDetail",
                params: {
                  id: item.id,
                },
              })
            }
          >

            <Image
              source={item.imagem}
              style={styles.imagem}
              resizeMode="cover"
            />

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.categoria}>
              {item.categoria}
            </Text>

            <Text style={styles.grupo}>
              {item.grupo}
            </Text>

            <View style={styles.footerCard}>
              <Text style={styles.preco}>
              R${item.preco}
              </Text>

              <TouchableOpacity
              onPress={() => {
                  addToCart(item);
                  alert("Adicionado ao carrinho 🛒");
                 }}
              >
                <Image
                  source={ICONS.plus}
                  style={styles.botaoIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
}