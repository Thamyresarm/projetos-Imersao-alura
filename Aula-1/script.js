//Variáveis de string
var nome = "Thamyres";

//Função
function CalcularMedia() {
  //Variáveis decimais
  var notaPrimeiroBimestre = parseFloat(document.getElementById("nota1").value);
  var notaSegundoBimestre = parseFloat(document.getElementById("nota2").value);
  var notaTerceiroBimestre = parseFloat(document.getElementById("nota3").value);
  var notaQuartoBimestre = parseFloat(document.getElementById("nota4").value);

  if (
    isNaN(notaPrimeiroBimestre) ||
    isNaN(notaSegundoBimestre) ||
    isNaN(notaTerceiroBimestre) ||
    isNaN(notaQuartoBimestre)
  ) {
    alert("Preencha todos os campos!");
  } else {
    //Soma
    var somaNotas =
      notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre;

    //Divisão
    var notaFinalFormatada = (somaNotas / 4).toFixed(1);

    //Saídas
    console.log("--------- Bem vindo! ---------");
    console.log("Média de " + nome + " é: " + notaFinalFormatada);

    if (notaFinalFormatada >= 7) var situacao = "Aprovada!";
    else var situacao = "Reprovada!";

    var resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<p>" +
      nome +
      " sua nota foi " +
      notaFinalFormatada +
      ". Você está " +
      situacao +
      "</p>";
    console.log(resultado.innerHTML);
  }
}

//Conversão de Fahrenheit
console.log("--------- Conversão de Temperatura para Fahrenheit ---------");
var grausCelsius = 30;
var grausFahrenheit = grausCelsius * 1.8 + 32;

console.log(grausCelsius + "°C é igual a " + grausFahrenheit + "°F.");
