/*Desafio 2
1. Crie uma variável que recebe um número;
2. Converta este número para string em uma nova variável;
3. Esta variável de conversão deve estar tipada por inferência;
4. Imprima este número em uma string maior, utilizando o recurso de
template strings ou concatenação;*/

let number:number = 50
let stringfy = String(number)

console.log(`Isso é um número: ${number} e isso é uma string ${stringfy}, se não acreita em mim, então olhe isso: ${typeof(number)} | ${typeof(stringfy)}`)