function ConverterAnosLuz() {
  var distanciaKilometros = parseFloat(document.getElementById("valor").value);
  var distanciaALMetros = 9460730472580800; 
  // https://en.wikipedia.org/wiki/Light-year

  var distConvertida = (distanciaKilometros / distanciaALMetros) * 1000;

  var elementoValorAnosLuz = document.getElementById("ValorAnosLuz");

  var valorConvertido =
    "A distância de " +
    distanciaKilometros +
    "Km equivale a " +
    distConvertida.toFixed(20) +
    " anos luz";
  elementoValorAnosLuz.innerHTML = valorConvertido;
}