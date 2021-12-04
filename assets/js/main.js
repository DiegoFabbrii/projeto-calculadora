class Calculator {
    constructor() {
        this.display = document.querySelector('.input-display');
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