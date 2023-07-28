const generarNumeroAleatorio = () => {                     //creo funcion generar numero 1 y 100
    return Math.floor(Math.random() * 100) + 1;
    };
    const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => { //funcion que verifica el numero
    if (numeroAdivinado === numeroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
    };
    module.exports = {       //exporto esta 2 funciones
    generarNumeroAleatorio,
    verificarAdivinanza
    };
    