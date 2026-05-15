import { StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.bgDark,
    paddingTop: 25,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },

  // LOC
  locationContainer: {
    marginBottom: 18,
  },

  locationLabel: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 6,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textWhite,
  },

  downIcon: {
  width: 12,
  height: 12,
  resizeMode: "contain",
  marginLeft: 6,
  tintColor: colors.textWhite,
},

  // PESQUISA
  searchContainer: {
    height: 58,
    backgroundColor: colors.bgLightCard,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },

  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 10,
  },

  input: {
    flex: 1,
    color: colors.textDark,
    fontSize: 16,
  },

  // CATEGORIAS
  categoriasContainer: {
    maxHeight: 80,
    minHeight: 80,
    marginTop: 15,
    marginBottom: 20,
  },

  categoriaButton: {
    width: 95,
    height: 55,
    backgroundColor: colors.bgLightCard,
    borderRadius: 14,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  categoriaAtiva: {
    backgroundColor: colors.primary,
  },

  categoriaTexto: {
    color: colors.textSecondary,
    fontWeight: "500",
  },

  categoriaTextoAtivo: {
    color: colors.textWhite,
    fontWeight: "700",
  },

  // COMIDAS
  card: {
    backgroundColor: colors.bgLightCard,
    width: "47%",
    borderRadius: 18,
    padding: 10,
    marginBottom: 16,
  },

  imagem: {
    width: "100%",
    height: 120,
    borderRadius: 14,
    marginBottom: 10,
  },

  nome: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textDark,
  },

  categoria: {
  fontSize: 12,
  color: colors.primary,
  fontWeight: "600",
  marginTop: 4,
},

  grupo: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },

  footerCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: "auto",
  },

  preco: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textSecondary,
    flexShrink: 0,
  },

  botaoIcon: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
});