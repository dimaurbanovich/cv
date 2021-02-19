
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

function title(section) {
    return `
    <section class="row">
        <div class="col-sm">
            <h2>${section.value}</h2>
        </div>
    </section>
    `;
};

function text(section) {
    return `
    <section class="row">
        <div class="col-sm">
            <p>${section.value}</p>
        </div>
    </section>
    `;
};

function columns(section) {
    const html = section.value.map(
        item => {
            return `<div class="col-sm"><p>${item}</p></div>`
        }
    );
    console.log(html)
    return `
    <section class="row">
        ${html.join('')}
    </section>
    `;
};