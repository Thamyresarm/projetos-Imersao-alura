var exist;
var vetorListaFilmes = [];
var vetorListaNomesFilmes = [];
var listaFilmes = document.getElementById("listaFilmes");

//função para acrescentar as imagens (utilizada no forEach)
function adicionarImagem(nomeFilme, link) {
  listaFilmes.innerHTML += "<img src=" + link + ">"; //inserindo filme na div
  listaFilmes.innerHTML += `<p class="page-subtitle"> ${nomeFilme} </p>`; //Inserindo nome na div
}

//função para verificar a validade do filme inserido utilizando if
function verificarSeExiste(filme) {
  if (link == filme || nomeFilme == filme) {
    //comparando o link do usuário com os filmes que constam no array
    exist = 1; // atribuindo 1 para o caso de ja existir
  }
}

//função para carregar os itens do array na pagina
function carregarItensPagina() {
  listaFilmes.innerHTML = ""; //Limpar a div antes de mostrar o novo vetor

  //Não conseguir usar o forEach por se tratar de 2 vetores
  for (let i = 0; i < vetorListaFilmes.length; i++) {
    adicionarImagem(vetorListaNomesFilmes[i], vetorListaFilmes[i]); //forEach para mostrar as imagens do novo array
  }
}

//chamando a função para mostrar as imagens que ja constam no array
carregarItensPagina();

//função utilizada no botão para incluir novas imagens
function adicionarFilme() {
  link = document.getElementById("filme").value; //salvando o valor inserido
  nomeFilme = document.getElementById("nomeFilme").value; //pegando nome do filme

  //verificar se campos estão vazios
  if (nomeFilme != "" && link != "") {
    if (link.endsWith(".jpg") || link.endsWith(".png")) {
      // verificando tipo de link

      vetorListaFilmes.forEach(verificarSeExiste); //forEach para verificar se o link ja existe
      vetorListaNomesFilmes.forEach(verificarSeExiste); //forEach para verificar se o nome ja existe

      if (exist == 1) {
        alert("Filme já está adicionado");
        exist = 0; // resetando a variavel de verificação
      } else {
        vetorListaFilmes.push(link); // inserindo novo filme no array
        vetorListaNomesFilmes.push(nomeFilme); // inserindo novo filme no array
        carregarItensPagina();
      }
    } else {
      alert("Formato do caminho inválido");
    }
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
  } else {
    alert("Preencha todos os campos");
  }
}
function removerFilme() {
  nomeFilme = document.getElementById("nomeFilme").value; //pegando nome do filme
  link = document.getElementById("filme").value; //pegando o filme

  //verificando se existe nos vetores
  for (let i = 0; i < vetorListaFilmes.length; i++) {
    if (nomeFilme == vetorListaNomesFilmes[i] && link == vetorListaFilmes[i]) {
      exist = 1;
    }
  }

  if (exist == 1) {
    vetorListaFilmes.pop(link);
    vetorListaNomesFilmes.pop(nomeFilme);
    carregarItensPagina();
    exist = 0; // resetando a variavel de verificação
  } else {
    alert("Filme não encontrado na lista");
  }
}
