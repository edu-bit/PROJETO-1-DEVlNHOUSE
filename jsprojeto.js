//Esta Função cria um novo afazer após clicar no botão de adicionar tarefa e cria um botão para deletar
function novoElemento() {
    var li = document.createElement("li");
    var valorInput = document.getElementById("meuInput").value
    var texto = document.createTextNode(valorInput)
    var checkbox = document.createElement('input')    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "fechar";
    span.appendChild(txt)    
        checkbox.type = "checkbox"
        checkbox.value = 1
        checkbox.name = "todo[]"
        checkbox.id = "idCheck"
        li.id='ilId'        
        li.appendChild(texto)
        li.appendChild(checkbox)
        li.appendChild(span)    
        checkbox.onclick = loopCheck         

        if (valorInput === '') {
        alert("É necessário escrever algo para que seja adicionado à lista de afazeres");
    }   else {
        document.getElementById("Unorderedlist").appendChild(li);
        
        
    
    }
document.getElementById("meuInput").value = ""     
}


//Esta função risca o texto quando o checkbox é adicionado
function loopCheck() {
    for (var i = 0; i < document.querySelectorAll('#idCheck').length ; i++) {
        if (document.querySelectorAll('#idCheck')[i].checked == true) {
            document.querySelectorAll('#idCheck')[i].parentElement.classList.remove('task-incompleted')
            document.querySelectorAll('#idCheck')[i].parentElement.classList.add('task-completed')
        }         
        if (document.querySelectorAll('#idCheck')[i].checked == false) {
            document.querySelectorAll('#idCheck')[i].parentElement.classList.remove('task-completed');
            document.querySelectorAll('#idCheck')[i].parentElement.classList.add('task-incompleted');
        }        
           
    }     

}


//Esta função permite que quando clicamos no botão o item é excluído
function deletarTexto() {
var fechar = document.getElementsByClassName("fechar");
var i;
for (i = 0; i < fechar.length; i++) {
  fechar[i].onclick = function() {
    if (window.confirm ("Tem certeza que deseja apagar este afazer?") == true) {
    var x = this.parentElement;
    x.style.display = "none";
    }
    
  }
}
}

