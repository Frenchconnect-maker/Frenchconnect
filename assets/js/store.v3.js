// =======================
// CATALOGUE PRODUITS
// =======================
const STORE = [
  {
    id: "flower-gelato",
    name: "Gelato CBD Premium",
    category: "fleurs",
    badge: "USA Indoor",
    image: "assets/images/hero.jpg",
    desc: "Fleur CBD premium cultivée indoor aux USA. Arômes sucrés et crémeux.",
    options: [
      { id: "1g", label: "1g", price: 10 },
      { id: "2g", label: "2g", price: 18 },
      { id: "5g", label: "5g", price: 40 },
      { id: "10g", label: "10g", price: 75 }
    ]
  },
  {
    id: "hash-ice-o-lator",
    name: "Ice O Lator CBD",
    category: "resines",
    badge: "Extract USA",
    image: "assets/images/hero.jpg",
    desc: "Résine CBD premium issue de producteurs américains.",
    options: [
      { id: "1g", label: "1g", price: 15 },
      { id: "2g", label: "2g", price: 28 },
      { id: "5g", label: "5g", price: 65 }
    ]
  }
];

// =======================
// HELPERS
// =======================
const formatPrice = n => n.toFixed(2).replace(".", ",") + " €";

// =======================
// BOUTIQUE
// =======================
function renderShop(){
  const grid = document.getElementById("product-grid");
  if(!grid) return;

  grid.innerHTML = STORE.map(p => {
    const basePrice = p.options[0].price;

    return `
      <article class="card">
        <a href="product.html?id=${p.id}">
          <img class="thumb" src="${p.image}" alt="${p.name}">
        </a>

        <div class="pad">
          <span class="pill">${p.badge}</span>
          <h3>${p.name}</h3>
          <p class="muted">${p.desc}</p>

          <div class="price-tag">
            À partir de ${formatPrice(basePrice)}
          </div>

          <div class="btn-row">
            <a class="btn" href="product.html?id=${p.id}">
              Choisir le grammage
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// =======================
document.addEventListener("DOMContentLoaded", renderShop);

