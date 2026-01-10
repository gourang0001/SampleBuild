const express = require('express');
const router = express.Router();
const buildagainController = require('../controllers/buildagainController');

router.get('/buildagain', buildagainController.buildagain);

module.exports = router;
