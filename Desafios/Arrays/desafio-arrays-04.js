/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/
const arrya = ["Daniel", "John", "jamelão"]
function dataType(types){
  let z = types[0]
  // Desenvolva seu código aqui.
  for (let i = 0; i < types.length; i++){
    if(typeof z != typeof types[i]){
      return false
    }
  }
  return true// Retorne o resultado aqui
}
console.log(dataType(arrya))
module.exports = dataType;
