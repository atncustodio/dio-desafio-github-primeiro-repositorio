var divTarefas = document.getElementById('tarefas');
var counter = 0;
var buttonAdicionar = document.getElementById('adicionar');

buttonAdicionar.addEventListener('click', function(event) {
    var input = document.getElementById('inputTarefa').value;
    if(input !== '') {
        counter += 1;
        divTarefas.innerHTML += '<br><input type="checkbox" id="tarefa'+counter+'"></input><label for="tarefa'+counter+'">'+input+'</label>';
        document.getElementById('inputTarefa').value = "";
    }
});