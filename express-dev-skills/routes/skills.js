
const express = require('express');
const router = express.Router();



router.get('/', require('../controllers/skills').index)

module.exports = router;