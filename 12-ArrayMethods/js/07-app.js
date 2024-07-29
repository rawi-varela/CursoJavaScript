// .cocnat
// Unir dos arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


// .concat
const resulado = meses.concat(meses2, meses3, 'Otro mes');
console.log(resulado);

// Con Spread Operator / Rest Operator
const resultado2 = [ ...meses, ...meses2, ...meses3, 'Otro mes' ]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
// Porque si no va a crear un elemento por cada letra del string
console.log(resultado2)

// El orden importa mucho
