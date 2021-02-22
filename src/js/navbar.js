const links = [
    { href: '#home', icon: "bi-house-door", value: 'Home' }, // ВЫносим в массив похожие значения
    { href: '#about', icon: "bi-person", value: 'About' },
    { href: '#resume', icon: "bi-file-earmark-person", value: 'Resume' },
    { href: '#contacts', icon: "bi-person-lines-fill", value: 'Contacts' }
];

const $navbar = document.querySelector('#navbar');
const $navbarUl = document.createElement('ul'); // создает элемент (Tag))
$navbar.append($navbarUl); // вставляет элемент

links.forEach( link => {
    let html = navigation(link);
    $navbarUl.insertAdjacentHTML('beforeend', html);
});

function navigation(link) {
    return `<li><a href="${link.href}" class="nav-link scrollto"><i class="bi ${link.icon}"></i> <span>${link.value}</span></a></li>`
};