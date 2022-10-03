// Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial

const num = prompt("Insira um numero");
let resultado = num * (num - 1);

for(let i = num - 2; i > 0; i--) {
    resultado *= i
}
alert(`O resultado de fatorial é ${resultado}`)