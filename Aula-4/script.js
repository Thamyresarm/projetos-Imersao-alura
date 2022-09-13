//Com apenas o ensinamento mostrato na aula de hoje não consegui concluir os desafio. Para inserir o forEach tive que substituir o document.write pelo innerHTML, pois o ensinado retirava tudo que existia na pagina e incluia apenas a imagem.

//Div criada no HTML para receber as imagens
var div = document.getElementById("filmes");

//variavel que vai receber o link do usuario ao apertar o botão, está declarada fora da função pois será utilizada em outras funções, como a de comparação
var link;

//variavel para verificar se ja existe um link igual ao inserido
var exist = 0;

//Array com os itens pre definidos
var listaFilmes = [
  "https://img.olhardigital.com.br/wp-content/uploads/2022/08/L08A_CORAL-rerelease_2009_BRAZIL_4x5-819x1024.jpg",
  "https://media.fstatic.com/3RjBbEbO9lGB1u-hhvYQqhzhNTk=/290x478/smart/media/movies/covers/2011/07/b08e70cb29b0f14fb6162ab786be12a7_1.jpg",
  "https://i.ytimg.com/vi/ePpJDKfRAyM/movieposter.jpg"
];

//função para acrescentar as imagens (utilizada no forEach)
function adicionarImagem(filme) {
  div.innerHTML += "<img src=" + filme + ">";
}

//função para verificar a validade do filme inserido utilizando if
function verificarSeExiste(filme) {
  if (link == filme) {
    //comparando o link do usuário com os filmes que constam no array
    exist = 1; // atribuindo 1 para o caso de ja existir
  }
}

//forEach para mostrar as imagens que ja constam no array
listaFilmes.forEach(adicionarImagem);

//função utilizada no botão para incluir novas imagens
function Adicionar() {
  link = document.getElementById("link").value; //salvando o valor inserido

  if (link.endsWith(".jpg") || link.endsWith(".png")) {
    // verificando tipo de link

    listaFilmes.forEach(verificarSeExiste); //forEach para verificar se o link ja existe

    if (exist == 1) {
      alert("Filme já está adicionado");
      exist = 0; // resetando a variavel de verificação
    } else {
      listaFilmes.push(link); // inserindo novo filme no array
      div.innerHTML = ""; // limpando a div antes de preencher com array
      listaFilmes.forEach(adicionarImagem); // forEach para mostrar as imagens do novo array
    }
  } else {
    alert("Formato do caminho inválido");
  }
  document.getElementById("link").value = "";
}
