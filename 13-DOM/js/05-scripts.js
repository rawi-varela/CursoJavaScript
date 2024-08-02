// QuerySelectorAll

// Es la misma sintaxis que el querySelector, lo mismo con los selectores específicos

// La diferencia es que si retorna todos los elementos que cumplen la condición del selector

const card = document.querySelectorAll('.card') ;
console.log(card);

// Si no existe, retorna el NodeList vacío
const noExiste = document.querySelectorAll('.noExiste') ;
console.log(noExiste);

