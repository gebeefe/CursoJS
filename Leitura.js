const fs = require('fs')

const caminho = __dirname + '/Arquivo.json' //
const conteudo = fs.readFileSync(caminho, 'utf-8') //ler um arquivo sincrono ( vai ler ele todo e vai ficar travado em quanto isso)
console.log(conteudo)
console.log(caminho)

//assincrono
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//usando json
const config = require('./Arquivo.json')
console.log(config.db.host, config.db.port)

//pra ler um diretorio
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteudo da pasta: ')
    console.log(arquivos)
})