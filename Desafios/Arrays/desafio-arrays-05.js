/*

05 - Encontre o filho mais velho

Dada a idade de Pedro e um array com as idades de três de seus filhos, escreva um algoritmo
que irá receber esses dados para computar e retornar a idade do filho mais velho de Pedro.

Considere as premissas abaixo:
* Pedro é pai de 4 filhos que têm idades diferentes;
* Esse ano ele notou que a soma da idade de seus filhos é igual à idade dele.

A saída deve ter o seguinte formato:
--------------------------------
"O filho mais velho tem x anos."
--------------------------------

*/
const arrays = {
  pedroAge: 40,
  kidsAge: [11, 8, 9]
}
function findOldestSon(pedroAge, kidsAge){
  let childAge = 0;
  for(let i = 0; i < kidsAge.length; i++){
    childAge += kidsAge[i]
  }
  
  let arr = pedroAge - childAge// Retorne o resultado aqui
  // Desenvolva seu código aqui.
  return `O filho mais velho tem ${arr} anos.`
}
console.log(findOldestSon(arrays.pedroAge,arrays.kidsAge))
module.exports = findOldestSon;
