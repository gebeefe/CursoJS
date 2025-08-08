const fs = require('fs')
const produto = {
    nome: 'Celular',
    preco: 1234.00,
    desconto: 0.15
}

// fs.writeFile para criaçao de arquivo
//__dirname é o diretorio atual q voce esta utilizando
fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})
