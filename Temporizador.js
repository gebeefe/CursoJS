const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel() //comando pra cacnelar uma "tarefa"
    console.log('Cancelando Tarefa')
}, 20000) // tempo para cancelar (20000 milisegundos)

//setImmediate é pra finalizar instantaneo a funcao no momento q for lida
//setInterval e para a funcao ser lancada de tempos em tempos

const regra = new schedule.RecurrenceRule() //comando pra criar regras
regra.dayOfWeek = [new schedule.Range(1, 5)] // limitando os dias q vai poder usar (segunda(1) ate sexta(5))
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})