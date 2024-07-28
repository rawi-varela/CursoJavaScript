// While
// Se ejecuta siempre que la condición es verdadera

let i = 1;

while(i < 100) {
    if(i % 15 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    }
    
    i++; // Incremento
}
