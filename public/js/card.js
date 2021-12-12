export default class Card {

    constructor({status, body}, cardManager) {
      this.el = null;
      this.status = status;
      this.body = body;
      this.cardManager = cardManager;
    }
  
    static getCard() {
      return `
      <div class="card-area">
      <div class="card">
          <div class="card-cabecalho">
              <div class="btn-status-card">
                  <img src="./public/assets/unchecked.png"/>
              </div>
              <div class="txt-card-cabecalho">
                  {{status}}
              </div>
          </div>
          <div class="txt-card">
          {{body}}
          </div>
          <div class="card-rodape">
              <div class="btn-card-arquivar">
                  <img src="./public/assets/archive-color.png"/>
              </div>
              <div class="btn-card-excluir">
                  <img src="./public/assets/trash-gray-scale.png"/>
              </div>
        </div>
        </div>`;
    }
  
    createCardEl() {
      let cardTxt = Card.getCardText();
      cardTxt = cardTxt
        .replace('{{status}}', this.title)
        .replace('{{body}}', this.body)
      ;
      const div = document.createElement('div');
      div.innerHTML = cardTxt;
      this.el = div.children[0];
      this.attachEventListeners();
      return this.el;
    }
  
    attachEventListeners(){
      const btnExcluir = this.el.querySelector('.btn-card-excluir');
      btnExcluir.onclick = () => {
        this.cardManager.excluirCard(this);
      };
      const title = this.el.querySelector('.tc-note-title');
      title.oninput = (ev) => {
        this.title = ev.target.innerText;
        this.noteManager.onNoteChange(this);
      };
      // parei aqui
        //const body = this.el.querySelector('.tc-note-body');
      //body.oninput = (ev) => {
        //this.body = ev.target.innerText;
       // this.CardManager.onCardChange(this);
      //}
    }
  }