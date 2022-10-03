//7. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma sequência em
//P.G. contendo 10 valores.

const valorInicial = parseFloat(prompt('Valor A'))
const razao = parseInt(prompt('Razão Q'))
let pg = valorInicial * razao**(10-1)
alert(`Valor da PG: ${pg}`)