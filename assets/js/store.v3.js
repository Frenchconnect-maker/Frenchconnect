const STORE = [

  // ===== FLEURS USA =====
  {
    id: "fleur-usa-1",
    name: "California Dream – Fleur CBD",
    price: 12.90,
    image: "assets/images/fleurs/fleur-1.webp",
    category: "fleurs",
    badge: "Indoor • USA",
    desc: "Fleur premium indoor cultivée en Californie. Arômes puissants et têtes compactes."
  },
  {
    id: "fleur-usa-2",
    name: "Sunset Cookies – Fleur CBD",
    price: 13.90,
    image: "assets/images/fleurs/fleur-2.webp",
    category: "fleurs",
    badge: "Indoor • USA",
    desc: "Notes gourmandes et sucrées. Sélection américaine haut de gamme."
  },
  {
    id: "fleur-usa-3",
    name: "Purple Gas – Fleur CBD",
    price: 14.90,
    image: "assets/images/fleurs/fleur-3.webp",
    category: "fleurs",
    badge: "Greenhouse • USA",
    desc: "Profil fruité et gazy. Fleur résineuse de qualité supérieure."
  },
  {
    id: "fleur-usa-4",
    name: "Lemon Haze – Fleur CBD",
    price: 11.90,
    image: "assets/images/fleurs/fleur-4.webp",
    category: "fleurs",
    badge: "Indoor • USA",
    desc: "Arômes citronnés intenses, fraîcheur et finesse."
  },
  {
    id: "fleur-usa-5",
    name: "OG Kush – Fleur CBD",
    price: 15.90,
    image: "assets/images/fleurs/fleur-5.webp",
    category: "fleurs",
    badge: "Indoor • USA • Premium",
    desc: "Variété iconique américaine, puissance aromatique exceptionnelle."
  }
];

// ====== OUTILS ======
const formatPrice = p => p.toFixed(2).replace('.', ',') + ' €';

function renderShop(){
  const grid = document.getElementById('product-grid');
  if(!grid) return;

  const search = document.getElementById('search');
  const filter = document.getElementById('category-filter');

  function update(){
    const q = search.value.toLowerCase();
    const cat = filter.value;

    const products = STORE.filter(p => {
      const matchQ = !q || p.name.toLowerCase().includes(q);
      const matchC = !cat || p.category === cat;
      return matchQ && matchC;
    });

    grid.innerHTML = products.map(p => `
      <article class="card">
        <img src="${p.image}" class="thumb" alt="${p.name}">
        <div class="pad">
          <span class="pill">${p.badge}</span>
          <h3>${p.name}</h3>
          <p class="muted">${p.desc}</p>
          <div class="price-tag">${formatPrice(p.price)}</div>
        </div>
      </article>
    `).join('');
  }

  search.oninput = update;
  filter.onchange = update;
  update();
}

document.addEventListener("DOMContentLoaded", renderShop);

