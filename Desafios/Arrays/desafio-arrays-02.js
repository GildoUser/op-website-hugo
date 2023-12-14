/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/
let arrays = [-8, 12, 13, 84, -100, 45, 38]
function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  let min = numbers[0]
  for(let i = numbers.length; i > 0; i--){
    if(min > numbers[i] && min != numbers[i]){
      min = numbers[i]
    }
  }
  console.log(min)
  return // Retorne o resultado aqui
}
getMinNumber(arrays)
//module.exports = getMinNumber;
