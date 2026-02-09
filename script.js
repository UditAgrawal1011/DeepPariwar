const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform='translateY(0)';
    }
  });
},{threshold:.15});

document.querySelectorAll('section,.card').forEach(el=>{
  el.style.opacity=0;
  el.style.transform='translateY(40px)';
  el.style.transition='.8s ease';
  observer.observe(el);
});


// ===== DYNAMIC RECIPES RENDER =====
const grid = document.getElementById("recipesGrid");

if (grid && typeof recipesData !== "undefined") {
  grid.innerHTML = recipesData.map(recipe => `
    <div class="recipe-card">
      <div class="recipe-img">
        <img src="${recipe.image}" alt="${recipe.title}">
        <div class="img-overlay">
          <span onclick="openRecipe('${recipe.slug}')">Get cooking</span>
        </div>
      </div>
      <div class="recipe-info">
        <small class="category red">${recipe.category}</small>
        <h3>${recipe.title}</h3>
        <div class="meta">⏱ ${recipe.time} • 👨‍🍳 ${recipe.level}</div>
      </div>
    </div>
  `).join("");
}

function openRecipe(slug) {
  localStorage.setItem("selectedRecipe", slug);
  window.location.href = "recipe-detail.html";
}

// ===== RECIPE DETAIL LOAD =====
const detail = document.getElementById("recipeDetail");

if (detail && typeof recipesData !== "undefined") {
  const slug = localStorage.getItem("selectedRecipe");
  const recipe = recipesData.find(r => r.slug === slug);

  if (recipe) {
    detail.innerHTML = `
      <img src="${recipe.image}" />
      <div>
        <span class="tag">${recipe.category}</span>
        <h1>${recipe.title}</h1>
        <p>⏱ ${recipe.time} • 👨‍🍳 ${recipe.level}</p>

        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

        <h3>Method</h3>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      </div>
    `;
  }
}


const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = recipesData.filter(r =>
      r.title.toLowerCase().includes(value)
    );

    grid.innerHTML = filtered.map(recipe => `
      <div class="recipe-card">
        <img src="${recipe.image}">
        <h3>${recipe.title}</h3>
      </div>
    `).join("");
  });
}


/* ===== FEATURED RECIPE SLIDER ===== */

let heroIndex = 0;
const hero = document.getElementById("recipeHero");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const heroLink = document.getElementById("heroLink");

function updateHero(){
  const item = featuredRecipes[heroIndex];
  hero.style.backgroundImage = `url(${item.image})`;
  heroTitle.textContent = item.title;
  heroDesc.textContent = item.desc;
  heroLink.href = item.link;

  heroIndex = (heroIndex + 1) % featuredRecipes.length;
}

if(hero){
  updateHero();
  setInterval(updateHero, 5000);
}

/* ===== PARALLAX EFFECT ===== */
window.addEventListener("scroll", () => {
  if(hero){
    const offset = window.scrollY * 0.3;
    hero.style.backgroundPosition = `center ${offset}px`;
  }
});



const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

let currentProduct = null;

if (slug && typeof products !== "undefined") {
  currentProduct = products.find(p => p.slug === slug);

  if (!currentProduct) {
    console.error("Product not found:", slug);
  } else {

    document.getElementById("productTitle").innerText = currentProduct.title;
    document.getElementById("productDesc").innerText = currentProduct.description;

    const img = document.getElementById("productImage");
    img.src = currentProduct.image;

    // PACK SIZES
    const packBox = document.getElementById("packSizes");
    packBox.innerHTML = "";
    currentProduct.packs.forEach(p => {
      packBox.innerHTML += `<span class="pack">${p}</span>`;
    });

    // NUTRITION
    const nutriBox = document.getElementById("nutritionGrid");
    nutriBox.innerHTML = "";
    currentProduct.nutrition.forEach(n => {
      nutriBox.innerHTML += `
        <div class="nutri-item">
          <strong>${n.value}</strong>
          <span>${n.label}</span>
        </div>
      `;
    });

    // WHY CHOOSE
    document.getElementById("whyTitle").innerText = currentProduct.why.title;
    document.getElementById("whyImage").src = currentProduct.why.image;

    const whyList = document.getElementById("whyPoints");
    whyList.innerHTML = "";
    currentProduct.why.points.forEach(p => {
      whyList.innerHTML += `<li>${p}</li>`;
    });

    // ADVANTAGES
    const advGrid = document.getElementById("advGrid");
    advGrid.innerHTML = "";
    currentProduct.advantages.forEach((a, i) => {
      advGrid.innerHTML += `
        <div class="adv-card">
          <span>${i + 1}</span>
          <p>${a}</p>
        </div>
      `;
    });

    // RECIPES
    const recipeBox = document.getElementById("recipeSlider");
    recipeBox.innerHTML = "";
    currentProduct.recipes.forEach(r => {
      recipeBox.innerHTML += `
        <div class="recipe-card">
          <img src="${r.image}">
          <h4>${r.title}</h4>
          <small>${r.time} • ${r.level}</small>
        </div>
      `;
    });

    // VIDEOS
    const videoGrid = document.getElementById("videoGrid");
    const mainVideo = document.getElementById("mainVideo");

    videoGrid.innerHTML = "";
    mainVideo.innerHTML = "";

    if (currentProduct.videos.length) {
      mainVideo.innerHTML = `<iframe src="${currentProduct.videos[0]}" allowfullscreen></iframe>`;
      currentProduct.videos.forEach(v => {
        videoGrid.innerHTML += `<iframe src="${v}" loading="lazy"></iframe>`;
      });
    }
  }
}

// ===== ADVANTAGE CAROUSEL FIX =====
/* ===== ADVANTAGE CAROUSEL (FINAL FIX) ===== */

let advIndex = 0;

function moveAdv(dir) {
  if (!currentProduct || !currentProduct.advantages) return;

  const advTrack = document.querySelector(".adv-track");
  if (!advTrack) return;

  advIndex += dir;

  if (advIndex < 0) advIndex = currentProduct.advantages.length - 1;
  if (advIndex >= currentProduct.advantages.length) advIndex = 0;

  advTrack.style.transform = `translateX(-${advIndex * 100}%)`;
}
