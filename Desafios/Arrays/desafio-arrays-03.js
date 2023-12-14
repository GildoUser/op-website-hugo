/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/
let nameArray = ['Silvia', 'Isa', 'Mica', 'Amanda']

function findGuest(names, guest){
  for(let i=0; i < names.length; i++){
    if (guest == names[i]){
      return "O nome está na lista"
    }
    // Desenvolva seu código nessa função
    // Retorne o resultado aqui
  }
  return "O nome não está na lista"
}
const teste = findGuest(nameArray,"Mica")
console.log(teste)
//module.exports = findGuest
