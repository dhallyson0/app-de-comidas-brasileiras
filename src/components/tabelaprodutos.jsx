const tabelaprodutos = [

//LANCHES//
{
  id: 1 ,
  nome: "Cuscuz com carne de sol",
  categoria: "Lanches",
  preco: "R$18,00",
  descricao: "O cuscuz com carne de sol e queijo coalho é um prato clássico nordestino, caracterizado pelo flocão de milho cozido no vapor, recheado com carne de sol desfiada e frita na manteiga de garrafa, e queijo coalho derretido. A combinação equilibra a textura macia do cuscuz, o salgado da carne e a cremosidade do queijo.",
  imagem: require("../../assets/images/LANCHES-cuscuz.png"),
},

{
  id: 2 ,
  nome: "Bolo Frito",
  categoria: "Lanches",
  preco: "R$12,00",
  descricao: "É um clássico do café da manhã ou lanche da tarde. O bolo frito é um petisco tradicional feito de goma de mandioca, ovos e sal, frito em óleo quente até ficar dourado e com textura crocante por fora e macia por dentro. ",
  imagem: require("../../assets/images/LANCHES-bolofrito.png"),
},

{
  id: 3 ,
  nome: "Coxinha de Carne de Sol",
  categoria: "Lanches",
  preco: "R$14,00",
  descricao: "Igual a receita original, a coxinha de carne de sol é caracterizada por uma massa consistente e recheada com carne de sol desfiada e temperada. Possui casca crocante, interior cremoso e sabor marcante.",
  imagem: require("../../assets/images/LANCHES-coxinhacarne.png"),
},

{
  id: 4 ,
  nome: "Bolo de Goma",
  categoria: "Lanches",
  preco: "R$15,00",
  descricao: "O bolo de goma é um bolo simples, macio e de sabor suave, feito essencialmente com polvilho, ovos, leite e óleo. É uma opção popular para café da manhã ou lanche, caracterizado por uma casquinha crocante e textura leve por dentro.",
  imagem: require("../../assets/images/LANCHES-bologoma.png"),
},

{
  id: 5 ,
  nome: "Bolo de Macaxeira com Coco",
  categoria: "Lanches",
  preco: "R$16,00",
  descricao: "O bolo de macaxeira com coco é um clássico brasileiro, famoso pela sua textura densa, cremosa e úmida. Feito com macaxeira crua ralada, ovos, leite de coco e coco ralado, oferece um sabor marcante e caseiro, perfeito com café.",
  imagem: require("../../assets/images/LANCHES-bolomacaxeira.png"),
},

{
  id: 6 ,
  nome: "Bomba",
  categoria: "Lanches",
  preco: "R$10,00",
  descricao: "A Bomba é um salgado frito típico de Teresina, Piauí, conhecido pela sua casquinha crocante, massa fofinha e recheio de presunto e queijo generoso.",
  imagem: require("../../assets/images/LANCHES-bomba.png"),
},

//BEBIDAS//
{
  id: 7 ,
  nome: "Cajuína",
  categoria: "Bebidas",
  preco: "R$8,00",
  descricao: "A cajuína é uma bebida não alcoólica produzida a partir do suco de caju, típica do Nordeste brasileiro. Destaca-se pela cor amarelo-âmbar, sabor suave e adocicado, sendo obtida pela retirada do tanino e caramelização natural.",
  imagem: require("../../assets/images/BEBIDA-cajuina.png"),
},

{
  id: 8 ,
  nome: "Caldo de Cana",
  categoria: "Bebidas",
  preco: "R$9,00",
  descricao: "O caldo de cana é uma bebida tradicional, não alcoólica, energética e com alto teor de sacarose. É uma bebida natural, doce e refrescante, obtida através da moagem da cana-de-açúcar.",
  imagem: require("../../assets/images/BEBIDA-caldodcana.png"),
},

{
  id: 9 ,
  nome: "Suco de Bacuri",
  categoria: "Bebidas",
  preco: "R$5,00",
  descricao: "O suco de bacuri, ou ouro branco da Amazônia, é uma bebida exótica, cremosa e refrescante, típica da região amazônica e conhecida pelo seu sabor marcante com aroma intenso.",
  imagem: require("../../assets/images/BEBIDA-sucobacuri.png"),
},

{
  id: 10 ,
  nome: "Suco de Cajá",
  categoria: "Bebidas",
  preco: "R$5,00",
  descricao: "O suco de cajá é uma bebida tropical refrescante e nutritiva, conhecida por seu sabor marcante que equilibra acidez e doçura. Feito da polpa da fruta madura, tem cor amarela vibrante, aroma intenso, textura levemente cremosa.",
  imagem: require("../../assets/images/BEBIDA-sucocaja.png"),
},

{
  id: 11 ,
  nome: "Suco de Caju",
  categoria: "Bebidas",
  preco: "R$5,00",
  descricao: "O suco de caju é uma bebida tropical brasileira, conhecida por seu sabor peculiar, aroma intenso e alto poder refrescante. É uma excelente opção para dias quentes.",
  imagem: require("../../assets/images/BEBIDA-sucocaju.png"),
},

//SOBREMESAS//
{
  id: 12 ,
  nome: "Tapioca Romeu e Julieta",
  categoria: "Sobremesas",
  preco: "R$17,00",
  descricao: "É uma combinação clássica brasileira que une o sabor salgado do queijo com o doce da goiabada. Servida quente, a goma de mandioca fica crocante por fora e macia por dentro, criando um contraste perfeito entre o queijo derretido e a goiabada.",
  imagem: require("../../assets/images/SOBREMESA-tapioca.png"),
},

{
  id: 13 ,
  nome: "Doce de Caju",
  categoria: "Sobremesas",
  preco: "R$12,00",
  descricao: "Iguaria típica brasileira, especialmente do Nordeste. Preparada com o pedúnculo do caju cozido em calda de açúcar, resultando em um doce de cor avermelhada, textura firme por fora e macia por dentro, aromatizado com canela.",
  imagem: require("../../assets/images/SOBREMESA-docecaju.png"),
},

{
  id: 14 ,
  nome: "Bolo de Tapioca com Leite Condensado",
  categoria: "Sobremesas",
  preco: "R$13,00",
  descricao: "É uma sobremesa cremosa e gelada, popularmente conhecida como cuscuz de tapioca, que não vai ao forno. Feito com tapioca granulada , leite, leite de coco e coco ralado. Destaca-se pela praticidade e textura macia, sendo finalizado com bastante leite condensado por cima.",
  imagem: require("../../assets/images/SOBREMESA-bolotapioca.png"),
},

{
  id: 15 ,
  nome: "Mungunzá Doce",
  categoria: "Sobremesas",
  preco: "R$8,00",
  descricao: "O mungunzá doce é uma iguaria tradicional, feita à base de milho cozido, leite de coco, leite integral, açúcar e canela. É um prato cremoso, típico de festas juninas, consumido quente ou frio.",
  imagem: require("../../assets/images/SOBREMESA-mungunzadoce.png"),
},
]
export default tabelaprodutos;