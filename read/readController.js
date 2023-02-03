const readService = require('./readServices/readService')

const details = async (req, res, next) => {
    console.log(req.body);
    if (req.body.url && req.body.origin) {
        readService.details(req.body.url, req.body.origin).then((resolve, reject) => {
            if (reject) {throw reject};
            res.json(resolve);
        })
    } else {
        res.status(500).json('Couldnt open manga')
    }

}

module.exports = {details}

