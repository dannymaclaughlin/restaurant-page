import "./styles.css";

export function renderContact() {
    const contentContainer = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");
    contentContainer.appendChild(contactDiv);

    const tabHeaderDiv = document.createElement("div");
    tabHeaderDiv.classList.add("tabHeaderDiv");
    contactDiv.appendChild(tabHeaderDiv);

    const tabHeaderElement = document.createElement("h1");
    tabHeaderDiv.appendChild(tabHeaderElement);

    const tabHeaderText = document.createTextNode("Contact Us");
    tabHeaderElement.appendChild(tabHeaderText);
}