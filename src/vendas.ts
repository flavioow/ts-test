// Desafio: Agrupar vendas por vendedor

// Cenário: Você recebeu uma lista com registros de vendas, cada item tem { vendedor, valor }.
// Seu trabalho é gerar um relatório consolidado mostrando o total vendido por cada vendedor.

// Exemplo de entrada
// [
//     { vendedor: "Ana", valor: 100 },
//     { vendedor: "Pedro", valor: 200 },
//     { vendedor: "Ana", valor: 50 },
//     { vendedor: "João", valor: 300 }
// ]

// Saída esperada
// Ana: R$ 150.00
// Pedro: R$ 200.00
// João: R$ 300.00

type Vendas = {
  vendedor: string
  valor: number
}

const vendas: Vendas[] = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "Pedro", valor: 200 },
  { vendedor: "Ana", valor: 50 },
  { vendedor: "João", valor: 300 },
]

function gerarRelatorio(): Vendas[] {
  const grupo = Object.values(
    vendas.reduce(
      (acumulador, item) => {
        const chave = item.vendedor
        const existente = acumulador[chave]

        if (existente) existente.valor += item.valor
        else acumulador[chave] = { ...item }

        return acumulador
      },
      {} as Record<string, Vendas>,
    ),
  )

  return grupo
}

console.log(gerarRelatorio())
