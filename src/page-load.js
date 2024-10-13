import mainImage from "./images/main-photo.jpg"

export function loadPage() {
    const contentContainer = document.querySelector("#content");
    contentContainer.classList.add("pageloadContentContainer");

    // image
    const image = document.createElement("img");
    image.classList.add("pageloadMainImage");
    image.src = mainImage;
    contentContainer.appendChild(image);

    // headline
    const headline = document.createElement("h1");
    headline.classList.add("pageloadHeadline");
    const headlineText = document.createTextNode("the best potatoes in town... 🥔");
    headline.appendChild(headlineText);
    contentContainer.appendChild(headline);

    // some text about the restaurant
    const description = document.createElement("p");
    const descriptionText = document.createTextNode("At Stev’s Potatoes, we take pride in offering the finest, premium-quality potatoes in town. As a local upscale restaurant, we specialize in crafting exquisite potato dishes that highlight the rich, earthy flavors of our farm-to-table produce. Every potato we serve is sourced directly from our own local, organic farm, ensuring that every bite is as fresh as it is flavorful. Whether you’re enjoying a classic baked potato or one of our gourmet creations, you’ll taste the care and quality that goes into each dish at Stev’s Potatoes.");
    description.appendChild(descriptionText);
    contentContainer.appendChild(description);
}