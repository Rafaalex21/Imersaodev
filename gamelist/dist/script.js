var listaJogos = [
  "https://upload.wikimedia.org/wikipedia/en/7/7c/Shin_Megami_Tensei_Nocturne_NA_cover.png",
  "https://static-cdn.jtvnw.net/ttv-boxart/Shin%20Megami%20Tensei%20IV.jpg",
  "https://upload.wikimedia.org/wikipedia/en/4/47/Persona3cover.jpg",
  "https://img.comunidades.net/sep/septurosgames/devil_may_cry_5_pc_get_cheap_cd_key_5__1.jpg"
];

for (var i = 0; i < listaJogos.length; i++) {
  document.write("<img src=" + listaJogos[i] + ">");
}
function add() {
  var addJogo = document.getElementById("link").value;
  listaJogos.push(addJogo);
  var imgJogo = document.createElement("img");
  imgJogo.src = addJogo;
  document.body.appendChild(imgJogo);
}