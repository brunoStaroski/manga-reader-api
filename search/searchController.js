const searchService = require('./searchServices/searchService')

const search = async (req, res, next) => {
    console.log(req.query.nome)
    if (req.query.nome && req.query.nome !== '') {
        searchService.search(req.query.nome).then((resolve, reject) => {
            if (reject) {throw reject}
            res.json(resolve);
        })
    } else {
        res.status(500).json('Couldnt execute search')
    }
}

module.exports = {search}

