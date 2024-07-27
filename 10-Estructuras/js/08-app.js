// Detener la ejecución de un if con una función

const puntaje = 450;

// if(puntaje > 500) {
//     console.log('Buen puntaje... felicidades');
// } else if(puntaje > 300) {
//     console.log('Excelente esfuerzo')
// }

// El orden es importante ya que se ejecuta (else if) la que se cumpla primero


// Forma REAL de hacerlo
function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Buen puntaje... felicidades 400');
        return;
    }
    
    if(puntaje > 300) {
        console.log('Excelente esfuerzo 300');
        return;
    }
}

revisarPuntaje();

// Se termina el if con el returno, pero esto solo se aplca dentro de una función
// El orden sigue importando 