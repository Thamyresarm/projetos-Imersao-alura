//Lista com as cartas e seus atributos (Lista de Objetos com Objeto atributos dentro)
var baralhoJogador = [
  {
    nome: "Mago Negro",
    imagem:
      "https://i.pinimg.com/280x280_RS/5d/c1/ba/5dc1badbdca1fd57768865af5b74f418.jpg",
    atributos: {
      ataque: 2500,
      defesa: 2100,
      magia: 5000
    }
  },
  {
    nome: "Soldado do Lustro Negro",
    imagem:
      "http://pm1.narvii.com/7234/d28fd96b93cb2ed8ccf2c88a7db95ee1697e8960r1-480-484v2_uhq.jpg",
    atributos: {
      ataque: 2100,
      defesa: 1600,
      magia: 1500
    }
  },
  {
    nome: "Governante Sombrio",
    imagem:
      "http://vignette3.wikia.nocookie.net/yugioh/images/d/d0/ADealwithDarkRuler-TF04-JP-VG.jpg/revision/latest/scale-to-width-down/275?cb=20120425022122",
    atributos: {
      ataque: 2450,
      defesa: 1600,
      magia: 1500
    }
  }
];
var baralhoMaquina = [
  {
    nome: "Jovem Touro Guerreiro",
    imagem:
      "https://s3-sa-east-1.amazonaws.com/loja2/2de09462b795787b97b96496a93d3a9e.jpg",
    atributos: {
      ataque: 1800,
      defesa: 1300,
      magia: 500
    }
  },
  {
    nome: "Centauro Furioso",
    imagem:
      "https://static.wikia.nocookie.net/yugioh/images/7/71/RabidHorseman-OW.png/revision/latest?cb=20140617033555",
    atributos: {
      ataque: 2000,
      defesa: 1700,
      magia: 500
    }
  },
  {
    nome: "Empress Judge",
    imagem:
      "https://64.media.tumblr.com/b768d5e08b67aa431c81e0adf306f257/7b046c19e8c96f9d-12/s540x810/f6bc02c701264e4b490f3d3b71230ea0db239014.pnj",
    atributos: {
      ataque: 2100,
      defesa: 1700,
      magia: 2000
    }
  }
];

var cartaMaquina;
var cartaJogador;

var divCartaMaquina = document.getElementById("carta-maquina"); // pegando o elemento no html

//função botao sortear
function sortearCarta() {
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

  //ocultar a carta maquina (a partir da segunda rodada)
  limparCartaMaquina();

  //Exibindo a carta do Jogador

  var divCartaJogador = document.getElementById("carta-jogador"); // pegando o elemento no html
  divCartaJogador.innerHTML = exibirCarta(divCartaJogador, cartaJogador); // elemento recebendo/ mostrando no html a imagem montada atraves da função exibir carta

  var tagHTML = `<div id="opcoes" class="carta-status">`;

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    // for para inserir os atributos com radios buttons
    opcoesTexto +=
      "<input type='radio' name ='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  divCartaJogador.innerHTML += tagHTML + opcoesTexto + "</div>";
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
    var elementoResultado = document.getElementById("resultado");
    var indice;

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

    document.getElementById("btnJogar").disabled = true; // desabilita botão jogar
    document.getElementById("btnSortear").disabled = false; //habilita botão sortear

    //Exibindo a carta da Maquina

    divCartaMaquina.innerHTML = exibirCarta(divCartaMaquina, cartaMaquina); // elemento recebendo/ mostrando no html a imagem montada atraves da função exibir carta
    var tagHTML = `<div id="opcoes" class="carta-status">`;

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name ='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    divCartaMaquina.innerHTML += tagHTML + opcoesTexto + "</div>";
  }

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

function exibirCarta(div, carta) {
  div.style.backgroundImage = `url(${carta.imagem})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle">${carta.nome}</p>`;

  return moldura + nome;
}

function limparCartaMaquina() {
  divCartaMaquina.style.backgroundImage = `url("")`;
  divCartaMaquina.innerHTML = `<img
                            src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;">`;
}
