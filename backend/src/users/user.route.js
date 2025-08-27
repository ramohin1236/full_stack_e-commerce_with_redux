const express = require('express');
const { userRegistration } = require('./user.controller');
const router = express.Router()


// user register endpoint
router.post('/regiester', userRegistration)


module.exports = router;