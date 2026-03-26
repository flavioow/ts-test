const args = process.argv.slice(2)
const file = args[0]

if (!file) {
  console.error("Nenhum arquivo especificado!")
  process.exit(1)
}

try {
  require(`./src/${file}.ts`)
} catch (err: unknown) {
  const message = err instanceof Error ? err.message : String(err)
  console.error("Erro ao executar:", message)
}
