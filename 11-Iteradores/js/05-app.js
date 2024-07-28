// Do While
// Se ejecuta al menos una vez y después verifica la condición

let i = 1;

do {
    if(i % 15 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`);
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    }

    i++;
} while(i < 100);


