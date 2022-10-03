//1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
//mostrar :
//a. A menor altura do grupo;
//b. A maior altura do grupo;

let lista = []
for (let i = 1; i <= 15; i++) {
    lista.push(parseFloat(prompt(`Digite a altura da ${i}º pessoa: `)))
}
let alturaMaxima = 0
let alturaMinima = Number.MAX_VALUE
for (let altura of lista) {
    if (altura > alturaMaxima){
        alturaMaxima = altura;
    }
    if (altura < alturaMinima){
        alturaMinima = altura;
    }
}
alert(`A pessoal com a maior altura é ${alturaMaxima}. A pessoal com a menor altura é ${alturaMinima}.`)


