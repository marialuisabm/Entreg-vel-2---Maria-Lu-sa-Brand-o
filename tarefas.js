const {Router} = require("express")
const router = Router()
const {getTarefas, getTarefa, postTarefa, patchTarefa, deleteTarefa} = require("../controladores/tarefas")

router.get('/', getTarefas)

router.get('/:id', getTarefa)

router.post('/', postTarefa)

router.patch('/:id', patchTarefa)

router.delete('/:id', deleteTarefa)

module.exports = router