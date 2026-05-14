import { StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },

  header: {
    position: "absolute",
    top: 25,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    width: 24,
    height: 24,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
  },

  image: {
    width: "90%",
    height: 250,
    marginTop: 100,
    borderRadius: 30,
    alignSelf: "center",
  },

  content: {
    flex: 1,
    padding: 25,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textDark,
  },

  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  categoria: {
    fontSize: 16,
    color: colors.textSecondary,
  },

  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: colors.bgLightCard,
    justifyContent: "center",
    alignItems: "center",
  },

  smallIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  icon: {
    width: 28,
    height: 28,
  },

  infoText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.bgDark,
  },

  avaliacoes: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.textSecondary,
  },

  tituloDescricao: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textDark,
  },

  divider: {
   height: 1,
   backgroundColor: colors.dividerLight,
   marginTop: 20,
  },

  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
  },

  lerMais: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "bold",
    color: colors.primary,
  },

  bottomWrapper: {
    marginTop: 40,
    marginBottom: 35,
    padding: 22,
    borderRadius: 30,
    backgroundColor: colors.bgLightCard,
    shadowColor: colors.bgDark,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  priceLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: colors.textSecondary,
  },

  bottomPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },

  cartButton: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 20,
    shadowColor: colors.primary,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  cartContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  cartIcon: {
    width: 18,
    height: 18,
    tintColor: colors.textWhite,
    resizeMode: "contain",
  },

  cartButtonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: "bold",
  },
});