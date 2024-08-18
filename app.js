const express = require("express")
const rotaTarefas = require("./rotas/tarefas")

const app = express()

const port = 8000

app.use(express.json())

app.use('/tarefas', rotaTarefas)

app.listen (port, () => {
    console.log("Escutando a porta" + port)
})