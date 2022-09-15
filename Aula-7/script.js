//Lista com as cartas e seus atributos (Lista de Objetos com Objeto atributos dentro)
var baralhoJogador = [
  {
    nome: "Dark Ruler Ha Des",
    imagem:
      "https://pm1.narvii.com/6213/509bfd4e845b710a402361769f0ce4a86510701a_hq.jpg",
    atributos: {
      ataque: 2450,
      defesa: 1600
    }
  },
  {
    nome: "Celtic Guardian",
    imagem:
      "https://3.bp.blogspot.com/-KMomtJE6ids/VZ3pqXFnYWI/AAAAAAAAerA/vbiCKXoDkoQ/s1600/Guardi%25C3%25A3o%2BCelta%2BYugioh.png",
    atributos: {
      ataque: 1400,
      defesa: 1200
    }
  },
  {
    nome: "Touro Guerreiro Enfurecido",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_971021-MLB20691481886_042016-O.jpg",
    atributos: {
      ataque: 1700,
      defesa: 1000
    }
  }
];
var baralhoMaquina = [
  {
    nome: "Jovem Touro Guerreiro",
    imagem:
      "https://mypcards.com/img/3/604/yugioh_mrd-en064/yugioh_mrd-en064_en_thumb.jpg",
    atributos: {
      ataque: 1800,
      defesa: 1300
    }
  },
  {
    nome: "Battle Ox",
    imagem:
      "https://mypcards.com/img/3/761/yugioh_sdk_005/yugioh_sdk_005_en.jpg",
    atributos: {
      ataque: 1700,
      defesa: 1000
    }
  },
  {
    nome: "Axe Raider",
    imagem:
      "https://repositorio.sbrauble.com/arquivos/in/yugioh_bkp/cd/576/1672.jpg",
    atributos: {
      ataque: 2100,
      defesa: 1700,
      magia: 2000
    }
  }
];
var cartaMaquina;
var cartaJogador;
var divCarta = document.getElementById("carta");
var elementoResultado = document.getElementById("resultado");

//função botao sortear
function sortearCarta() {
  divCarta.innerHTML = "";
  elementoResultado.innerHTML = "";

  var numeroCartaMaquina = parseInt(Math.random() * baralhoMaquina.length); // pegando a carta de modo aleatorio
  cartaMaquina = baralhoMaquina[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * baralhoJogador.length);
  /*  while (numeroCartaMaquina == numeroCartaJogador) {
    //comparando as cartas (maquina e jogador) para q nao sejam as mesmas enquanto (while) forem iguais, sorteia novamente
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }*/
  cartaJogador = baralhoJogador[numeroCartaJogador];
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

//função para encontrar a carta que sera removida do baralho
function localizarCarta(baralho, carta) {
  for (var i = 0; i < baralho.length; i++) {
    if (baralho[i].nome == carta.nome) {
      var indice = i;
    }
  }
  return indice;
}

//função no botao jogar
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  if (typeof atributoSelecionado === "undefined") {
    alert("Selecione a skill para continuar");
  } else {
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    var indice;

    console.log("atributo " + atributoSelecionado);
    console.log("Carta Jogador " + cartaJogador);
    console.log("Carta Maquina " + cartaMaquina);

    //condição para comparar cada atributo
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "<p class='resultado-final'>Você Venceu!";
      var indice = localizarCarta(baralhoMaquina, cartaMaquina);
      baralhoMaquina.splice(indice, 1);
      baralhoJogador.push(cartaMaquina);
    } else if (valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML =
        "<p class='resultado-final'>Você Perdeu!!!</p>";
      indice = localizarCarta(baralhoJogador, cartaJogador);
      baralhoJogador.splice(indice, 1);
      baralhoMaquina.push(cartaJogador);
    } else {
      elementoResultado.innerHTML = "<p class='resultado-final'>Empatou!!!</p>";
    }
    console.log("indice " + indice);
    document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
    document.getElementById("btnSortear").disabled = false; //habilita botão sortear

    //mostrando a carta da maquina com a função
    mostrarCartas(cartaMaquina);

    //verificando se as cartas acabaram
    var elementoResultadoFinal = document.getElementById("resultadoFinal");
    if (baralhoMaquina.length == 0) {
      elementoResultadoFinal.innerHTML =
        "<p class='resultado-final'>Fim do Jogo! Você Venceu! A Maquina está sem cartas...</p>";
      document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
      document.getElementById("btnSortear").disabled = true; //desabilita botão sortear
    } else if (baralhoJogador.length == 0) {
      elementoResultadoFinal.innerHTML =
        "<p class='resultado-final'>Fim do Jogo! Você Perdeu!Suas cartas acabaram...</p>";
      document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
      document.getElementById("btnSortear").disabled = true; //desabilita botão sortear
    }
  }
}

//função mostrar cartas
function mostrarCartas(carta) {
  divCarta.innerHTML += "<img src='" + carta.imagem + "' />";
  console.log(divCarta.innerHTML);
}
