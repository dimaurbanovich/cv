const links = [
    { type: 'home', value: 'Home' },
    { type: 'about', value: 'About' },
    { type: 'resume', value: 'Resume' },
    { type: 'contacts', value: 'Contacts' }
];

const $nav = document.querySelector('#navbar')


let newlinks = links.forEach( link => {
    let html = '';

    if ( link.type === 'home' ) {    
        html = home(link);

    } else if ( link.type === 'about' ) {
        html = about(link);

    } else if ( link.type === 'resume' ) {
        html = resume(link);

    } else if ( link.type === 'contacts' ) {
        html = contacts(link);

    };

    $nav.insertAdjacentHTML('beforeend', '<ul>');
    $nav.insertAdjacentHTML('beforeend', html);
    $nav.insertAdjacentHTML('beforeend', '</ul>');
});




function home(link) {
    return `<li><a href="#home" class="nav-link scrollto"><i class="bi bi-house-door"></i> <span>${link.value}</span></a></li>`;
};

function about(link) {
    return `<li><a href="#about" class="nav-link scrollto"><i class="bi bi-person"></i> <span>${link.value}</span></a></li>`;
};

function resume(link) {
    return `<li><a href="#resume" class="nav-link scrollto"><i class="bi bi-file-earmark-person"></i> <span>${link.value}</span></a></li>`;
};

function contacts(link) {
    return `<li><a href="#contacts" class="nav-link scrollto"><i class="bi bi-person-lines-fill"></i> <span>${link.value}</span></a></li>`;
};