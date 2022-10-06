let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

function checarUltimoDigito(ultimoDigito){
    if((ultimoDigito == '-') || (ultimoDigito == '+') || (ultimoDigito == '/') || (ultimoDigito == '*') || (ultimoDigito == ',')){
        return true;
    }
    return false;
}

function numeroSemVirgula(innerText){
    var ultimoNumero = getUltimoNumero(innerText);
    if(ultimoNumero.includes(',')){
        return false;
    }
    return true;
}

function getUltimoNumero(innerText){
    var inicioDoUltimoNumero = innerText.indexOf('+');
    var ultimoNumero = innerText.slice(inicioDoUltimoNumero, innerText.lenght);
    return ultimoNumero;
}



buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            
            case 'C':
                display.innerText = '';
                break;

            case '←': 
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;

            case '+':
                var ultimoDigito=display.innerText.slice(display.innerText.length - 1 , display.innerText.length)
                if(checarUltimoDigito(ultimoDigito)){
                    break;
                }

                display.innerText += e.target.innerText;
                break;

            case '-':
                var ultimoDigito=display.innerText.slice(display.innerText.length - 1 , display.innerText.length)
                if(checarUltimoDigito(ultimoDigito)){
                    break;
                }
                
                display.innerText += e.target.innerText;
                break; 

            case '*':
                var ultimoDigito=display.innerText.slice(display.innerText.length - 1 , display.innerText.length)
                if(checarUltimoDigito(ultimoDigito)){
                    break;
                }
                
                display.innerText += e.target.innerText;
                break; 

            case '/':
                var ultimoDigito=display.innerText.slice(display.innerText.length - 1 , display.innerText.length)
                if(checarUltimoDigito(ultimoDigito)){
                    break;
                }
                
                display.innerText += e.target.innerText;
                break; 
            
            case ',':
                var ultimoDigito=display.innerText.slice(display.innerText.length - 1 , display.innerText.length)
                if(checarUltimoDigito(ultimoDigito)){
                    break;
                }
            
                if(numeroSemVirgula(display.innerText)){
                    display.innerText += e.target.innerText;
                }
                break;
            // verificar se:
            // existe um número

            default:
                display.innerText += e.target.innerText;
        }
    })
})