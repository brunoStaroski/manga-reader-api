const lilyMangaSearch = require('./lilyMangaSearch');

module.exports = {
    search: async function(name) {
        return new Promise((resolve, reject) => {
            resolve(lilyMangaSearch.search(name.replace('', '+')))
        }) ;
    }
}