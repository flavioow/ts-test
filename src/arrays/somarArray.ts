// Somar todos os valores de um array
// Objetivo: Criar uma função que receba um array de números e retorne a soma de todos.

const numeros: number[] = [1, 3, 9, 2, 4, 1, 3, 3, 8]

function somarValores(numeros: number[]): number {
  return numeros.reduce((acumulador, elemento) => acumulador + elemento)
}

console.log(`A soma dos valores é: ${somarValores(numeros)}`)
