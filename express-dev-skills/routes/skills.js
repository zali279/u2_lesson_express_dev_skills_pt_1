
const express = require('express');
const router = express.Router();



router.get('/', require('../controllers/skills').index)

router.get('/:id',require('../controllers/skills').show)

module.exports = router;