const router  = require('express').Router()

const {
    getUserAccount,
    addAccount,
    editAccount,
    deleteAccount
} = require('../controller/accountController')


router.get('/:id' , getUserAccount)



router.post('/',addAccount)


router.put('/:id' , editAccount)

router.delete('/:id' , deleteAccount)


module.exports = router