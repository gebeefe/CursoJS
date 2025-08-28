let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana','Carlos','Beatriz'])
})
p.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula))

let x = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Junior','João','Bea'])
})

const primeiraLetra = string => string[0]
const primeiroElemento = array => array[0]
const letraMinuscula2 = letra => letra.toLowerCase()

x.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula2)
.then(letraMinuscula2 => console.log(letraMinuscula2))
.then(console.log)