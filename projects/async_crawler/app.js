// a async crawler with concurrency

const superagent = require('superagent');
const cheerio = require('cheerio');
const EventProxy = require('eventproxy');

superagent.get('https://www.cnblogs.com/proverbs/').then(sres => {
    // sres.text is the html
    let $ = cheerio.load(sres.text);
    let items = [];
    $('.postTitle').each((idx, ele) => {
        let node = $(ele);
        // console.log(node.children().first());
        items.push(node.children().first().attr('href'));
    });

    items = [...new Set(items)]; // remove duplicates
    console.log(items);
    
    let ep = new EventProxy();
    ep.all(...items, (...titles) => {
        console.log(titles);
    });

    for (let i in items) { // concurrency
        let url = items[i];
        // console.log(url);
        superagent.get(url).then(sres => { // async
            let $ = cheerio.load(sres.text);
            let node = $('title');
            // console.log(url, node.text());
            ep.emit(url, node.text());
        }).catch(err => {
            console.log(err);
        });
    }
    console.log('reach the end...');
}).catch(err => {
    console.log(err);
});
