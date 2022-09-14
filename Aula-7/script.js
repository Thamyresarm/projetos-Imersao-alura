//Lista com as cartas e seus atributos (Lista de Objetos com Objeto atributos dentro)

var cartas = [
  {
    nome: "Mago Negro",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_476225-MLB25392949840_022017-O.jpg",
    atributos: {
      ataque: 2500,
      defesa: 2100,
      magia: 5000
    }
  },
  {
    nome: "Soldado do Lustro Negro",
    imagem:
      "http://vignette2.wikia.nocookie.net/yugioh/images/1/17/BlackLusterSoldierEnvoyoftheBeginning-LCYW-EN-ScR-1E.png/revision/latest?cb=20130820113901",
    atributos: {
      ataque: 2100,
      defesa: 1600,
      magia: 1500
    }
  },
  {
    nome: "Dark Ruler",
    imagem:
      "https://pm1.narvii.com/6213/509bfd4e845b710a402361769f0ce4a86510701a_hq.jpg",
    atributos: {
      ataque: 2450,
      defesa: 1600,
      magia: 1500
    }
  }
];

var cartaMaquina;
var cartaJogador;

//função botao sortear
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3); // pegando a carta de modo aleatorio
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    //comparando as cartas (maquina e jogador) para q nao sejam as mesmas enquanto (while) forem iguais, sorteia novamente
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true; //desabilita botão sortear
  document.getElementById("btnJogar").disabled = false; // habilita botão jogar

  console.log(numeroCartaMaquina);
  console.log(numeroCartaJogador);
  console.log("Carta Jogador" + cartaJogador);
  console.log("Carta Maquina" + cartaMaquina);

  mostrarCartas(cartaJogador); //mostrando a carta do jogador com função
  exibirOpcoes(); // chamando função para as opções
}

//função que exibe as opções em um componente
function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name ='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

//função no botao jogar
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var elementoResultado = document.getElementById("resultado");
  console.log("atributo" + atributoSelecionado);
  console.log("Carta Jogador" + cartaJogador);
  console.log("Carta Maquina" + cartaMaquina);

  //mostrando a carta da maquina com a função
  mostrarCartas(cartaMaquina);

  //condição para comparar cada atributo
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "<h3>Você venceu!!!</h3>";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "<h3>Você Perdeu!!!</h3>";
  } else {
    elementoResultado.innerHTML = "<h3>Empatou!!!</h3>";
  }
  document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
}

//função mostrar cartas
function mostrarCartas(carta) {
  var divCarta = document.getElementById("carta");
  divCarta.innerHTML += "<img src='" + carta.imagem + "' />";
  console.log(divCarta.innerHTML);
}
