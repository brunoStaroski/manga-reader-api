const express = require('express');
const readController = require('../../read/readController')

const router  = express.Router();
router.post('/details', readController.details);

module.exports = router;