const nomeUsuario = prompt("Olá, usuario qual seu nome?")

let raio = Number(prompt(nomeUsuario + " insira o valor do raio: "))
let altura = Number(prompt(nomeUsuario + " insira o valor altura: "))
let volume = 3.14159 * Math.pow(raio, 2) * altura

alert("O volume da lata de oleo é: " + volume)