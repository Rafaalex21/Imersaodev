function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmC = parseFloat(valor);
  var valorEmF = (((valorEmC * 9)/5) + 32).toFixed(1)
  console.log(valorEmF);
  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = " O resultado em Farenheit " + valorEmF + "F°";
  elementoValorConvertido.innerHTML = valorConvertido;
  
}
function Converter2() {
  var valorElemento2 = document.getElementById("valor2");
  var valor2 = valorElemento2.value;
  var valorEmF = parseFloat(valor2);
  var valorEmC =  (((valorEmF-32) *5)/9)
  console.log(valorEmC);
  var elementoValorConvertido2 = document.getElementById("valorConvertido2")
  var valorConvertido2 = " O resultado em Celsius " + valorEmC + "C°";
  elementoValorConvertido2.innerHTML = valorConvertido2;
  
}
function Converter3() {
  var valorElemento3 = document.getElementById("valor3");
  var valor3 = valorElemento3.value;
  var valorEmC = parseFloat(valor3);
  var valorEmK =  valorEmC + 273.15
  console.log(valorEmK);
  var elementoValorConvertido3 = document.getElementById("valorConvertido3")
  var valorConvertido3 = " O resultado em Kelvin " + valorEmK + "K°";
  elementoValorConvertido3.innerHTML = valorConvertido3;
  
}