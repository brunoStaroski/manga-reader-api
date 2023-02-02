const express = require('express');
const searchController = require('../../search/searchController');

const router  = express.Router();
router.get('/', searchController.search);

module.exports = router;