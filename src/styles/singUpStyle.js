import { StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.bgDark,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 30,
    color: colors.textWhite,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    lineHeight: 40,
    letterSpacing: 0.8,
    marginBottom: 18,
  },

  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttonContainer: {
    marginBottom: 3,
    width: "90%",
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },

  buttonText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: "bold",
  },

  searchLoginBox: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  searchInput: {
    color: colors.textWhite,
    fontSize: 16,
    paddingVertical: 10,
  },

  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  forgotText: {
    color: "#ccc",
    fontSize: 13,
  },

  forgotHighlight: {
    color: "#4da3ff",
    fontWeight: "bold",
  },
});