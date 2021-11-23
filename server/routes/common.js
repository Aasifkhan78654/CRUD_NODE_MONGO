const express = require('express');
const router = express.Router();
const commmonController = require('../controller/common.js');


router.get('/sign-up', commmonController.signUp);

module.exports = router;