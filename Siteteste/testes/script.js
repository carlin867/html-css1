var nome = document.getElementById("inome");
var idade = document.getElementById("iidade");
var gosto = document.getElementById("igosto");
var res = document.getElementById("res");

nome.placeholder = "_ _ _ _ _ _ _ _ _ _ _ _ _ _";
idade.placeholder = "Ex: 15";

gosto.placeholder = "Ex: Futebol,Futsal,Basquete.";

function clickAqui() {
  if (nome.value.length == 0 || idade.value.length == 0 || gosto.value.length == 0) {
    alert("Preencha todos os campos");
  }else{
    var idaden = Number(idade.value)
    var nomen = String(nome.value)
    var goston = String(gosto.value)
    res.innerHTML = `O Usuário ${nomen} de ${idaden} anos disse [ Eu gosto de ${goston} ]`
  }
}

