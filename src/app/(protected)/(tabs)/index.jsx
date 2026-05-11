import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Screen from "../../../components/screen";
import tabelaprodutos from "../../../components/tabelaProdutos";
import { colors } from "../../../styles/globalStyle";
import { styles } from "../../../styles/homeStyle";

export default function Home() {
  const router = useRouter();

  const ICONS = {
    search:       require("../../../../assets/icons/search.png"),
    plus:         require("../../../../assets/icons/plus.png"),
    down:         require("../../../../assets/icons/arrow_Down.png"),
  };

  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Geral");

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
      Localização
    </Text>

    <View style={styles.locationRow}>
      <Text style={styles.locationText}>
        Teresina, Piaui
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
          paddingBottom: 120,
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
              {item.preco}
              </Text>

              <TouchableOpacity>
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