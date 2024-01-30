
const express = require('express');
const router = express.Router();



router.get('/', require('../controllers/skills').index)

router.get('/new', require('../controllers/skills').newSkill);


router.get('/:id',require('../controllers/skills').show)


// router.get('/new', require('../controllers/skills').newSkill);

router.post('/',require('../controllers/skills').createSkill)
router.delete ('/:id',require('../controllers/skills').deleteSkill)
router.get('/:id/edit', require('../controllers/skills').editSkill)

router.put('/:id',require('../controllers/skills').update)

module.exports = router;