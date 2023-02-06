const express = require('express');
const chapterController = require('../../chapters/chaptersController')

const router  = express.Router();
router.post('/get-chapter', chapterController.getChapter);

module.exports = router;