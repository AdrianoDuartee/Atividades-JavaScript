//5. Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.

const lados = []
for(let i = 0; i < 3 ; i++ ){
   lados [i] = parseFloat(prompt('Valor lado'))
}
const comparador = lados[0];
let contadorIgualdade = 0
for (const i of lados) {
   if(comparador == i){
       contadorIgualdade++
   }
}
switch(contadorIgualdade){
   case 2:
       alert('Triangulo Isósceles')
       break;
   case 3:
       alert('Triangulo Equilátero')
       break;
   default:
       alert('Escaleno')
       break;
}