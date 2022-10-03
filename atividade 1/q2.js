const nomeUsuario = prompt("Olá, usuario qual seu nome?")
let lado = Number(prompt("olá " + nomeUsuario + " Insira o valor de um lado do quadrado"))
let Área = Math.pow(lado, 2)
let Perímetro = lado * 4
alert("Área do quadrado: " + Área)
alert("Perimetro do quadrado: " + Perímetro)