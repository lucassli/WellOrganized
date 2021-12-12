let btnAdicionarTarefas = document.querySelector('#btn-adicionar').addEventListener('click', adcTarefas);
let btnArquivarTarefas = document.querySelector('.btn-card-arquivar').addEventListener('click', arqTarefas);
let btnExcluirTarefas = document.querySelector('.btn-card-excluir').addEventListener('click', excTarefas);

function adcTarefas(){
    let tarefas = [
        {}
    ]