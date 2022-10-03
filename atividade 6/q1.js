/**
 * Crie um algoritmo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).
 */

 let produtos = {
     nome: [],
     marca: [],
     foto: [],
     preco: [],
     estoque: []
 }
 for(let i = 1; i <= 3; i++){
     produtos.nome = prompt('Digite o nome do produto: ')
     produtos.marca = prompt('Digite a marca do produto: ')
     produtos.foto = prompt('Digite o link da imagem:')
     produtos.preco = parseFloat(prompt('Digite o preço do Produto:'))
     produtos.estoque = parseInt(prompt('Digite a quantidade de produtos que tem no estoque:'))
}
document.write(`
O nome do produto é ${nome}
A marca do produto é ${marca}
A foto do seu produto é ${foto}
O preço do seu produto é ${preco}
Você tem ${estoque} em estoque.`)
