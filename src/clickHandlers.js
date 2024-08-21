import './home.js';
import { renderContactPage } from './contact.js';
import { renderMenuPage } from './menu.js';
function runEventListeners() {
    const content = document.getElementById('content')
    document.getElementById('home').addEventListener('click', () => {
        content.innerHTML = 'Home'
    })
    document.getElementById('menu').addEventListener('click', () => {
        content.innerHTML = renderMenuPage();
    })
    document.getElementById('contact').addEventListener('click', () => {
        content.innerHTML = renderContactPage();
    })
}
export {runEventListeners};
