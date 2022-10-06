let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

function checarUltimoDigito(ultimoDigito){
    if((ultimoDigito == '-') || (ultimoDigito == '+') || (ultimoDigito == '/') || (ultimoDigito == '*') || (ultimoDigito == ',')){
        return true;
    }
    return false;
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

             case '=':
                try{
                display.innerText = eval(display.innerText); // usar com cuidado pois é uma abertura para ações maliciosas
                break;
            } catch { 
                display.innerText = 'Error!';
            }
                break;
                
            default:
                display.innerText += e.target.innerText;
        }
    })
})