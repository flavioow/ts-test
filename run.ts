const fs = require("fs")
const path = require("path")

const args = process.argv.slice(2)
const input = args[0]

if (!input) {
  console.error("Nenhum arquivo especificado!")
  process.exit(1)
}

try {
  const srcRoot = path.resolve(__dirname, "src")
  const target = input.endsWith(".ts") ? input : `${input}.ts`
  const resolved = path.resolve(srcRoot, target)

  if (!resolved.startsWith(srcRoot + path.sep) && resolved !== srcRoot) {
    console.error("Caminho inválido!")
    process.exit(1)
  }

  if (!fs.existsSync(resolved)) {
    console.error("Arquivo não encontrado:", target)
    process.exit(1)
  }

  require(resolved)
} catch (err: unknown) {
  const message = err instanceof Error ? err.message : String(err)
  console.error("Erro ao executar:", message)
}
