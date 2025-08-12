//Tagged Templates
/*

a funcao tag com esses 2 parametros servem para dividir de forma organizada ,
o primeiro parametro pega todas as partes fixas dentro de `` como está ou .
o segundo parametro serve para pegar todas as variaveis como aluno e situacao 
se tivesse mais de um "valores" iria dividir as variaveis pela quantidade de ...valores

*/
function tag(partes , ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'gui'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao}.`)