import "./styles.css"

export function renderMenu() {
    const contentContainer = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    contentContainer.appendChild(menuDiv);
    menuDiv.classList.add("menuDiv");

    const item1Div = document.createElement("div");
    menuDiv.appendChild(item1Div);
    item1Div.classList.add("item1");

    const item2Div = document.createElement("div");
    menuDiv.appendChild(item2Div);
    item2Div.classList.add("item2");

    const item3Div = document.createElement("div");
    menuDiv.appendChild(item3Div);
    item3Div.classList.add("item3");
}