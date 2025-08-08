/*
this fora de funcao aponta para exports/module.exports
dentro de funcao aponta para global
dentro de arrow function aponta para exports
*/
console.log(this === global)
console.log(this === module.exports)
console.log(this === exports)
console.log(this === module)

function logThis() {
    console.log('Dentro de uma funcção: ')
    console.log(this === global)
    console.log(this === module.exports)
    console.log(this === exports)
}

logThis()