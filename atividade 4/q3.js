// Faça um algoritmo para adicionar 20 valores em um array e depois imprima-os no HTML. Evite que o array possua valores duplicados.

let numeros = []
for (let i = 1; i <= 20; i++) {
   let num = parseInt(prompt('Digite números inteiros sem repeti-los:'))
   while (numeros.includes(num)) {
    num = parseInt(prompt('Número repetido. Por favor digite outro:'))
   } 
   numeros[i] = num
}
for(let numero of numeros) {
    document.write(`<p>${numero}</p>`)
}