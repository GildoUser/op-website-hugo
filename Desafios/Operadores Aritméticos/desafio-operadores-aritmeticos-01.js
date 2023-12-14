/*

01 - Calcular a média

Escreva um algoritmo que recebe 3 valores, calcule e retorne o valor da média no formato abaixo:

---------------------
"O Valor médio é: x."
---------------------

*/

function average(number1, number2, number3){
  const result = (number1 + number2 + number3)/3
  return `O Valor médio é: ${result}.`
}
console.log(average(3,4,3))
module.exports = average;
