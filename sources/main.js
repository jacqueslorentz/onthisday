const { argv } = require('optimist')
    .alias('a', 'all')
    .alias('h', 'html');

const onthisday = require('./lib');

const all = argv.all || false;
const html = argv.html || false;

(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return onthisday({ lang: 'fr', day, month, html, all })
        .then(data => console.log(JSON.stringify(data)))
        .catch(console.error);
})();
