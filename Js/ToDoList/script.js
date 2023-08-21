var botaoAdd = document.getElementById("myBtn");
var tarefas = document.getElementById("listaTarefas");
var lista = [];

function Enviar() {
  var input = (document.getElementById("novaTarefa").value).toLowerCase()

  
  for (let i = 0; i <= lista.length; i++) {
    if (lista[i] == input) {
      alert("Nome repetido");
      return;
    }
  }
  lista.push(input);
  tarefas.innerHTML = (lista.join("<br>"));
 
}

 function Editar() {
   var pergunta= prompt("Digite qual tarefa você deseja editar").toLowerCase()
   
   for (let i = 0; i <= lista.length; i++) {
    if (lista[i] == pergunta) {
    var editar=prompt("Pra qual nome deseja editar?").toLowerCase()
    if(lista[i]==editar){
        alert("Tarefa ja existe")
        return
    }
     
     lista[i]=editar
     tarefas.innerHTML = (lista.join("<br>"));
      break;  
    }
    //precisa de um alert caso a tarefa nao exista
    
    
 
  }
  

}
 function Deletar() {
  lista.pop()
  tarefas.innerHTML = (lista.join("<br>"));
}
