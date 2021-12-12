const containerTarefas = document.getElementById("form-adc-tarefa");
const btnAdcTarefa = document.getElementById("btn-adicionar");
const btnArquivarTarefa = document.querySelector(".btn-card-arquivar")
const btnDeletarTarefa = document.querySelector(".btn-card-excluir")

getTarefas().forEach((tarefa) => {
    const elementoTarefa = criarElementoTarefa(tarefa.id, tarefa.content);
    containerTarefas.insertBefore(elementoTarefa, btnAdcTarefa);
});

btnAdcTarefa.addEventListener("click", () => adcTarefa());

function getTarefas() {
    return JSON.parse(localStorage.getItem("cards-tarefas") || "[]");
}
  
function saveTarefas(tarefas) {
    localStorage.setItem("cards-tarefas", JSON.stringify(tarefas));
}
  
function criarElementoTarefa(id, content) {
    const elemento = document.createElement("textarea");
}

function adcTarefa() {
    const tarefas = getTarefas();
    const tarefaObj = {
      id: Math.floor(Math.random() * 100000),
      content: ""
    }
    const elementoTarefa = criarElementoTarefa(tarefaObj.id, tarefaObj.content);
    containerTarefas.insertBefore(elementoTarefa, btnAdcTarefa);

    tarefas.push(tarefaObj);
    saveTarefas(tarefas);
}

function deletarTarefa(id, elemento){
    const tarefas = getTarefas().filter((tarefa) => tarefa.id != id);

    saveTarefas(tarefas);
    containerTarefas.removeChild(elemento);
}

