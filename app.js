const dishes = [
  {
    text: "Pochero Dish",
    img: "https://speedyrecipe.com/wp-content/uploads/2024/02/pata-pochero.jpg",
    link: "https://speedyrecipe.com/pochero/",
  },
  {
    text: "Adobo Dish",
    img: "https://speedyrecipe.com/wp-content/uploads/2019/02/Pork-Adobo.jpg",
    link: "https://speedyrecipe.com/pork-adobo/",
  },
  {
    text: "Sinigang Dish",
    img: "https://speedyrecipe.com/wp-content/uploads/2022/09/sinigang-na-baboy-recipe.jpg",
    link: "https://speedyrecipe.com/sinigang-na-baboy/",
  },
  {
    text: "Fried Chicken",
    img: "https://speedyrecipe.com/wp-content/uploads/2022/01/Crispy-Fried-Chicken.jpg",
    link: "https://speedyrecipe.com/crispy-fried-chicken/",
  },
];

function generateCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear existing cards

  items.forEach((item) => {
    const cardHTML = `
          <div class="card">
            <a href="${item.link}" target="_blank">
              <img class="card-img-top" src="${item.img}" alt="${item.text}" />
            </a>
            <div class="card-body">
              <p class="card-text">${item.text}</p>
            </div>
          </div>
        `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

generateCards("cardContainer", dishes);
