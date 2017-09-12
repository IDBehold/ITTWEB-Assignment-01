const express = require('express');
const router = express.Router();
const controller = require('../controllers/new-workout')

/* GET users listing. */
router.get('/new-workout', controller.newWorkout);

module.exports = router;
