const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    getChapter: async function(url) {
        let chapters = {title: '', pages: []}
        await axios.get(url).then(result => {
            if (result.status !== 200 || !result.data || result.data === '') {
                console.log(`Error while trying to search ${url}`)
                return chapters; //TODO better error handling
            }
            let $ = cheerio.load(result.data)
            chapters.title = $('#chapter-heading').text();
            let chaptersList = $('.reading-content').children();

            chaptersList.each((idx, el) => {
                let page = $(el).find('img').attr('data-src');
                if (page) {
                    chapters.pages.push({'url': page.trim()})
                }
            })

        })
        return chapters
    }



}