const onthisday = require('./lib');

exports.handler = async event => new Promise((resolve, reject) => {
    const { html, all, lang, day, month } = event.queryStringParameters || {};
    const date = new Date();
    const options = {
        lang: lang || 'en',
        html: html || false,
        all: all || false,
        day: (!day || !month ? date.getDate() : day),
        month: (!day || !month ? date.getMonth() + 1 : month),
    };
    return onthisday(options).then((data) => {
        resolve({ statusCode: 200, body: JSON.stringify(data) });
    }).catch(reject);
});
