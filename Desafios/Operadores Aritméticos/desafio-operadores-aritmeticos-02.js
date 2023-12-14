/*

02 - Calcular o salário 

Na sapataria do Faraó todas as pessoas da área de vendas recebem um salário fixo acrescido de 4% de comissão sobre as vendas. 

Escreva um algoritmo que receba o salário fixo de vendedores da sapataria do Faraó
e o valor de suas vendas,  calcule e retorne a comissão e seu salário final no formato:

---------------------------------------
"A comissão é: x e o ganho total é: y".
---------------------------------------

*/
const salarioFixo = 1400.00;
const acrescimo = 4;
function totalReceive(salary, sales){
  const valorReal = salary * (1 +(sales/100))
  const  comissao = salary * (sales/100)
  console.log(comissao)
  return `A comissão é: ${comissao.toFixed(2)} e o ganho total é: ${valorReal.toFixed(2)}`
  // Desenvolva seu código nessa função
}
console.log(totalReceive(salarioFixo,acrescimo))
module.exports = totalReceive;
