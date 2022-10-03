// 1) faça um programa em pascal que leia um vetor de seis elementos numéricos inteiros, calcule e mostre:
// a) A quantidade de números pares
// b) Quais os números pares
// c) A quantidade de números ímpares
// d) Quais os números ímpares

for (let i = 1; i <=6; i++) {
    const n = parseInt(prompt('Digite um valor:'))
    num.push(n)
}
const pares = []
const impares = []
for (let numeros of num) {
    if (numeros % 2 == 0){
        pares.push(numeros)
    } else {
        impares.push(numeros)
    }
}
alert(`Valores pares: ${pares.join(', ')}`)
alert(`Valores impares: ${impares.join(', ')}`)