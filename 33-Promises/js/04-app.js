// De Callback Hell a Promises (el 02)

paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 2000);
});

nuevoPais('Alemania')
    .then( resultado => { // resultado es lo que se pone en resolve
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
    });

