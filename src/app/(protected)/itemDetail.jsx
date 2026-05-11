import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import Screen from "../../components/screen";
import tabelaprodutos from "../../components/tabelaprodutos";
import { styles } from "../../styles/itemDetailStyle";

export default function ItemDetail() {
  const router = useRouter();

  const ICONS = {
    back:       require("../../../assets/icons/arrow_Left.png"),
    star:       require("../../../assets/icons/star.png"),
    heart:      require("../../../assets/icons/heart.png"),
    milk:       require("../../../assets/icons/milk.png"),
    cart:       require("../../../assets/icons/bag.png"),
    bean:       require("../../../assets/icons/bean.png"),
    motorbike:  require("../../../assets/icons/motor_Bike.png"),
  };

  const [mostrarTudo, setMostrarTudo] = useState(false);

  const { id } = useLocalSearchParams();

  const produto = tabelaprodutos.find(
    (item) => item.id == id
  );

  return (

    <Screen>
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => router.push("/")}
        >
          <Image 
            source={ICONS.back}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Detalhe
        </Text>

        <Image
          source={ICONS.heart}
          style={styles.heartIcon}
        />

      </View>

      <Image
        source={produto.imagem}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text style={styles.nome}>
          {produto.nome}
        </Text>

        <View style={styles.categoryContainer}>

          <Text style={styles.categoria}>
            {produto.categoria}
          </Text>

          <View style={styles.iconsRow}>

            <View style={styles.iconBox}>
              <Image
                source={ICONS.motorbike}
                style={styles.smallIcon}
              />
            </View>

            <View style={styles.iconBox}>
              <Image
                source={ICONS.bean}
                style={styles.smallIcon}
              />
            </View>

            <View style={styles.iconBox}>
              <Image
                source={ICONS.milk}
                style={styles.smallIcon}
              />
            </View>

          </View>

        </View>

        <View style={styles.infoRow}>

          <Image
            source={ICONS.star}
            style={styles.icon}
          />

          <Text style={styles.infoText}>
            4.8
          </Text>

          <Text style={styles.avaliacoes}>
            (230)
          </Text>

        </View>
        
        <View style={styles.divider} />

        <Text style={styles.tituloDescricao}>
          Descrição
        </Text>

        <Text
          style={styles.descricao}
          numberOfLines={mostrarTudo ? undefined : 3}
        >

          {produto.descricao}

        </Text>

        <TouchableOpacity
          onPress={() => setMostrarTudo(!mostrarTudo)}
        >

          <Text style={styles.lerMais}>
            {mostrarTudo ? "Ler menos" : "Ler mais"}
          </Text>

        </TouchableOpacity>

        <View style={styles.bottomWrapper}>

          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.priceLabel}>
                Preço
              </Text>

              <Text style={styles.bottomPrice}>
                {produto.preco}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.cartButton}
            >
              <View style={styles.cartContent}>
                <Image
                  source={ICONS.cart}
                  style={styles.cartIcon}
                />

                <Text style={styles.cartButtonText}>
                  Adicionar
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

      </View>

    </ScrollView>
    </Screen>
  );
}