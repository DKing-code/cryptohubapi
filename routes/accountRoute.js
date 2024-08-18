const router  = require('express').Router()

const {
    getUserAccount,
    addAccount,
    editAccount,
    deleteAccount,
    getUserAccountBalances
} = require('../controller/accountController')


router.get('/:id' , getUserAccount)

router.get('/getBalance/:id' , getUserAccountBalances)



router.post('/',addAccount)


router.put('/:id' , editAccount)

router.delete('/:id' , deleteAccount)


module.exports = router