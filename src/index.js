import { pageload } from './pageload.js';
import { dishes } from './dishes.js';
import { about } from './about.js';
import './styles/style.scss';

pageload();

let tabSwitchingModule = (function() {

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", pageload);

    const dishesTab = document.querySelector(".dishes");
    dishesTab.addEventListener("click", dishes);

    const aboutTab = document.querySelector(".about");
    aboutTab.addEventListener("click", about);

})();
