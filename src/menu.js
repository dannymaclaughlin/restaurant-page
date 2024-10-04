import "./styles.css"

export function renderMenu() {
    const contentContainer = document.querySelector("#content");

    // menu main-container
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

    // item 2 container
    const item2Container = document.createElement("div");
    menuContainer.appendChild(item2Container);
    item2Container.classList.add("item2Container");

    // item 2 content
    const item2 = document.createElement("p");
    const item2Content = document.createTextNode("2");
    item2.appendChild(item2Content);
    item2Container.appendChild(item2);
    item2.classList.add("item2");

    // item 3 container
    const item3Container = document.createElement("div");
    menuContainer.appendChild(item3Container);
    item3Container.classList.add("item3Container");

    // item 3 content
    const item3 = document.createElement("p");
    const item3Content = document.createTextNode("3");
    item3.appendChild(item3Content);
    item3Container.appendChild(item3);
    item3.classList.add("item3");
}