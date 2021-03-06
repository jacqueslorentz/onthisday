const locales = {
    fr: {
        months: [
            'janvier', 'f%C3%A9vrier', 'mars', 'avril', 'mai', 'juin', 'juillet',
            'ao%C3%BBt', 'septembre', 'octobre', 'novembre', 'd%C3%A9cembre',
        ],
        template: (day, monthIndex, mainOnly) => `${mainOnly
            ? 'Wikip%C3%A9dia:%C3%89ph%C3%A9m%C3%A9ride/'
            : ''}${day}_${locales.fr.months[monthIndex - 1]}`,
        categories: ['events', 'arts', 'sciences', 'economie', 'births', 'death'],
        dateSeparator: () => ': ',
    },
    en: {
        months: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December',
        ],
        template: (day, monthIndex, mainOnly) => `${mainOnly
            ? 'Wikipedia:Selected_anniversaries/'
            : ''}${locales.en.months[monthIndex - 1]}_${day}`,
        categories: ['events', 'births', 'death'],
        dateSeparator: () => '&#x2013; ',
    },
    de: {
        months: [
            'Januar', 'Februar', 'M%C3%A4rz', 'April', 'Mai', 'Juni', 'Juli',
            'August', 'September', 'Oktober', 'November', 'Dezember',
        ],
        template: (day, monthIndex, mainOnly) => (mainOnly
            ? `Wikipedia:Hauptseite/Jahrestage/${locales.de.months[monthIndex - 1]}/${day}`
            : `${day}._${locales.de.months[monthIndex - 1]}`),
        categories: ['events', 'births', 'death'],
        dateSeparator: (all) => (all ? ': ' : '&#8211;&#160;'),
    },
    ru: {
        months: [
            '%D1%8F%D0%BD%D0%B2%D0%B0%D1%80%D1%8F',
            '%D1%84%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8F',
            '%D0%BC%D0%B0%D1%80%D1%82%D0%B0',
            '%D0%B0%D0%BF%D1%80%D0%B5%D0%BB%D1%8F',
            '%D0%BC%D0%B0%D1%8F',
            '%D0%B8%D1%8E%D0%BD%D1%8F',
            '%D0%B8%D1%8E%D0%BB%D1%8F',
            '%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82%D0%B0',
            '%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8F',
            '%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F',
            '%D0%BD%D0%BE%D1%8F%D0%B1%D1%80%D1%8F',
            '%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D1%8F',
        ],
        template: (day, monthIndex, mainOnly) => (mainOnly
            ? `%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD:%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F_%D0%B4%D0%BD%D1%8F:${
                monthIndex > 9 ? monthIndex : `0${monthIndex}`}-${day}`
            : `${day}_${locales.ru.months[monthIndex - 1]}`),
        categories: ['importansDays', 'events', 'births', 'death'],
        dateSeparator: (all, html) => (html ? '&#x2014; ' : '— '),
    },
};
module.exports = locales;
