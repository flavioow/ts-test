// Gerar e exibir uma lista de tarefas
// Objetivo: Criar um sistema simples de tarefas.

// Array de objetos com { titulo: string, concluida: boolean }
// Função adicionarTarefa(titulo)
// Função concluirTarefa(indice)
// Função listarTarefas() que mostra as tarefas com status ✔️ ou ❌

const prompt = require("prompt-sync")()

type Todos = {
  title: string
  isDone: boolean
}

const todos: Todos[] = []

function addTodo(title: string) {
  todos.push({ title, isDone: false })
}

function completeTodo(index: number) {
  const todo = todos[index - 1]
  if (todo) todo.isDone = true
}

function listTodos() {
  for (const todo of todos) {
    console.log(`${todo.title}: ${todo.isDone ? "Concluído" : "Não Concluído"}`)
  }
}

const todo1: string = prompt("Informe o nome do primeiro todo: ")!
addTodo(todo1)

const todo2: string = prompt("Informe o nome do segundo todo: ")!
addTodo(todo2)

const todo3: string = prompt("Informe o nome do terceiro todo: ")!
addTodo(todo3)

const todo4: string = prompt("Informe o nome do quarto todo: ")!
addTodo(todo4)

const completarTodo: number = prompt("Informe o id do todo a ser competado: ")!
completeTodo(completarTodo)

listTodos()
