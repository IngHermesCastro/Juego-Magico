let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemnto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto) { 
        asignarTextoElemnto('p',`Acertaste en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        // el Usuario no Acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemnto('p','El numero secreto Es Menor');
        }
        else {
            asignarTextoElemnto('p','El numero secreto Es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos tdoos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemnto('p','Ya sortearon todos los Números Posibles');
    }else {
        //Si el numero Generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            console.log(listaNumeroSorteados);
            return numeroGenerado;
        } 
    }
    
}

function limpiarCaja() {
    //let valorcaja = document.querySelector('#valorUsuario');
    //valorcaja.value = '';
    document.querySelector('#valorUsuario').value = ''  ;
}
function condicionesIniciales() {
    asignarTextoElemnto('h1','Juego del Numero Secreto!');
    asignarTextoElemnto('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(`Secreto = ${numeroSecreto}`);
}
function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar mendaje de Intervalo de Numeros
    //Generar el Número aleatorio
    //Incializar el Numeros de Intentos.
    condicionesIniciales();
    //Deshabilitar el Boton Nuevo Juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();

