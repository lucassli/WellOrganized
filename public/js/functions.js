function adicionar(){
  
    var tabela = document.getElementById('tabela');
    var tp = document.getElementById("pedido");
    tp = tp.options[tp.selectedIndex].textContent;
    var qtd = document.getElementById("qtd").value;
    
    var ped_id = document.body.querySelectorAll(".rowtabela").length;
    
    var novo_item = '<div class="rowtabela" id="'+ped_id+'">'
    +'<div class="item">'+qtd+'</div>'
    +'<div class="item">'+tp+'</div>'
    +'<div class="botao">'
    +'<button onclick="remover(this)">X</button>'
    +'</div></div>';
    
    tabela.innerHTML += novo_item;
    
 }
 
 function remover(e){
    e.parentNode.parentNode.outerHTML = '';
 }