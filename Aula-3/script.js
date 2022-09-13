//variavel guardando um valor randomico
var valorSecreto = parseInt(Math.random() * 11);

//variavel guardando número de tentativas
var qtdTentativas = 3;

//função para o clique do botão
function Chutar() {
  //variavel para guardar o elemento que mostrará o resultado
  var elementoResultado = document.getElementById("resultado");

  //variavel para guardar o valor digitado
  var chute = parseInt(document.getElementById("valor").value);
  if (isNaN(chute)) {
    alert("Preencha o campo!");
  } else {
    //condição que verifica o Número de tentativas
    if (qtdTentativas > 0 && qtdTentativas <= 3) {
      //decrementa a cada clique no botão
      qtdTentativas--;

      //condição para verificar se o valor digitado está entre 1 e 10
      if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um número de 0 a 10!";
      }
      // === compara até o tipo da variavel ex.: "1" é !== de 1, mas "1" == 1
      //condição para verificar se o valor digitado é igual o número secreto
      else if (chute === valorSecreto) {
        //atribuindo tentativa para finalizar o jogo após acerto
        qtdTentativas = 100;
        elementoResultado.innerHTML = "Voce Acertou!";
      }
      //condição resultado das condições acima(se os vaores forem diferentes)
      else {
        //condiçao que informa se o valor secreto é maior que o chute
        if (chute < valorSecreto) {
          var maiorOuMenor = "maior";
          //condiçao que informa se o valor secreto é menor que o chute
        } else {
          maiorOuMenor = "menor";
        }
        elementoResultado.innerHTML =
          "Você Errou! O Valor Secreto é " +
          maiorOuMenor +
          " que " +
          chute +
          ". E Você tem apenas mais " +
          qtdTentativas +
          " tentativas";
      }
    }
    //condição resultado para informar o fim do jogo após 3 tentativas ou após acerto
    else {
      //condição para mensagens de fim do jogo baseado nas tentativas
      if (qtdTentativas === 100)
        alert(`Parabens! Reinicie para jogar novamente!`);
      else
        alert(
          `Que pena, suas tentativas acabaram! Reinicie para jogar novamente!`
        );
    }
  }
}
