const express = require('express');
const { userRegistration, userLogin } = require('./user.controller');
const router = express.Router()


// user register endpoint
router.post('/regiester', userRegistration)
router.post('/login', userLogin)


module.exports = router;