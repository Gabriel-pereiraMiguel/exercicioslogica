const prompt = require('prompt-sync')();

var numA = prompt('Digite o numero: ')
var numB = prompt('Digite o segundo numero: ')
var guardaA = numA

numA = numB
numB = guardaA

console.log('O primeiro numero é: ',numA)
console.log('O segundo é : ', numB)