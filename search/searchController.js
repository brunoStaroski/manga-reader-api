const searchService = require('./searchServices/searchService')

const search = async (req, res, next) => {
    console.log(req.query.name)
    if (req.query.name && req.query.name !== '') {
        searchService.search(req.query.name).then((resolve, reject) => {
            if (reject) {throw reject}
            res.json(resolve);
        })
    } else {
        res.status(500).json('Couldnt execute search')
    }
}

module.exports = {search}

