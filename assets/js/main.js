function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    iniciaCalculadora(){
      this.cliqueBotoes()
      this.pressionaBackSpace()
      this.pressEnter(this.display)
    },

    cliqueBotoes(){
      document.addEventListener('click', e => {
        let element = e.target

        if(element.classList.contains('btn-num')){
          this.btnParaDisplay(element.innerText)
        }

        if(element.classList.contains('btn-del')){
          this.clearOneNumber(this.display)
        }

        if(element.classList.contains('btn-eq')){
          this.doCalculation(this.display)
        }

        if(element.classList.contains('btn-clear')){
          this.clearDisplay(this.display)
        }
      })
    },

    pressEnter(element){
      element.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.doCalculation(element);
        }
      });
    },

    doCalculation(element){
      let calculationValue = element.value 

      try{
        calculationValue = eval(calculationValue)

        if(!calculationValue){
          alert('Conta inválida')
          this.clearDisplay(element)
          return
        }

        element.value = calculationValue
      }catch(e){
        alert('Conta inválida')
        this.clearDisplay(element)
      }
    },

    clearOneNumber(element){
      element.value = element.value.slice(0, -1)
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay(element){
      element.value = ''
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay(this.display);
        }
      });
    }
  }
}


/*function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },


    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();*/

const calculadora = criaCalculadora()
calculadora.iniciaCalculadora()