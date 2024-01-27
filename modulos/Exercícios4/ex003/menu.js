function menu() {
  var menu = document.getElementById("menu-r");
  var botao = document.getElementById("botao");
  var img = document.getElementById("img-botao");

  if (menu.style.display == "none") {
    menu.style.display = "block";
    botao.style.margin = "0px";
    img.src = "close.svg";
  } else {
    menu.style.display = "none";
    img.src = "menu.svg";
  }
}
