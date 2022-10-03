// Faça um programa em JavaScript que leia um vetor com dez números reais, calcule e mostre a quantidade de números negativos e a soma do números positivos desse vetor.

let vetor = []
let negativos = 0
let somaNegativo = 0
let somaPositivo = 0
let soma = 0

for (let i = 1; i <=10; i++) {
    vetor[i] = parseInt(prompt('Digite números reais:'))
}
for (let num of vetor) {
    if (num >= 0) {
        soma ++
        somaPositivo += num 
    } else {
        negativos ++
        somaNegativo += num
    }
}
alert(`Foram encontrados ${negativos} negativos!`)
alert(`A soma dos números positivos é ${somaPositivo}`)