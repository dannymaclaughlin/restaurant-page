import "./styles.css";

export function renderContact() {
    const contentContainer = document.querySelector("#content");

    // main div
    const contactMainDiv = document.createElement("div");
    contactMainDiv.classList.add("contactMainDiv");
    contentContainer.appendChild(contactMainDiv);

    // header div
    const tabHeaderDiv = document.createElement("div");
    tabHeaderDiv.classList.add("tabHeaderDiv");
    contactMainDiv.appendChild(tabHeaderDiv);

    // header element
    const tabHeaderElement = document.createElement("h1");
    tabHeaderDiv.appendChild(tabHeaderElement);

    // header text
    const tabHeaderText = document.createTextNode("Contact Us");
    tabHeaderElement.appendChild(tabHeaderText);

    // phone number div
    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contactInfoDiv");
    contactMainDiv.appendChild(contactInfoDiv);

    contactInfoDiv.appendChild(document.createTextNode("(702)123-4567"));
    contactInfoDiv.appendChild(document.createElement('br'));
    contactInfoDiv.appendChild(document.createTextNode("210 Potato Dr"))
    contactInfoDiv.appendChild(document.createElement('br'));
    contactInfoDiv.appendChild(document.createTextNode("Las Vegas, NV 89118"))
}