// Filtrar nomes com mais de X letras
// Objetivo: Criar uma função que receba uma lista de nomes e um número, e retorne os nomes maiores que esse número de letras.

const nomes: string[] = [
  "Lu",
  "Clodoaldo",
  "Flávio",
  "Mari",
  "Ana",
  "Natan",
  "Tais",
  "Igor",
  "Lucas",
  "Kevin",
  "Mateus",
  "Cauã",
  "Pedro",
  "Bortoleto",
  "Câmara",
]

function filtrarNomes(nomes: string[], valor: number): string[] {
  const nomesFiltrados: string[] = []

  for (const nome of nomes) {
    const letras: number = nome.length

    if (letras > valor) nomesFiltrados.push(nome)
  }

  return nomesFiltrados
}

console.log(`Os nomes filtrados são: ${filtrarNomes(nomes, 5)}.`)
