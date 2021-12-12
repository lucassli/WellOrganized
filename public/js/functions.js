function adicionar(){
  
    var card = document.getElementById('card');
    var cardTexto = document.getElementById("card-text");
    cardTexto = cardTexto.options[cardTexto.selectedIndex].textContent;
    var cardStatus = document.getElementById("card-status").value;
    
    var novo_card = '<div class="card-area">'
    +'<div class="item">'+qtd+'</div>'
    +'<div class="item">'+tp+'</div>'
    +'<div class="botao">'
    +'<button onclick="remover(this)">X</button>'
    +'</div></div>';

    +'<div class="card">'
    +'<div class="card-status">'
    +'<div class="btn-status-card">'
    +'<img src="./public/assets/checked.png"/>'
    +'</div>'
    +'<div class="txt-card-status">'+cardStatus+'</div>'
    +'</div>'
    +'<div class="txt-card-concluido">'+cardTexto+'</div>'
    +'<div class="card-rodape">'
    +'<div class="btn-card-arquivar">'
    +'<img src="./public/assets/archive-color.png"/>'
    +'</div>'
    +'<div class="btn-card-excluir">'
    +'<img src="./public/assets/trash-gray-scale.png"/>'
    +'</div>'
    +'</div>'
    +'</div>'
    
    card.innerHTML += novo_card;
    
 }
 
 function remover(e){
    e.parentNode.parentNode.outerHTML = '';
 }