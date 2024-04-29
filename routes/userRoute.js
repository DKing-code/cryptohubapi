const router = require('express').Router();

const {getAllUsers,addUser} = require('../controller/userController')



router.get('/',getAllUsers)


router.post('/',addUser)


module.exports = router