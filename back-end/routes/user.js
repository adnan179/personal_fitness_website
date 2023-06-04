const express = require('express');

//controller funcs
const { loginUser, signupUser } = require('../controllers/userController')

//instance of express router
const router = express.Router();

//login user
router.use('/login',loginUser)

//signup user
router.use('/signup', signupUser)

module.exports = router;