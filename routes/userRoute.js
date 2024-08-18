const router = require('express').Router();

const {getAllUsers,addUser, loginUser} = require('../controller/userController')



router.get('/',getAllUsers)


router.post('/',addUser)


router.post('/login',loginUser)


module.exports = router