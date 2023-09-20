const A = 20;
const B = 30;
const C = 40;
const D = 50;

const resultadoAB = (A + B) * C + (A + B) * D;
const resultadoAC = (A + C) * B + (A + C) * D;
const resultadoAD = (A + D) * B + (A + D) * C;
const resultadoBC = (B + C) * A + (B + C) * D;
const resultadoBD = (B + D) * A + (B + D) * C;
const resultadoCD = (C + D) * A + (C + D) * B;

const resultadoMultiplicacaoAB = A * B * C * D;
const resultadoMultiplicacaoAC = A * C * B * D;
const resultadoMultiplicacaoAD = A * D * B * C;
const resultadoMultiplicacaoBC = B * C * A * D;
const resultadoMultiplicacaoBD = B * D * A * C;
const resultadoMultiplicacaoCD = C * D * A * B;

const somaTotal = resultadoAB + resultadoAC + resultadoAD + resultadoBC + resultadoBD + resultadoCD + 
                 resultadoMultiplicacaoAB + resultadoMultiplicacaoAC + resultadoMultiplicacaoAD + 
                 resultadoMultiplicacaoBC + resultadoMultiplicacaoBD + resultadoMultiplicacaoCD;

console.log("Resultado de A + B:", resultadoAB);
console.log("Resultado de A + C:", resultadoAC);
console.log("Resultado de A + D:", resultadoAD);
console.log("Resultado de B + C:", resultadoBC);
console.log("Resultado de B + D:", resultadoBD);
console.log("Resultado de C + D:", resultadoCD);

console.log("Resultado de A * B * C * D:", resultadoMultiplicacaoAB);
console.log("Resultado de A * C * B * D:", resultadoMultiplicacaoAC);
console.log("Resultado de A * D * B * C:", resultadoMultiplicacaoAD);
console.log("Resultado de B * C * A * D:", resultadoMultiplicacaoBC);
console.log("Resultado de B * D * A * C:", resultadoMultiplicacaoBD);
console.log("Resultado de C * D * A * B:", resultadoMultiplicacaoCD);

console.log("\nSoma Total de Todos os Resultados:", somaTotal);
