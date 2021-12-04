/*
function Calculadora() {
    this.display = document.querySelector('.display');

    this.comeca = () => {
        this.clicaBotao();
        this.apertaEnter();
    };

    this.apertaEnter = () => {
        this.display.addEventListener('keyup', e => {

            if(e.keyCode === 13) {
                this.realizarConta();
            }
        })
    };

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    

    this.apagarTudo = () => this.display.value = '';
    

    this.realizarConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta) {
                alert('Conta Inválida!');
            }
            this.display.value = conta;

        } catch (e) {
            alert('Conta Inválida!');
        }
    };

    this.clicaBotao = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;

            if(elemento.classList.contains('btn')) {
                this.adicionaBtn(elemento.innerText);
            }

            if(elemento.classList.contains('apaga')) {
                this.apagaUm();
            }

            if(elemento.classList.contains('apagar-tudo')) {
                this.apagarTudo();
            }

            if(elemento.classList.contains('igual')) {
                this.realizarConta();
            }
        })

    };

    this.adicionaBtn = valor => {
        this.display.value += valor;
        this.display.focus();
    };
    
}

const calculadoraConstrutora = new Calculadora();
calculadoraConstrutora.comeca();
*/

class Calculator {
    constructor() {
        this.display = document.querySelector('.input-display');
        this.display.value = '';
        this.buttonClick();
    }

    startEquation = value => this.display.value += value;


    buttonClick() {
        document.addEventListener('click', e => {
            const element = e.target;

            if(element.classList.contains('input-button')) this.startEquation(element.value);
            if(element.classList.contains('clear')) this.display.value = '';
            if(element.classList.contains('delete')) this.display.value = this.display.value.slice(0, -1);
            if(element.classList.contains('equal')) this.makeEquation();
        });
    }

    makeEquation() {
        let equation = this.display.value;

        try {
            equation = eval(equation);
            this.display.value = equation;

        } catch (error) {
            alert('Conta Inválida!!!');
        }
    }
}

const calculator = new Calculator();