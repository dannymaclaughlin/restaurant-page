import "./styles.css"

export function renderMenu() {
    const contentContainer = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    contentContainer.appendChild(menuContainer);
    menuContainer.classList.add("menuContainer");

    // item 1 container
    const item1Container = document.createElement("div");
    menuContainer.appendChild(item1Container);
    item1Container.classList.add("item1Container");

    // item 1 content
    const item1 = document.createElement("p");
    const item1Content = document.createTextNode("1");
    item1.appendChild(item1Content);
    item1Container.appendChild(item1);
    item1.classList.add("item1");
    item1Content.classList.add("item1Content");

    // item 2
    const item2Container = document.createElement("div");
    menuContainer.appendChild(item2Container);
    item2Container.classList.add("item2Container");

    // item 3
    const item3Container = document.createElement("div");
    menuContainer.appendChild(item3Container);
    item3Container.classList.add("item3Container");
}