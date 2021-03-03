import { sections } from "./model";
import { links } from "./navbar";
import './styles/main.scss';
import { Application } from './classes/app'
import { Navbar } from "./classes/navbar";

const app = new Application('#cv');
app.render(sections);

const navbar = new Navbar('#navbar');
navbar.render(links);