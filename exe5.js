const prompt = require('prompt-sync')();

let base = prompt('Digite a base: ')
let altura = prompt('Digite a altura: ')

let area = (base*altura)/2

console.log('A Area do triagulo é: ',area)
