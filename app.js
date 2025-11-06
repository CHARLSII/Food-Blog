// Fetch meals from TheMealDB API https://www.themealdb.com/api.php
async function fetchMeals() {
  try {
    const randomMeals = [];
    for (let i = 0; i < 8; i++) {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      randomMeals.push(data.meals[0]);
    }

    const meals = randomMeals.map((meal) => ({
      text: meal.strMeal,
      img: meal.strMealThumb,
      link: `https://www.themealdb.com/meal/${meal.idMeal}`,
    }));
    generateCards("cardContainer", meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
}

function generateCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

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

// about overlay functionality
const overlay = document.getElementById("aboutOverlay");
const aboutLink = document.getElementById("aboutLink");
const closeBtn = document.getElementById("closeOverlay");

aboutLink.addEventListener("click", () => {
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

// Search functionality
document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();

  if (data.meals) {
    const meals = data.meals.map((meal) => ({
      text: meal.strMeal,
      img: meal.strMealThumb,
      link: `https://www.themealdb.com/meal/${meal.idMeal}`,
    }));
    generateCards("cardContainer", meals);
  } else {
    document.getElementById("cardContainer").innerHTML =
      "<p>No results found.</p>";
  }
});

// Run the API fetch
fetchMeals();
