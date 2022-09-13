//Lista para guardar os jogadores (jogadores são do tipo Object)
var jogadores = [
  {
    imagem:
      "https://s2.glbimg.com/kQijrBq4FVzzGirahsRK_oi2Q78=/e.glbimg.com/og/ed/f/original/2021/07/16/chucky34.jpg",
    nome: "Chuck",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
  },
  {
    imagem:
      "https://img.elo7.com.br/product/original/319978A/placa-decorativa-mdf-jason-voorhees-sexta-feita-13-602-halloween-michael-myers.jpg",
    nome: "Jason",
    vitorias: 1,
    empates: 2,
    derrotas: 1,
    pontos: 0
  },

  {
    imagem:
      " https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/Freddy_Krueger.jpg/200px-Freddy_Krueger.jpg",
    nome: "Fred",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
  }
];

var exist = 0;
var nomeJogador;

//carregando os jogadores já existentes chamando a função
exibeJogadores(jogadores);

//função para calcular os pontos total dos jogadores
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

//função para exibir os jogadores na tela
function exibeJogadores(jogadores) {
  //salvamos todos os elementos html + informações que queremos mostrar na variavel elemento
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calculaPontos(jogadores[i]);
    elemento += "<tr><td><img src='" + jogadores[i].imagem + "'/></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }

  //pegando a tabela criada no HTML para receber as informações que queremos mostrar na pagina
  var tabelaJogadores = document.getElementById("tabelaJogadores");

  //inserindo os elementos que queremos mostrar na pagina na tabela
  tabelaJogadores.innerHTML = elemento;
}

//função para o botão adicionar vitorias e em seguida chamamos a função para mostrar na tela
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  exibeJogadores(jogadores); // função para mostrar na tela
}

//função para o botão adicionar empates e em seguida chamamos a função para mostrar na tela
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  exibeJogadores(jogadores);
}

//função para o botão adicionar derrotas e em seguida chamamos a função para mostrar na tela
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadores(jogadores);
}

//função para adicionar o jogador e a imagem
function adicionarJogador() {
  //retirando as informações da tela
  nomeJogador = document.getElementById("nomeJogador").value;

  if (nomeJogador != "") {
    jogadores.forEach(verificarSeExiste);

    if (exist == 1) {
      alert("Jogador já adicionado");
      exist = 0;
    } else {
      var fotoJogador = document.getElementById("imagem").value;

      //adicionando na lista
      jogadores.push({
        imagem: fotoJogador,
        nome: nomeJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      });
      //exibindo mais uma vez a lista em tela, atraves da função
      document.getElementById("nomeJogador").value = "";
      exibeJogadores(jogadores);
    }
  } else {
    alert("Digite o nome do Jogador para adicionar");
  }
}

//resetando apenas os valores dos jogadores, utilizando for
function limparTabuleiro() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadores(jogadores);
}

// limpando totalmente os jogadores
function limparJogadores() {
  jogadores = [];
  exibeJogadores(jogadores);
}

function verificarSeExiste(jogador) {
  console.log(nomeJogador);
  console.log(jogador.nome);

  if (nomeJogador == jogador.nome) {
    //comparando o link do usuário com os filmes que constam no array
    exist = 1; // atribuindo 1 para o caso de ja existir
  }
}
