const nomeUsuario = prompt("Olá, usuario qual seu nome?")

let numero1 = Number(prompt(nomeUsuario + " Insira o valor 1"))
let numero2 = Number(prompt(nomeUsuario + " Insira o valor 2"))

let Quociente = numero1 / numero2
let Resto = numero1 % numero2

alert("Quociente da divisão: " + Quociente)
alert("Resto da Divisão: " + Resto)