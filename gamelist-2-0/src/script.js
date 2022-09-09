var listaJogos = ["SMT Nocturne"];
var listaPosteres = [
  "https://m.media-amazon.com/images/I/71X694mEq2S._AC_SL1500_.jpg"
];

var elementoListaJogos = document.getElementById("listaJogos");

function adicionarJogo() {
  var nomeJogo = document.getElementById("titulo").value;
  var posterJogo = document.getElementById("poster").value;

  // Verifica se o campo está vazio e se Jogo já está presente na lista (-1: não foi encontrado no vetor)
  if (nomeJogo.length != 0 && listaJogos.indexOf(nomeJogo) == -1) {
    // Verifica se o formato da imagem é suportado
    if (posterJogo.endsWith(".jpg")) {
      // Insere o título e o seu poster à lista.
      listaJogos.push(nomeJogo);
      listaPosteres.push(posterJogo);
      alert("O Jogo foi adicionado à lista com sucesso!");
    }
    // Caso a imagem possui um formato diferente
    else {
      alert(
        "[ERRO] O endereço possui um formato de imagem inválido! Formato Suportado: JPG"
      );
    }
  }
  // Caso o Jogo já esteja na lista ou o usuário não tenha digitado nada
  else {
    alert(
      "[ERRO] Não foi possivel adicionar filme à lista! O título já se encontra na lista ou não é válido!"
    );
  }

  // Limpa a lista  e os campos
  elementoListaJogos.innerHTML = "";
  document.getElementById("titulo").value = "";
  document.getElementById("poster").value = "";
}

function removerJogo() {
  // Grava o título informado pelo usuário e verifica sua posição na lista
  var nomeJogo = document.getElementById("titulo").value;
  var indice = listaJogos.indexOf(nomeJogo);

  // Verifica se o Jogo está presente na lista
  if (indice == -1) {
    alert(
      "[ERRO] Não foi possível remover, pois o título informado não foi encontrado na lista!"
    );
  }
  // Caso esteja na lista
  else {
    // Remove o título e poster da lista.
    listaJogos.splice(indice, 1);
    listaPosteres.splice(indice, 1);
    alert("O Jogo foi removido da lista com sucesso!!");
  }

  // Limpa a lista (HTML) e os campos
  elementoListaJogos.innerHTML = "";
  document.getElementById("titulo").value = "";
  document.getElementById("poster").value = "";
}

function mostrarLista() {
  // Limpa a lista (HTML)
  elementoListaJogos.innerHTML = "";

  // Para cada título cria uma tag h3 e um poster uma tag img.
  for (var i in listaJogos) {
    elementoListaJogos.innerHTML +=
      "<h3 class=game-title>" +
      listaJogos[i] +
      "<br><img src=" +
      listaPosteres[i] +
      " class=game-poster>";
  }

  // Limpa os campos
  document.getElementById("titulo").value = "";
  document.getElementById("poster").value = "";
}
