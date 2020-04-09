const { argv } = require('optimist')
    .alias('a', 'all')
    .alias('h', 'html')
    .alias('l', 'lang');

const onthisday = require('./lib');

const all = argv.all || false;
const html = argv.html || false;
const lang = argv.lang || 'en';

(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return onthisday({ lang, day, month, html, all })
        .then((data) => console.log(JSON.stringify(data)))
        .catch(console.error);
})();
