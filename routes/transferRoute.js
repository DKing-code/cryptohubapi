const router = require('express').Router()

const {
    getUserTransfer,
    addTransfer,
    editTransfer,
    deleteTransfer,
    getAllTransfer,
    getTransferById
} = require('../controller/transferController')





router.get('/:id',getUserTransfer)
router.get('/',getAllTransfer)
router.get('/getTransferById/:id',getTransferById)


router.post('/' ,addTransfer)


router.put('/:id', editTransfer)



router.delete('/:id',deleteTransfer)



module.exports = router