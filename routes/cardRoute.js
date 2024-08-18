const router =require('express').Router();

const {getUserCards,addCard,editCard,
    deleteCard} = require('../controller/cardController')



router.get('/:id',getUserCards)


router.post('/',addCard )

router.put('/:id',editCard)

router.delete('/:id',deleteCard)



module.exports = router