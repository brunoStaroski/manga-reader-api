const axios = require("axios");
const cheerio = require("cheerio");
//const pretty = require("pretty");

const url = 'https://lilymanga.com/?s=';
const postType = '&post_type=wp-manga'


module.exports = {
    search: async function(name) {
        let mangas = []

        await axios.get(`${url}${name}${postType}`).then(result => {
            if (result.status !== 200 || !result.data || result.data === '') {
                console.log(`Error while trying to search ${url}${name}${postType}`)
                return mangas; //TODO better error handling
            }

            const $ = cheerio.load(result.data);
            const searchResults = $('.tab-content-wrap > .c-tabs-item').children();

            let title, image, url, lastChapter, lastUpdatedOn, status, origin;
            searchResults.each((idx, el) => {
                title = $(el).find('.post-title h3').text().trim();
                image = $(el).find('.tab-thumb a').find('img').attr('data-src');
                url = $(el).find('.post-title h3').find('a').attr('href');
                lastChapter = $(el).find('.latest-chap').find('.chapter').text().trim();
                lastUpdatedOn = $(el).find('.post-on span').text().trim();
                status = $(el).find('.mg_status').find('.summary-content').text().trim()
                origin = 'lilyManga';

                mangas.push({
                    title,
                    image,
                    url,
                    lastChapter,
                    lastUpdatedOn,
                    status,
                    origin
                });

                // console.log(idx, title,
                //     image,
                //     url,
                //     lastChapter,
                //     lastUpdatedOn,
                //     status)
            });
        })
        return mangas;
    }


}