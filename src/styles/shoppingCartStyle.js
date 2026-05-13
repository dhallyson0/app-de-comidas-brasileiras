import { StyleSheet } from "react-native";
import { colors } from "./globalStyle";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },

  conteudo: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 25,
  },

  tipoEntrega: {
    alignSelf: "center",
    width: "95%",
    backgroundColor: colors.primary,
    borderRadius: 16,
    marginBottom: 25,
  },

  delivery: {
    color: colors.textWhite,
    textAlign: "center",
    paddingVertical: 14,
    fontWeight: "bold",
    fontSize: 16,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 10,
  },

  input: {
    backgroundColor: colors.bgLightCard,
    borderRadius: 14,
    padding: 15,
    marginBottom: 25,
    fontSize: 16,
    color: colors.textDark,
  },

  produtoArea: {
    backgroundColor: colors.bgLightCard,
    padding: 15,
    borderRadius: 18,
    marginBottom: 25,
  },

  linhaTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  imagem: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 12,
  },

  nomeProduto: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
  },

  descricao: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 3,
  },

  linhaBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  botao: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.dividerLight,
    justifyContent: "center",
    alignItems: "center",
  },

  botaoTexto: {
    fontSize: 18,
    color: colors.textDark,
    fontWeight: "bold",
  },

  quantidade: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: colors.textDark,
  },

  resumo: {
    backgroundColor: colors.bgLightCard,
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },

  resumoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: colors.textDark,
  },

  linhaResumo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  texto: {
    color: colors.textSecondary,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: colors.textDark,
  },

  botaoFinalizar: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  textoBotao: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "bold",
  },

  containerEntrega: {
  flexDirection: "row",
  backgroundColor: "#F2F2F2",
  borderRadius: 20,
  padding: 4,
  marginBottom: 25,
},

botaoEntrega: {
  flex: 1,
  paddingVertical: 12,
  borderRadius: 16,
  alignItems: "center",
},

botaoAtivo: {
  backgroundColor: colors.primary,
},

textoEntrega: {
  color: "#555",
  fontWeight: "bold",
},

textoAtivo: {
  color: "#FFF",
},

enderecoRetirada: {
  textAlign: "center",
  color: "#555",
  marginBottom: 15,
  fontSize: 14,
},

pagamentoContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: colors.bgLightCard,
  borderRadius: 18,
  padding: 16,
  marginBottom: 12,
},
pagamentoEsquerda: {
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
},
pagamentoIconBox: {
  backgroundColor: colors.backgroundScreen,
  borderRadius: 10,
  padding: 10,
},
pagamentoIcone: {
  height: 22,
  width: 24,
  tintColor: colors.primary,
},
pagamentoTitulo: {
  fontSize: 15,
  fontWeight: "600",
  color: colors.textDark,
},
pagamentoTotal: {
  fontSize: 13,
  color: colors.primary,
  marginTop: 2,
},
pagamentoSeta: {
  fontSize: 16,
  color: colors.textMuted,
},
pagamentoOpcao: {
  backgroundColor: colors.backgroundScreen,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: colors.dividerLight,
  padding: 14,
  marginBottom: 12,
},
pagamentoOpcaoTexto: {
  fontSize: 14,
  color: colors.textSecondary,
},

});