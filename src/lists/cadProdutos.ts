// Objetivo: Criar e exibir uma lista de produtos com nome e preço.

// Crie um array de objetos com nome e preço.
// Função adicionarProduto(nome: string, preco: number) para adicionar ao array.
// Função listarProdutos() que mostra os produtos com índice, nome e preço formatado(R$ XX, XX).

const prompt = require("prompt-sync")()

type Produto = {
  nome: string
  preco: number
}

const produtos: Produto[] = []

function adicionarProduto(nome: string, preco: number) {
  produtos.push({ nome, preco })
  produtos.sort()
}

function listarProdutos() {
  for (let i = 0; i < tamanho; i++) {
    console.log(
      `Produto n.${i + 1} "${produtos[i]!.nome}" custa R$ ${produtos[i]!.preco.toFixed(2)}.`,
    )
  }
}

const nome1: string = prompt(
  "Informe o nome do primeiro produto: ",
  "Produto 1",
)!
const preco1: string = prompt("Informe o preço do primeiro produto: ", "5.50")!
adicionarProduto(nome1, Number(preco1))

const nome2: string = prompt(
  "Informe o nome do segundo produto: ",
  "Produto 2",
)!
const preco2: string = prompt("Informe o preço do segundo produto: ", "20.00")!
adicionarProduto(nome2, Number(preco2))

const nome3: string = prompt(
  "Informe o nome do terceiro produto: ",
  "Produto 3",
)!
const preco3: string = prompt("Informe o preço do terceiro produto: ", "14.99")!
adicionarProduto(nome3, Number(preco3))

const tamanho = produtos.length

listarProdutos()
