// const getMaxNumber = require('./desafio-arrays-01');
// const getMinNumber = require('./desafio-arrays-02');
// const findGuest = require('./desafio-arrays-03');
// const dataType = require('./desafio-arrays-04');
// const findOldestSon = require('./desafio-arrays-05');

// module.exports = {
//   getMaxNumber,
//   getMinNumber,
//   findGuest,
//   dataType,
//   findOldestSon,
// };
const numVariable = [3, 1, 8, 34, 13, 2, 5];
function getMaxNumber(numbers) {
  for(let i,z = 0; i < numbers.length; i++){
    if(numbers[i] > numbers[i+1]){
      z = numbers[i]
    }
    console.log(numbers[i])
    console.log(z)
  }
  // Desenvolva seu código nessa função
  return "oi"// Retorne o resultado aqui
}
getMaxNumber(numVariable)