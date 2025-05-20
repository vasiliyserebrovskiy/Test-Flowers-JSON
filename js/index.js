const flowersContainer = document.getElementById("flowers-container");

loadFlowers();

async function loadFlowers() {
  try {
    const res = await fetch(
      "https://alisherkhamidov.github.io/book-api/flowers.json"
    );

    const flowers = await res.json();
    console.log("Flowers", flowers);

    flowers.forEach((flower) => {
      console.log("We are here", flower);
      const { name, color, description, image } = flower;
      const cardFlower = document.createElement("div");
      cardFlower.classList.add("flower-card");
      const nameElem = document.createElement("p");
      const colorElem = document.createElement("p");
      const imageElem = document.createElement("img");
      imageElem.classList.add("flower-image");
      const descriptionElem = document.createElement("p");

      nameElem.innerHTML = "Name: " + name;
      colorElem.innerHTML = "Color: " + color;
      imageElem.src = image;
      descriptionElem.innerHTML = "Description: " + description;

      cardFlower.append(nameElem, colorElem, imageElem, descriptionElem);
      console.log("cardFlower", cardFlower);
      flowersContainer.append(cardFlower);
    });

    //
  } catch (err) {
    console.log(err);
  }
}
