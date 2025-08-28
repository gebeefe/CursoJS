const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('Palmeiras').add('Corinthias')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
console.log(times.has('Flamengo'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes= ['Raquel','Fernando','Rodrigo','Fernando']
const nomesSet = new Set(nomes)
console.log(nomesSet)