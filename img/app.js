let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemnto, texto){

    let elemntoHTML = document.querySelector(elemnto);
    elemntoHTML.innerHTML = texto;
    return; 

}


function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p', 'Número secreto es menor');
            }else{
                asignarTextoElemento('p', 'Número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    return;
    
}

function limpiarCaja(){

    document.querySelector('#valorUsuario').value = ' ';
    
}


function generarNumeroSecreto() {
    
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya se sortearon todos los números

    if (listaNumerosSorteados.length == numeroMaximo) {
        
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    
    } else {

        //Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();

        } else {

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento(`P','Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

//Función para reiniciar el juego

function reiniciarJuego(){

    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();