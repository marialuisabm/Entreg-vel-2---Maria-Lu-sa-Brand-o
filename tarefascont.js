const {getTodasasTarefas, getTarefaporid, insereTarefa, modificaTarefa, deletatarefaporid} = require("../serviços/tarefasserv")

function getTarefas(req, res) {
    try {
        const tarefas = getTodasasTarefas()
        res.send(tarefas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getTarefa(req, res) {
    try {
        const id = req.params.id
            const tarefa = getTarefaporid(id)
            res.send(tarefa)
    }  catch (error) {
            res.status(500)
            res.send(error.message)
    }
}

function postTarefa(req, res) {
    try {
        const tarefainserida = insereTarefa(req.body)
        res.status(201)
        res.send("Tarefa inserida com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error)
    }
}

function patchTarefa(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        modificaTarefa(body, id)
        res.send("Tarefa modificada com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error)
    }
}

function deleteTarefa (req, res) {
    try {
        const id = req.params.id
        deletatarefaporid(id)
        res.send("Tarefa deletada com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error)
    }
}

module.exports = {getTarefas, getTarefa, postTarefa, patchTarefa, deleteTarefa}