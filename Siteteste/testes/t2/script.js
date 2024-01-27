var img = document.getElementById("imagem");
var c1 = 1;
var c2 = 1;

function acender() {
  img.src = "acesa.png";
  if (c1 > 5) {
    img.src = "queimada.png";
    c1 = 1;
    alert("Você queimou a lâmpada!!!");
    var resposta = prompt("Você deseja restaura-la?");
    if (resposta.toLowerCase() == "sim") {
      alert("Aperte em acender que ele vai voltar!!!");
      c1 = 1;
    } else if (
      resposta.toLowerCase() == "não" ||
      resposta.toLowerCase() == "nao"
    ) {
      alert("TAaaaaaaaa!!!");
      c1 = 6;
    }
  } else {
    c1 = c1 + 1;
  }
}
function apagar() {
  img.src = "apagada.png";
  if (c2 > 5) {
    if (c1 >= 1.5) {
      c2 = 1;
    }
    alert("A lâmpada ja esta apagada seu bosta!!!");
  } else if (c1 > 5) {
    img.src = "queimada.png";
    alert("Não da para apaga pois a lampada esta queimada!!!");
  } else {
    c2 = c2 + 1;
  }
}
