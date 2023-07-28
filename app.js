const readlineSync = require('readline-sync');  //importo la libreria para que el usuario ingrese dato 
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza'); //importo las funciones de adivinanza.js
const obtenerNumeroUsuario = () => {                 //creo funcion que ingresa numero
return readlineSync.question('Ingresa un número: ');
};
const juegoAdivinanza = () => {  //creo funcion juegoadivinanza
const numeroSecreto = generarNumeroAleatorio();  //uso la funcion genero numero y la guardo en Numerosecreto
let numeroAdivinado = 0; //en principio el numero adivinado es 0           
console.log('¡Bienvenido a Adivina el número secreto!');
console.log('Intenta adivinar el número del 1 al 100.\n');
while (numeroAdivinado !== numeroSecreto) {   //si el numero adivinado es distinto del numero secreto (que en principio vale 0)
numeroAdivinado = obtenerNumeroUsuario();      //llamo funcion para preguntar de nuevo el numero
verificarAdivinanza(numeroSecreto, numeroAdivinado); //llamo funcion verificar adivinanza
}
};
juegoAdivinanza();