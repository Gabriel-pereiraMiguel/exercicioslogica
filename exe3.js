const prompt = require('prompt-sync')();

let av1 = prompt('Digite a nota do AV1: ')

let av2 = prompt('Digite a nota do AV2: ')

let av3 = prompt('Digite a nota do AV3: ')

let media1 = av1*2
let media2 = av2*3
let media3 = av3*5
let media = (media1 + media2 + media3) / 10 

console.log(media)