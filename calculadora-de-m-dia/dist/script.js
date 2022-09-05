var nome = "Rafael"
var nota1 = parseInt(window.prompt("Digite a nota do primeiro bimestre"))
var nota2 = parseInt(window.prompt("Digite a nota do segundo bimestre"))
var nota3 = parseInt(window.prompt("Digite a nota do terceiro bimestre"))
var nota4 = parseInt(window.prompt("Digite a nota do quarto bimestre"))




document.getElementById("media").innerText = "Sua média foi " + ((nota1+nota2+nota3+nota4)/4)
if ((nota1+nota2+nota3+nota4)/4 >= 6.0){
  document.getElementById("resultadoPositivo").innerText = "Parabéns, você foi aprovado!!!"
} else
    document.getElementById("resultadoNegativo").innerText = "Que pena, você não foi aprovado"


// isso é um comentario