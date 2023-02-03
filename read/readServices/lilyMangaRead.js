const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer')
const pretty = require('pretty');

    module.exports = {
        getDetails: async function(url) {
            let manga = '';

            //TODO find better way of doing this
            //TODO do some error handling
            //TODO find a way to get some better perfomance

            const browser = await puppeteer.launch({ headless: true }) //needed to use pippeteer for loading the manga list, not the best performance but works
            const page = await browser.newPage()
            await page.goto(url, { waitUntil: 'networkidle0' })
            const html = await page.content()

            const $ = cheerio.load(html);

            //get the manga details
            const mangaDetails = $('.profile-manga').children();
            let title = mangaDetails.find('.post-title').find('h1').text().trim();
            let image = mangaDetails.find('.tab-summary').find('.summary_image').find('a').find('img').attr('data-src')

            //concat the genres
            let genres = '';
            mangaDetails.find('.genres-content').children().each((idx, el) => {
                genres.concat($(el).html().trim());
            })

            let author = mangaDetails.find('.author-content').find('a').text();
            //get details end

            //get the manga summary
            let summary = $('.description-summary').find('.summary__content').find('p').text().trim();

            //get chapters list
            let chaptersList = [];
            const chaptersHolder = $('#manga-chapters-holder').find('.listing-chapters_wrap').find('li')
            chaptersHolder.each((idx, el) => {
                const chapter = $(el).find('a')
                chaptersList.push({'chapterName': chapter.text().trim(), 'chapterUrl': chapter.attr('href')})
            })

            manga = {
                title,
                image,
                genres,
                author,
                summary,
                chaptersList
            }

            await browser.close();
            return manga;
        }
    }




