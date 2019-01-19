// browser code
// https://codepen.io/proverbsxu/pen/vvoBJV


function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };

        image.onerror = () => {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

let p = loadImageAsync('https://i.redd.it/spo5q1n66gg11.jpg');
p.then((img) => {
    console.log(img.src);
    document.body.appendChild(img);
}, (err) => {
    console.log(err);
});
