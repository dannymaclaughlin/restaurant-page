import { loadPage } from "./page-load";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import "./styles.css";


// renders page-load.js module
// loadPage();

// renders home.js module
// renderHome();

// renders menu.js file
// renderMenu();

// renders contact.js module
renderContact();

// tab switching logic ( function to be called after page is loaded )
function tabSwitchingLogic() {
    const homeButton = document.querySelector("#home-button");
    const menuButton = document.querySelector("#menu-button");
    const contactButton = document.querySelector("#contact-button");

    homeButton.addEventListener('click', () => {
        // alert("you've clicked on the home button")

        renderHome();
    })

    menuButton.addEventListener('click', () => {
        // alert("you've clicked on the menu button")

        renderMenu();
    })

    contactButton.addEventListener('click', () => {
        // alert("you've clicked on the contact button")

        renderContact();
    })
};

tabSwitchingLogic();