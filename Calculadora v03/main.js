let display = document.getElementById('display');

let memoria = document.getElementById('memoria');

let operador = document.getElementById('operador');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            
            case 'C':
                memoria.innerText = '';
                operador.innerText = '';
                display.innerText = '';
                break;

            case '⬅': 
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            
            case '+':
                if(display.innerText){
                    if(operador.innerText && memoria.innerText && display.innerText){
                        if (operador.innerText == '-') {
                            memoria.innerText = parseFloat(memoria.innerText) - parseFloat(display.innerText);
                            operador.innerText = '+';
                            display.innerText = '';
                        } else if (operador.innerText == '/') {
                            memoria.innerText = parseFloat(memoria.innerText) / parseFloat(display.innerText);
                            operador.innerText = '+';
                            display.innerText = '';
                        } else if (operador.innerText == '*') {
                            memoria.innerText = parseInt(memoria.innerText) * parseInt(display.innerText);
                            operador.innerText = '+';
                            display.innerText = '';
                        } else {
                            memoria.innerText = parseInt(memoria.innerText) + parseInt(display.innerText);
                            operador.innerText = '+';
                            display.innerText = '';
                        }                                           
                    } else {
                        memoria.innerText = display.innerText;
                        operador.innerText = '+';
                        display.innerText = '';
                        console.log("display não nulo")
                    }
                } else if (memoria.innerText){
                    memoria.innerText = parseFloat(memoria.innerText) + parseFloat(display.innerText);
                    operador.innerText = '+';
                    display.innerText = '';
                    console.log("operação realizada")
                } else {
                    operador.innerText = '+';
                    console.log("display nulo")
                }
                break;

            case '-':
                if(display.innerText){
                    if(operador.innerText && memoria.innerText && display.innerText){
                        if (operador.innerText == '+') {
                            memoria.innerText = parseFloat(memoria.innerText) + parseFloat(display.innerText);
                            operador.innerText = '-';
                            display.innerText = '';
                        } else if (operador.innerText == '/') {
                            memoria.innerText = parseFloat(memoria.innerText) / parseFloat(display.innerText);
                            operador.innerText = '-';
                            display.innerText = '';
                        } else if (operador.innerText == '*') {
                            memoria.innerText = parseInt(memoria.innerText) * parseInt(display.innerText);
                            operador.innerText = '-';
                            display.innerText = '';
                        }                        
                    } else {
                        memoria.innerText = display.innerText;
                        operador.innerText = '-';
                        display.innerText = '';
                        console.log("display não nulo")
                    }
                } else if (memoria.innerText){
                    memoria.innerText = parseFloat(memoria.innerText) - parseFloat(display.innerText);
                    operador.innerText = '-';
                    display.innerText = '';
                    console.log("operação realizada")
                } else {
                    operador.innerText = '-';
                    console.log("display nulo")
                }
                break;

            case '/':
                if(display.innerText){
                    if(operador.innerText && memoria.innerText && display.innerText){
                        if (operador.innerText == '+') {
                            memoria.innerText = parseFloat(memoria.innerText) + parseFloat(display.innerText);
                            operador.innerText = '/';
                            display.innerText = '';
                        } else if (operador.innerText == '-') {
                            memoria.innerText = parseFloat(memoria.innerText) - parseFloat(display.innerText);
                            operador.innerText = '/';
                            display.innerText = '';
                        } else if (operador.innerText == '*') {
                            memoria.innerText = parseInt(memoria.innerText) * parseInt(display.innerText);
                            operador.innerText = '/';
                            display.innerText = '';
                        }                    
                    } else {
                        memoria.innerText = display.innerText;
                        operador.innerText = '/';
                        display.innerText = '';
                        console.log("display não nulo")
                    }
                } else if (memoria.innerText){
                    memoria.innerText = parseFloat(memoria.innerText) / parseFloat(display.innerText);
                    operador.innerText = '/';
                    display.innerText = '';
                    console.log("operação realizada")
                } else {
                    operador.innerText = '/';
                    console.log("display nulo")
                }
                break;    

            case '*':
                if(display.innerText){
                    if(operador.innerText && memoria.innerText && display.innerText){
                        if (operador.innerText == '+') {
                            memoria.innerText = parseFloat(memoria.innerText) + parseFloat(display.innerText);
                            operador.innerText = '*';
                            display.innerText = '';
                        } else if (operador.innerText == '-') {
                            memoria.innerText = parseFloat(memoria.innerText) - parseFloat(display.innerText);
                            operador.innerText = '*';
                            display.innerText = '';
                        } else if (operador.innerText == '/') {
                            memoria.innerText = parseInt(memoria.innerText) / parseInt(display.innerText);
                            operador.innerText = '*';
                            display.innerText = '';
                        }                        
                    } else {
                        memoria.innerText = display.innerText;
                        operador.innerText = '*';
                        display.innerText = '';
                        console.log("display não nulo")
                    }
                } else if (memoria.innerText){
                    memoria.innerText = parseFloat(memoria.innerText) * parseFloat(display.innerText);
                    operador.innerText = '*';
                    display.innerText = '';
                    console.log("operação realizada")
                } else {
                    operador.innerText = '*';
                    console.log("display nulo")
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
                if(operador.innerText && memoria.innerText && display.innerText) {
                    if(operador.innerText == '+') {
                        memoria.innerText = parseFloat(memoria.innerText) + parseFloat(display.innerText);
                        operador.innerText = '';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else if (operador.innerText == '-') {
                        memoria.innerText = parseFloat(memoria.innerText) - parseFloat(display.innerText);
                        operador.innerText = '';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else if (operador.innerText == '/') {
                        memoria.innerText = parseFloat(memoria.innerText) / parseFloat(display.innerText);
                        operador.innerText = '';
                        display.innerText = '';
                        console.log("operação realizada")
                    } else {
                        memoria.innerText = parseInt(memoria.innerText) * parseInt(display.innerText);
                        operador.innerText = '';
                        display.innerText = '';
                        console.log("operação realizada")
                    }
                }

            break;
                
            default:
                display.innerText += e.target.innerText;
        }
    })
})