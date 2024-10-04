import "./styles.css";

export function renderHome() {
    const contentContainer = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("homeDiv");
    contentContainer.appendChild(homeDiv);

    // restaurant name
    const restaurantNameElement = document.createElement("h1");
    const restaurantNameText = document.createTextNode("Stev's Potatoes");
    restaurantNameElement.appendChild(restaurantNameText);
    homeDiv.appendChild(restaurantNameElement);
    restaurantNameElement.classList.add("restaurantName");

    // restaurant description
    const descriptionElement = document.createElement("p");
    const descriptionText = document.createTextNode("At Stev’s Potatoes, we take pride in offering the finest, premium-quality potatoes in town. As a local upscale restaurant, we specialize in crafting exquisite potato dishes that highlight the rich, earthy flavors of our farm-to-table produce. Every potato we serve is sourced directly from our own local, organic farm, ensuring that every bite is as fresh as it is flavorful. Whether you’re enjoying a classic baked potato or one of our gourmet creations, you’ll taste the care and quality that goes into each dish at Stev’s Potatoes.");
    descriptionElement.appendChild(descriptionText);
    homeDiv.appendChild(descriptionElement);

    // hours of operation
    const hoursOfOperationElement = document.createElement("p");
    const hoursOfOperationText = document.createTextNode("Monday - Friday: 9:00 AM - 6:00 PM / Saturday & Sunday: 9:00 AM - 10:00 PM");
    hoursOfOperationElement.appendChild(hoursOfOperationText);
    homeDiv.appendChild(hoursOfOperationElement);

    // location/address
    const addressElement = document.createElement("p");
    const addressText = document.createTextNode("210 Potato Dr, Las Vegas, NV 89118");
    addressElement.appendChild(addressText);
    homeDiv.appendChild(addressElement);
}