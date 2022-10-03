const nomeUsuario = prompt("Olá, usuario qual seu nome?")
let base = Number(prompt("Olá, " + nomeUsuario + " Insira o valor da base do retângulo"))
let altura = Number(prompt("Olá, " + nomeUsuario + " Insira o valor da altura do retângulo"))
let Área = base * altura
let Perímetro = 2 * (base + altura)
alert("Valor da área do retângulo: " + Área)
alert("Valor do perimetro do retângulo: " + Perímetro)