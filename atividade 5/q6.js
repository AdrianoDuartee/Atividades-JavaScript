//6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em
//P.A. contendo 10 valores.

const valorInicial = parseFloat(prompt('Valor A'))
const razao = parseInt(prompt('Razão'))
let pa = valorInicial + (10 - 1) * razao
alert(`Valor da progressão aritimetica: ${pa}`)
