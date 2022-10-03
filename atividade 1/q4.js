const nomeUsuario = prompt("Olá, usuario qual seu nome?")
let LadoA = Number(prompt(nomeUsuario + ", insira o valor do lado A"))
let LadoB = Number(prompt(nomeUsuario + ", insira o valor do lado B"))
let LadoC = Number(prompt(nomeUsuario + ", insirar o valor do lado C"))

let Perimetro = LadoA + LadoB + LadoC
alert("Perimetro do triangulo: " + Perimetro)