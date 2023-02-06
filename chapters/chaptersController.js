const chapterService = require('./chaptersServices/chaptersService')

const getChapter = async (req, res, next) => {
    if (req.body.url && req.body.origin) {
        chapterService.getChapter(req.body.url, req.body.origin).then((resolve, reject) => {
            if (reject) {throw reject};
            res.json(resolve);
        })
    } else {
        res.status(500).json('Couldnt open manga')
    }

}

module.exports = {getChapter}

