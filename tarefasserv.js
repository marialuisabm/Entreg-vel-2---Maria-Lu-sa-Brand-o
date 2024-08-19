const fs = require("fs")

function getTodasasTarefas() {
    return JSON.parse(fs.readFileSync("tarefas.json"))
}

function getTarefaporid(id) {
    const tarefas = JSON.parse(fs.readFileSync("tarefas.json"))
    const tarefafiltrada = tarefas.filter( tarefa => tarefa.id === id) [0]
    return tarefafiltrada
}

function insereTarefa(tarefanova) {
    const tarefas = JSON.parse(fs.readFileSync("tarefas.json"))
    const novalistadetarefas = [... tarefas, tarefanova]
    fs.writeFileSync("tarefas.json", JSON.stringify(novalistadetarefas))
}

function modificaTarefa(modificacoes, id) {
    let tarefasatuais = JSON.parse(fs.readFileSync("tarefas.json"))
    const indicemodificado = tarefasatuais.findIndex(tarefa => tarefa.id === id)
    const conteudomudado = {...tarefasatuais[indicemodificado], ...modificacoes}
    tarefasatuais[indicemodificado] = conteudomudado
    fs.writeFileSync("tarefas.json", JSON.stringify(tarefasatuais))
}

function deletatarefaporid(id) {
    const tarefas = JSON.parse(fs.readFileSync("tarefas.json"))
    const tarefasFiltradas = tarefas.filter( tarefa => tarefa.id !== id) 
    fs.writeFileSync("tarefas.json", JSON.stringify(tarefasFiltradas))
}

module.exports = {getTodasasTarefas, getTarefaporid, insereTarefa, modificaTarefa, deletatarefaporid}
