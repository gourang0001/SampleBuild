const express = require('express');
const router = express.Router();
const buildagainController = require('../controllers/buildagainController');

router.get('/buildagain', buildagainController.buildagain);
router.post('/devcheck', buildagainController.devcheck);

module.exports = router;
