export class Navbar {
    constructor(selector, href, icon, value) {
        this.$navbar = document.querySelector(selector);
        this.href = href;
        this.icon = icon;
        this.value = value;
    }
    render(links) {
        links.forEach(link => {
            this.$navbar.insertAdjacentHTML('beforeend', this.getNavigationLink())
        })
    }
    getNavigationLink() {
        return `<li><a href="${this.href}" class="nav-link scrollto"><i class="bi ${this.icon}"></i> <span>${this.value}</span></a></li>`;
    }
    

}