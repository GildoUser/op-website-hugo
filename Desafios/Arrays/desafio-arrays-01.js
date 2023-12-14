/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/
const numVariable = [3, 1, 8, 34, 13, 2, 5];
function getMaxNumber(numbers) {
  for(let i,z = 0; i < numbers.length; i++){
    if(numbers[i] > numbers[i+1]){
      z = numbers[i]
    }
  }
  // Desenvolva seu código nessa função
  return // Retorne o resultado aqui
}
getMaxNumber(numVariable)

//module.exports = getMaxNumber;
