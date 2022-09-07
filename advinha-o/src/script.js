var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

function Chutar() {
  tentativa++;
  var resultado = document.getElementById("resultado");
  var tentativas = document.getElementById("tentativas");
  var chute = parseInt(document.getElementById("valor").value);
  tentativas.innerHTML = "Tentativa número " + tentativa;
  if (chute === numeroSecreto) {
    resultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = " Você deve digitar um número de 0 a 10";
  } else {
    //quando errou
    if (tentativa >= 3) {
      //ultrapassou numero de tentativas
      resultado.innerHTML =
        " Você ultrapassou seu limite de tentativas.<br> Será gerado um novo número";
      tentativa = 0;
      numeroSecreto = parseInt(Math.random() * 11);
    } else if (chute < numeroSecreto) {
      // chute é menor que o numerosecreto
      resultado.innerHTML =
        "Meus pêsames, você errou! o número secreto é maior do que o número digitado ";
    } else {
      //chute é maior que o numero secreto
      resultado.innerHTML =
        "Meus pêsames, você errou! o número secreto é menor do que o número digitado";
    }
  }
}
