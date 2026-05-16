import { StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const styles = StyleSheet.create({
  // ── Header ──────────────────────────────────────────────
  header: {
    backgroundColor: colors.bgDark,
    paddingTop: 56,
    paddingBottom: 80,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textWhite,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 14,
    marginTop: 4,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primaryLight,
  },

  // ── Lista ────────────────────────────────────────────────
  list: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },

  // ── Card de pedido ───────────────────────────────────────
  card: {
    backgroundColor: colors.bgLightCard,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
    shadowColor: colors.bgDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 12,
  },
  checkCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.dividerLight,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: "700",
  },
  cardInfo: {
    flex: 1,
    gap: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textDark,
  },
  cardDate: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  cardDetails: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  bold: {
    fontWeight: "700",
    color: colors.textDark,
  },
  arrow: {
    height: 24,
    width: 24,
  },

  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.dividerLight,
    gap: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.textMuted,
  },
  statusText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
  },
  statusTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },

  // ── Empty State ──────────────────────────────────────────
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    gap: 10,
  },
  emptyIcon: {
    fontSize: 56,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textDark,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
});