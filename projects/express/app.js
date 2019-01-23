const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send('Welcome to express app.');
});

app.listen(9876, () => {
    console.log('Server is listening on port 9876.');
});