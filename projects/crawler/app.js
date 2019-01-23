// a simple crawler

const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

let app = express();

app.get('/', (req, res) => {
    superagent.get('http://www.cnblogs.com/proverbs/').then(sres => {
        // sres.text is the html
        let $ = cheerio.load(sres.text);
        let items = [];
        $('.postTitle').each((idx, ele) => {
            let node = $(ele);
            // console.log(node.children().first());
            items.push({
                title: node.children().first().text(),
                url: node.children().first().attr('href')
            });
        });
        res.send(items);
    }).catch(err => {
        res.send(err);
    });
});

app.listen(9876, () => {
    console.log('Server is listening on port 9876.');
});