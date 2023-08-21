const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#btn-fecha");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
var botaoAdd = document.getElementById("myBtn");
var tarefas = document.getElementById("listaTarefas");
var lista = [];
var listaCompletas = [];
var img = [
  "imagens/gatoFeio.png",
  "imagens/girotto.png",
  "imagens/macaco.png",
  "imagens/ribamar.png"
];

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

function msc() {
  var audio = document.getElementById("audio");
  audio.play();
}

function Enviar() {
  var input = document.getElementById("novaTarefa").value.toLowerCase();

  for (let i = 0; i <= lista.length; i++) {
    if (lista[i] == input) {
      alert("Nome repetido");
      return;
    }
  }
  lista.push(input);
  tarefas.innerHTML = lista.join("<br>");
}

var ip = document.getElementById("icon-principal");

var essaimg = localStorage.getItem("icon-principal")

ip.src = essaimg;

var xispe = localStorage.getItem("essexp")

var kompletas = localStorage.getItem("kompletas")

var rk1 = localStorage.getItem("1lugar")
var rk2 = localStorage.getItem("2lugar")
var rk3 = localStorage.getItem("3lugar")
var rk4 = localStorage.getItem("4lugar")
var rkSalvo1;
var rkSalvo2;
var rkSalvo3;
var rkSalvo4;

var xp = document.getElementById("xp-input");
var lugarUm = document.getElementById("1lugar");
var lugardois = document.getElementById("2lugar");
var lugarTres = document.getElementById("3lugar");
var lugarquatro = document.getElementById("4lugar");
var listaComple = document.getElementById("listaTarefasCumpridas");

var rank = ["Marco(390xp)", "Rafael(220xp)", "Luis(150xp)", "Ribamar(50xp)"]


lugarUm.innerText = rk1;
lugardois.innerText = rk2;
lugarTres.innerText = rk3;
lugarquatro.innerText = rk4;

if (xispe == null){
  xp.innerText = 0
} else{
  xp.innerText = xispe
}

if (rk1 == null){
  lugarUm.innerText = "1 lugar:" + rank[0]
} else{
  lugarUm.innerText = rk1
}

if (rk2 == null){
  lugardois.innerText = "2 lugar:" + rank[1]
} else{
  lugardois.innerText = rk2
}

if (rk3 == null){
  lugarTres.innerText = "3 lugar:" + rank[2]
} else{
  lugarTres.innerText = rk3
}

if (rk4 == null){
  lugarquatro.innerText = "4 lugar:" + rank[3]
} else{
  lugarquatro.innerText = rk4
}


listaComple.innerText = kompletas;




function btnCompletas() {

  var xp = document.getElementById("xp-input");
  var listaComple = document.getElementById("listaTarefasCumpridas");

  let pergunta = prompt("Qual tarefa você deseja completar?").toLowerCase();
  for (let i = 0; i <= lista.length; i++) {
    if (lista[i] == pergunta) {

      listaCompletas.push(pergunta);
      localStorage.setItem("kompletas", listaCompletas)
      listaComple.innerHTML = listaCompletas.join("<br>");

      var totalXp = listaCompletas.length * 100;
      xp.innerHTML = totalXp;

      localStorage.setItem("essexp", totalXp);

      lista.splice(pergunta.indexOf(1));
      tarefas.innerHTML = lista.join("<br>");
      if (totalXp == 100) {
        rkSalvo4 = (lugarquatro.innerHTML = `4 lugar:Mel( ` + totalXp + ` xp)`);
        var novaimg = (ip.src = img[0]);
        localStorage.setItem("icon-principal", img[0])
        localStorage.setItem("4lugar", rkSalvo4)
      }

      else if (totalXp == 200) {
        rkSalvo3 =  (lugarTres.innerHTML = `3 lugar:Mel( ` + totalXp + ` )`);       
        var novaimg = (ip.src = img[1]);
        localStorage.setItem("icon-principal", img[1])
        localStorage.setItem("3lugar", rkSalvo3)
        localStorage.setItem("4lugar", "4-Luis(150xp)")
        lugarquatro.innerText = localStorage.getItem("4lugar")
      }
      else if (totalXp == 300) {
        rkSalvo2 =(  lugardois.innerHTML = `2 lugar:Mel(` + totalXp + `xp)`);       
        var novaimg = (ip.src = img[2]);
        localStorage.setItem("icon-principal", img[2]);
        localStorage.setItem("2lugar", rkSalvo2)
        localStorage.setItem("3lugar", "3-Rafael(220xp)")
        lugarTres.innerText = localStorage.getItem("3lugar")
      }
      else if (totalXp >= 400) {

        var novaimg = (ip.src = img[3]);
        rkSalvo1 = (lugarUm.innerHTML = `1 lugar:Mel(` + totalXp + `xp)`);
        localStorage.setItem(novaimg, img[3]);
        localStorage.setItem("1lugar", rkSalvo1)
        localStorage.setItem("2lugar", "2-Marco(390xp)")
        lugardois.innerText = localStorage.getItem("2lugar")
      }
    }
  }
}
