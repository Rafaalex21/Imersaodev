function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  var valorEmReal =  valorEmDolar * 5
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = " O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
  
}
function Converter2() {
  var valorElemento2 = document.getElementById("valor2");
  var valor2 = valorElemento2.value;
  var valorEmLibra = parseFloat(valor2);
  var valorEmReal =  valorEmLibra * 6
  console.log(valorEmReal);
  var elementoValorConvertido2 = document.getElementById("valorConvertido2")
  var valorConvertido2 = " O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido2.innerHTML = valorConvertido2;
  
}
function Converter3() {
  var valorElemento3 = document.getElementById("valor3");
  var valor3 = valorElemento3.value;
  var valorEmReal = parseFloat(valor3);
  var valorEmBitcoin =  valorEmReal / 100000
  console.log(valorEmBitcoin);
  var elementoValorConvertido3 = document.getElementById("valorConvertido3")
  var valorConvertido3 = " O resultado em Bitcoin é ₿ " + valorEmBitcoin;
  elementoValorConvertido3.innerHTML = valorConvertido3;
  
}