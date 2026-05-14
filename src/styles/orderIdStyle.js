import { StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const styles = StyleSheet.create({

  // ── Estrutura ──────────────────────────────────────────────────────────────

  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundScreen,
  },

  emptyText: {
    color: colors.textSecondary,
    fontSize: 16,
  },

  scrollContent: {
    paddingBottom: 100, // espaço para o footer fixo
  },

  // ── Header ─────────────────────────────────────────────────────────────────

header: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 20,
  paddingTop: 20,
  paddingBottom: 16,
  gap: 12,
  backgroundColor: colors.backgroundScreen,
  borderBottomWidth: 1,
  borderBottomColor: colors.dividerLight,
},

backButton: {
  width: 22,
  height: 22,
  tintColor: colors.textDark,
},

headerTitle: {
  fontSize: 20,
  fontWeight: "700",
  color: colors.textDark,
  letterSpacing: -0.3,
},

  // ── Divisores ──────────────────────────────────────────────────────────────

  divider: {
    height: 1,
    backgroundColor: colors.dividerLight,
    marginHorizontal: 0,
  },

  dividerLight: {
    height: 1,
    backgroundColor: colors.dividerLight,
    marginHorizontal: 20,
    marginVertical: 4,
  },

  // ── Cabeçalho da seção de status ───────────────────────────────────────────

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 10,
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.textSecondary,
  },

  sectionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    color: colors.textDark,
  },

  chevron: {
    width: 20,
    height: 20,
  },

  // ── Timeline ───────────────────────────────────────────────────────────────

  timeline: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },

  timelineRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    minHeight: 64,
  },

  timelineLeft: {
    width: 44,
    alignItems: "center",
  },

  timelineIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F8EE", // verde suave consistente
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  timelineIconText: {
    fontSize: 16,
  },

  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#A8DFB8",
    marginVertical: 2,
    minHeight: 20,
  },

  timelineContent: {
    flex: 1,
    paddingLeft: 14,
    paddingTop: 9,
    paddingBottom: 16,
  },

  timelineLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 3,
  },

  timelineDate: {
    fontSize: 13,
    color: colors.textSecondary,
  },

  // ── Itens do pedido ────────────────────────────────────────────────────────

  orderNumber: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.textDark,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 14,
    letterSpacing: -0.2,
  },

  itemsList: {
    paddingHorizontal: 20,
    gap: 14,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  qtyBadge: {
    borderWidth: 1.5,
    borderColor: colors.dividerLight,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    minWidth: 38,
    alignItems: "center",
  },

  qtyText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textDark,
  },

  itemName: {
    flex: 1,
    fontSize: 14,
    color: colors.textDark,
    fontWeight: "500",
    lineHeight: 20,
  },

  itemPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textDark,
    minWidth: 70,
    textAlign: "right",
  },

  // Endereço

  enderecoBlock: {
  paddingHorizontal: 20,
  paddingTop: 16,
  paddingBottom: 16,
  gap: 4,
},

enderecoTitulo: {
  fontSize: 13,
  color: colors.textSecondary,
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: 0.5,
},

enderecoTexto: {
  fontSize: 15,
  fontWeight: "600",
  color: colors.textDark,
},

  // ── Totais ─────────────────────────────────────────────────────────────────

  totalsBlock: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 10,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalRowFinal: {
    marginTop: 4,
  },

  totalLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },

  totalValue: {
    fontSize: 14,
    color: colors.textSecondary,
  },

  totalLabelBold: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.textDark,
  },

  totalValueBold: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.textDark,
  },

  // ── Footer / Botão WhatsApp ─────────────────────────────────────────────────

  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderTopColor: colors.dividerLight,
  },

  whatsappButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },

  whatsappIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },

  whatsappLabel: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.textWhite,
    letterSpacing: 0.8,
  },
});