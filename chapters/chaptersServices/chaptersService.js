const lilyMangaChapterService = require('./lilyMangaChapterService')

module.exports = {
    getChapter: async function(url, origin) {
        switch (origin) {
            case 'lilyManga':
                return new Promise((resolve, reject) => {
                    resolve(lilyMangaChapterService.getChapter(url))
                })
        }
    }
}