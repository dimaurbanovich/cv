
const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vitae beatae nesciunt. Alias, officia consequuntur quia porro inventore aspernatur facilis vitae earum ratione nobis voluptate, sunt voluptas fugiat perferendis suscipit.';

const sections = [
    { type: 'title', value: 'Hello world!' }, // объект без названия
    { type: 'text', value: loremText },
    { type: 'columns', value: [loremText, loremText, loremText] }
];

const $content = document.querySelector('#cv');  // $ был в jquery но можно не использовать

sections.forEach( section => {
    let html = '';

    if (section.type === 'title') {
        html = title(section);

    } else if (section.type === 'text') {
        html = text(section);

    } else if (section.type === 'columns') {
        html = columns(section);
    };

    $content.insertAdjacentHTML('beforeend', html); // вставляется динамический контент 
});

function row(content) {
    return `<section class="row">${content}</section>`
};

function col(content) {
    return `<div class="col-sm">${content}</div>`
};

function title(section) {
    return row(col(`<h2>${section.value}</h2>`)); // не забывать ``
};

function text(section) {
    return row(col(`<p>${section.value}</p>`));
};

function columns(section) {
    const html = section.value.map(
        item => {
            return col(`<p>${item}</p>`);
        }
    );
    console.log(html)
    return row(`${html.join('')}`);
};