let display = document.getElementById('display');

let memoria = document.getElementById('memoria');

let operador = document.getElementById('operador');

let buttons = Array.from(document.getElementsByClassName('button'));

const clearAll = () => {
    memoria.innerText = '';
    operador.innerText = '';
    display.innerText = '';
}

const clearDisplay = () => display.innerText = '';

const realizarOperacao = () => eval(memoria.innerText + operador.innerText + display.innerText);

const verificarEAdicionarOperador = (operadorAtual) => {
    if(display.innerText){
        if(operador.innerText && memoria.innerText && display.innerText){
            memoria.innerText = realizarOperacao();
            clearDisplay();
            operador.innerText = operadorAtual;
        } else {
            memoria.innerText = display.innerText;
            clearDisplay();
            operador.innerText = operadorAtual;
        }
    } else if (memoria.innerText){
        clearDisplay();
        operador.innerText = operadorAtual;
    } else {
        operador.innerText = operadorAtual;
    }
}

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            
            case 'C':
                clearAll();
                break;

            case '⬅': 
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            
            case '.':
                if (display.innerText.indexOf(".") !== -1) {
                    console.log("Há virgula");
                } else if (display.innerText == '') {
                    display.innerText = '0.';
                    console.log('Não há virgula ou número');
                } else {
                    display.innerText += e.target.innerText;
                    console.log('Não há virgula');
                }
                break;

            case '=':
                verificarEAdicionarOperador("");
                break;
            
            case "+":
            case "-":
            case "/":
            case "*":
                verificarEAdicionarOperador(e.target.innerText);
                break;

            default:
                display.innerText += e.target.innerText;
        }
    })
})