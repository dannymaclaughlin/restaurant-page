import { loadPage } from "./page-load";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import "./styles.css";


// renders page-load.js module
// loadPage();

// renders home.js module
renderHome();

// renders menu.js file
// renderMenu();

// renders contact.js module
// insert renderContact() here

// tab switching logic ( function to be called after page is loaded )
function tabSwitchingLogic() {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const contactButton = document.querySelector("#contact-button");

    homeButton.addEventListener('click', () => {
        alert("you've clicked on the home button")
    })

    menuButton.addEventListener('click', () => {
        alert("you've clicked on the menu button")
    })

    contactButton.addEventListener('click', () => {
        alert("you've clicked on the contact button")
    })
};

tabSwitchingLogic();