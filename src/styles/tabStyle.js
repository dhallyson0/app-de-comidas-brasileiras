import { Platform, StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const TAB_BAR_HEIGHT = 70;

export const tabBarStyles = StyleSheet.create({
  tabBar: {
    height: 60,

    backgroundColor: colors.bgLightCard,

    borderRadius: 30,

    borderTopWidth: 0,

    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    paddingBottom: 0,
    paddingTop: 0,

    overflow: "hidden",

    // Android
    elevation: 2,

    // Web
    ...(Platform.OS === "web" && {
      boxShadow: "0px -4px 12px rgba(0,0,0,0.08)",
    }),

    // iOS
    ...(Platform.OS === "ios" && {
      shadowColor: "#000",

      shadowOffset: {
        width: 0,
        height: -4,
      },

      shadowOpacity: 0.08,

      shadowRadius: 12,
    }),
  },

  tabBarItem: {
    paddingTop: 12,
  },
});

export const tabIconStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },

  activeIndicator: {
    width: 4,
    height: 4,

    borderRadius: 999,

    backgroundColor: colors.primary,

    marginTop: 4,

    alignSelf: "center",
  },
});

export const COLORS = {
  primary:        colors.primary,
  tabActive:      colors.primary,
  tabInactive:    colors.textMuted,           
  tabBackground:  colors.bgLightCard,         
};