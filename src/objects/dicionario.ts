// Criar um dicionário de palavras(objeto)

// Objetivo: Criar um objeto onde a chave é a palavra e o valor é a definição dela.
// Função adicionarPalavra(palavra: string, definicao: string)
// Função buscarDefinicao(palavra: string) retorna a definição.

const prompt = require("prompt-sync")()

type Dicionario = {
  palavra: string
  definicao: string
}

const dicionario: Dicionario[] = []

function adicionarPalavra(palavra: string, definicao: string) {
  dicionario.push({ palavra, definicao })
}

function buscarDefinicao(palavra: string) {
  for (const objeto of dicionario) {
    if (objeto.palavra === palavra)
      console.log(`A definição de "${objeto.palavra}" é: ${objeto.definicao}`)
  }
}

const palavra1: string = prompt("Informe a primeira palavra: ")!
const definicao1: string = prompt("Informe a definição da primeira palavra: ")!
adicionarPalavra(palavra1, definicao1)

const palavra2: string = prompt("Informe a segunda palavra: ")!
const definicao2: string = prompt("Informe a definição da segunda palavra: ")!
adicionarPalavra(palavra2, definicao2)

const palavra3: string = prompt("Informe a terceira palavra: ")!
const definicao3: string = prompt("Informe a definição da terceira palavra: ")!
adicionarPalavra(palavra3, definicao3)

buscarDefinicao(palavra2)
