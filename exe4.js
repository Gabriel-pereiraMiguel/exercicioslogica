const prompt = require('prompt-sync')();

let altura = prompt('Digite Altura em: ')
let largura = prompt('Digite Largura em: ')
let profundidade = prompt('Digite Profundidade em: ')

let volume = altura*largura*profundidade

console.log('O volume da caixa de água é: ', volume)