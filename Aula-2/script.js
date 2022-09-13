//Variável que guarda a informação retirada da página
var valorInserido = 1;
//Variável que guarda o valor convertido
var valorRealNumerico = 1;
//guardar valor digitado na pagina

//----------------------------- Funções secundárias -----------------------------------
//Função para retirar o valor da pagina, a mesma se repete nos 2 botões
function PegarValorPagina() {
  //Salvando o elemento inteiro na tela em uma variável
  var valorElemento = document.getElementById("valor");
  //Salvando apenas o valor inserido no elemento
  var valor = valorElemento.value;
  //convertendo valor do elemento, que é retirado em forma de texto, para float
  valorInserido = parseFloat(valor);
  //Mostrando no console
  console.log("Valor retirado da tela: " + valorInserido);
}

//Função para retornar o valor a pagina, a mesma se repete nos 2 botões
function RetornarValorPagina() {
  //Salvando o elemento inteiro na tela em uma variável
  var elementoValorConvertido = document.getElementById("valorConvertidoReais");
  //Formatando a mensagem do valor convertido para mostrar na pagina
  var valorConvertido = "O resultado em real é R$ " + valorRealNumerico;
  //Mostrando o valor convertido na pagina
  elementoValorConvertido.innerHTML = valorConvertido;
  MostrarValorBitcoins();
}
//--------------------------------------------------------------------------------
//Função principal do botão DOLAR
function ConverterDeDolar() {
  PegarValorPagina();

  //validando se há valor inserido
  if (isNaN(valorInserido)) {
    alert("Preencha o campo!");
  } else {
    //Descobrindo o valor do Dolar em Real
    valorRealNumerico = valorInserido * 5.19;
    //Mostrando no console
    console.log(
      "Valor em Dolar retirado da tela, convertido em Reais: " +
        valorRealNumerico
    );
    RetornarValorPagina();
  }
}

//--------------------------------------------------------------------------------
//Função principal do botão EURO
function ConverterDeEuro() {
  PegarValorPagina();

  //validando se há valor inserido
  if (isNaN(valorInserido)) {
    alert("Preencha o campo!");
  } else {
    //Descobrindo o valor do Euto em Real
    valorRealNumerico = valorInserido * 5.14;
    //Mostrando no console
    console.log(
      "Valor em Euro retirado da tela, convertido em Reais: " +
        valorRealNumerico
    );
    RetornarValorPagina();
  }
}
//--------------------------------------------------------------------------------

//Função para mostrar o valor em bitcoins em nova linha
function MostrarValorBitcoins() {
  //Salvando o elemento inteiro na tela em uma variável
  var elementoValorConvertido = document.getElementById(
    "valorConvertidoBitcoins"
  );
  //Formatando a mensagem do valor convertido em Bitcoins para mostrar na pagina
  var valorConvertido =
    "O resultado em Bitcoins é " + (valorRealNumerico * 0.0000097).toFixed(6);
  //Mostrando no console
  console.log("Valor em Bitcoins: " + valorConvertido);
  //Mostrando o valor convertido na pagina
  elementoValorConvertido.innerHTML = valorConvertido;
}
