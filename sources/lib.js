const rp = require('request-promise');
const cheerio = require('cheerio');

const locales = require('./locales');

const htmlDecode = value => cheerio.load('<div/>')('div').html(value).text();

const getURL = (language, day, month, all) => {
    if (!Object.keys(locales).includes(language) || month < 1 || month > 12) {
        return null;
    }
    const baseUrl = `https://${language}.wikipedia.org/wiki/`;
    return `${baseUrl}${locales[language].template(day, month, !all)}`;
};

const splitDateFromContent = (elem, html, language, all) => {
    const dateSep = (html
        ? locales[language].dateSeparator(all)
        : htmlDecode(locales[language].dateSeparator(all))
    );
    const tmp = (html ? elem.html() : elem.text());
    const index = tmp.indexOf(dateSep);
    return (index === -1 ? tmp : tmp.substr(index + dateSep.length));
};

const html2json = (body, language, html, all) => {
    const $ = cheerio.load(body);
    return $('.mw-parser-output > ul > li').get().map((e) => {
        const elem = $(e);
        const date = parseInt(elem.text().split(locales[language].dateSeparator(all))[0], 10);
        const categorieIndex = $(elem.parent().get(0)).prevAll('h2').get().length - 1;
        if (categorieIndex >= locales[language].categories.length) {
            return { categorie: null };
        }
        const categorie = (
            categorieIndex === -1
            ? 'events' // For mains events
            : locales[language].categories[categorieIndex]
        );
        // For non english versions (where an 'ul' is present after date)
        const child = elem.find('ul > li').get();
        if (child.length !== 0) {
            return {
                date,
                categorie,
                events: child.map(el => (html ? $(el).html() : $(el).text())),
            };
        }
        return { date, categorie, events: [splitDateFromContent(elem, html, language, all)] };
    }).reduce((acc, elem) => {
        if (!elem || !elem.categorie) {
            return acc;
        }
        if (acc[elem.categorie] === undefined) {
            return { ...acc, [elem.categorie]: { [elem.date]: elem.events } };
        }
        return {
            ...acc,
            [elem.categorie]: {
                ...acc[elem.categorie],
                [elem.date]: (
                    acc[elem.categorie][elem.date] === undefined
                        ? elem.events
                        : elem.events.concat(acc[elem.categorie][elem.date])
                ),
            },
        };
    }, { language, html });
};

module.exports = async ({ lang, day, month, html, all }) => {
    const url = getURL(lang, day, month, all);
    return (url ? rp({ uri: url, transform: body => html2json(body, lang, html, all) }) : null);
};
