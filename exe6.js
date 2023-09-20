const prompt = require('prompt-sync')();

let velocidade = prompt('Digite a velocidade do veiculo em KM/H: ')
let convert = velocidade / 3.6 
let distancia = 435;

let tempo = distancia/velocidade

console.log('A velocidade em KM convertida em metros é:',convert)
console.log('O tempo que vai demorar na velocidade atual é:',tempo)