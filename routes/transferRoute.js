const router = require('express').Router()

const {
    getUserTransfer,
    addTransfer,
    editTransfer,
    deleteTransfer
} = require('../controller/transferController')





router.get('/:id',getUserTransfer)


router.post('/' ,addTransfer)


router.put('/:id', editTransfer)



router.delete('/:id',deleteTransfer)



module.exports = router