const async = require('async');
const Promise = require('promise');

function mytimeout(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    }, delay);
}

let urls = [];
for (let i = 1; i <= 20; i ++) {
    urls.push(`blog.proverbs.top/${i}.html`);
}

let con_cnt = 0;
async function fetchUrl(url) {
    let delay = parseInt(Math.random() * 3000, 10);
    con_cnt ++;
    console.log(`there are ${con_cnt} connections running...`);
    await mytimeout(delay);
    con_cnt --;
    console.log(delay);
    return delay
}

async.mapLimit(urls, 5, fetchUrl, (err, res) => {
    if (err) console.log(err);
    else {
        // res is the array of return values of fetchUrl
        console.log(res);
    }
});