// server to show md5 according to query in url

const express = require('express');
const utility = require('utility');

let app = express();

app.get('/', (req, res) => {
    // query vs. body
    let q = req.query.q;
    if (typeof q !== 'string') {
        res.send('Please pass a query!');
    } else {
        let qmd5 = utility.md5(q);
        let res_str = `${q}'s MD5 is ${qmd5}`;
        res.send(res_str);
    }
});

app.listen(9876, () => {
    console.log('Server is listening on port 9876.');
});