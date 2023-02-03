const lilyMangaReadService = require('./lilyMangaRead')

module.exports = {
    details: async function(url, origin) {
        switch (origin) {
            case 'lilyManga':
                return new Promise((resolve, reject) => {
                    resolve(lilyMangaReadService.getDetails(url))
                })
        }
    }
}