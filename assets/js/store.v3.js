// ====== CATALOGUE PRODUITS (avec options de grammage) ======
const STORE = [
  {
    id: "flr-french31",
    name: "French Connect 31 - Fleurs CBD",
    price: 12.90,
    image: "assets/images/hero.jpg",
    category: "fleurs",
    badge: "Indoor",
    desc: "Fleurs CBD au profil aromatique marqué. Lot limité. THC < 0,3 %.",
    payment_link: ""
  },
  {
    id: "rosin-gold",
    name: "Rosin CBD – Gold Press",
    price: 29.90,
    image: "assets/images/hero.jpg",
    category: "extraits",
    badge: "Rosin",
    desc: "Extraction sans solvants (pression à chaud). Texture pure et aromatique.",
    payment_link: ""
  },
  {
    id: "huile-10",
    name: "Huile CBD 10%",
    price: 24.90,
    image: "assets/images/hero.jpg",
    category: "huiles",
    badge: "Full-spectrum",
    desc: "Huile CBD 10% avec spectre complet. Usage cosmétique. THC < 0,3 %.",
    payment_link: ""
  },
  // ====== TON PRODUIT AVEC OPTIONS DE GRAMMAGE ======
  {
    id: "frenchconnect-smellz-bananacake-cakeberry-rosin",
    name: "FrenchConnect x Smellz – Bananacake / Cakeberry Rosin CBD",
    // 'price' sert d'affichage par défaut sur les cartes (ici le 1g)
    price: 40.00,
    image: "assets/images/cakeberry-rosin.jpg",
    category: "extraits",
    badge: "Rosin Ultra Premium",
    desc: "Issu de la collaboration exclusive FrenchConnect x Smellz, ce Rosin CBD Bananacake / Cakeberry est un coup de cœur 2025. Fruit de près de trois mois de travail, il offre une texture pure et un profil aromatique d’exception. Notes gourmandes et fruitées, terpènes 100 % naturels, extraction sans solvants. Série limitée. THC < 0,3 %.",
    // options de grammage
    options: [
      { id: "0_5g", label: "0,5 g", price: 20.00, payment_link: "" },
      { id: "1g",   label: "1 g",   price: 40.00, payment_link: "" }, // défaut
      { id: "2g",   label: "2 g",   price: 80.00, payment_link: "" }
    ],
    payment_link: "" // peut rester vide si tu veux forcer le panier
  }
];

// ====== HELPERS ======
const formatPrice = (n) => n.toFixed(2).replace('.', ',') + ' €';
const getOption = (p, optId) => (p.options || []).find(o => o.id === optId);
const defaultOptionId = (p) => (p.options && p.options[0]?.id) || null;
const priceFor = (p, optId) => {
  const o = getOption(p, optId);
  return o ? o.price : p.price;
};

// Panier en localStorage
function getCart(){ try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e){ return []; } }
function setCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){
  const cart = getCart();
  const count = cart.reduce((s, l) => s + l.qty, 0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = count;
}
function findProduct(id){ return STORE.find(p => p.id === id); }
function searchProducts(q, cat){
  q = (q||'').toLowerCase();
  return STORE.filter(p => {
    const okQ = !q || (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    const okC = !cat || p.category === cat;
    return okQ && okC;
  });
}

// ====== HOME ======
function renderHome(){
  const box = document.getElementById('home-collection');
  if(!box) return;
  box.innerHTML = STORE.slice(0, 3).map(card).join('');
}

// ====== CARTE PRODUIT (liste) ======
function card(p){
  const base = p.options?.length ? p.options[0].price : p.price;
  return `
  <article class="card">
    <a href="product.html?id=${p.id}">
      <img class="thumb" src="${p.image}" alt="${p.name}">
    </a>
    <div class="pad">
      <div class="pill">${p.category}</div>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="price-tag">à partir de ${formatPrice(base)}</div>
      <div class="btn-row">
        <a class="btn" href="product.html?id=${p.id}">Choisir le grammage</a>
      </div>
    </div>
  </article>`;
}

// ====== PANIER ======
function addToCart(id, qty, optId){
  const p = findProduct(id);
  if(!p) return;
  const optionId = optId || defaultOptionId(p); // pour produits avec options
  const key = optionId ? `${id}__${optionId}` : id;

  const cart = getCart();
  const line = cart.find(l => l.key === key);
  if(line) line.qty += qty;
  else cart.push({ key, id, optionId, qty });
  setCart(cart);
  alert('Ajouté au panier ✔');
}

function removeFromCart(key){
  const cart = getCart().filter(l => l.key !== key);
  setCart(cart);
  renderCart();
}

function setQty(key, qty){
  const cart = getCart();
  const line = cart.find(l => l.key === key);
  if(!line) return;
  line.qty = Math.max(1, qty|0);
  setCart(cart);
  renderCart();
}

function renderCart(){
  const box = document.getElementById('cart-items');
  if(!box) return;
  const cart = getCart();
  if(cart.length === 0){
    box.innerHTML = '<p>Votre panier est vide.</p>';
    const t = document.getElementById('cart-total'); if(t) t.textContent = formatPrice(0);
    return;
  }
  let total = 0;
  box.innerHTML = cart.map(l => {
    const p = findProduct(l.id);
    const price = priceFor(p, l.optionId);
    const lineTotal = price * l.qty;
    total += lineTotal;
    const optLabel = l.optionId ? (getOption(p, l.optionId)?.label || '') : '';
    return `
      <div class="cart-line">
        <img src="${p.image}" alt="${p.name}">
        <div>
          <div><strong>${p.name}</strong></div>
          <div class="muted">${p.category} • ${p.badge}${optLabel ? ' • ' + optLabel : ''}</div>
        </div>
        <div>${formatPrice(price)}</div>
        <div>
          <input type="number" min="1" value="${l.qty}" onchange="setQty('${l.key}', this.value)">
        </div>
        <div><button class="btn ghost" onclick="removeFromCart('${l.key}')">Retirer</button></div>
      </div>`;
  }).join('');
  const t = document.getElementById('cart-total'); if(t) t.textContent = formatPrice(total);
  const btn = document.getElementById('checkout-btn');
  if(btn){
    btn.onclick = function(e){
      e.preventDefault();
      startCheckout();
    };
  }
}

// ====== CHECKOUT ======
function startCheckout(){
  const cart = getCart();
  if(cart.length === 1){
    const { id, qty, optionId } = cart[0];
    const p = findProduct(id);
    // si tu ajoutes payment_link sur l'option, on l'utilise en priorité
    const opt = optionId ? getOption(p, optionId) : null;
    const link = (opt && opt.payment_link) || p.payment_link;
    if(link && link.startsWith('http')){
      const url = link + (qty>1 ? ('?quantity=' + qty) : '');
      window.location.href = url; return;
    }
  }
  alert('Pour un vrai checkout multi-produit, raccorde Stripe (server) ou utilise Shopify.');
}

// ====== PAGE PRODUIT ======
function bootProductPage(){
  const url = new URL(location.href);
  const id = url.searchParams.get('id');
  const p = findProduct(id) || STORE[0];

  // infos
  document.getElementById('p-image').src = p.image;
  document.getElementById('p-name').textContent = p.name;
  document.getElementById('p-desc').textContent = p.desc;
  document.getElementById('p-cat').textContent = p.category;
  document.getElementById('p-badge').textContent = p.badge;

  // options de grammage
  const optSelect = document.getElementById('option');
  let currentOpt = defaultOptionId(p);
  if(p.options && optSelect){
    optSelect.innerHTML = p.options.map(o => `<option value="${o.id}">${o.label} — ${formatPrice(o.price)}</option>`).join('');
    optSelect.value = currentOpt;
    optSelect.onchange = () => {
      currentOpt = optSelect.value;
      document.getElementById('p-price').textContent = formatPrice(priceFor(p, currentOpt));
    };
  }
  document.getElementById('p-price').textContent = formatPrice(priceFor(p, currentOpt));

  // actions
  document.getElementById('add-to-cart').onclick = () => {
    const qty = parseInt(document.getElementById('qty').value || '1', 10);
    addToCart(p.id, qty, currentOpt);
  };
  document.getElementById('buy-now').onclick = () => {
    const opt = currentOpt ? getOption(p, currentOpt) : null;
    const link = (opt && opt.payment_link) || p.payment_link;
    if(link && link.startsWith('http')){
      const qty = parseInt(document.getElementById('qty').value || '1', 10);
      const url = link + (qty>1 ? ('?quantity=' + qty) : '');
      location.href = url;
    } else {
      alert('Ajoute un lien Stripe (sur l’option ou le produit) pour activer "Acheter maintenant".');
    }
  };
}

// ====== PAGE BOUTIQUE ======
function bootShopPage(){
  const grid = document.getElementById('product-grid');
  if(!grid) return;
  const input = document.getElementById('search');
  const select = document.getElementById('category-filter');
  function rerender(){
    const results = searchProducts(input.value, select.value);
    grid.innerHTML = results.map(card).join('');
  }
  input.oninput = rerender;
  select.onchange = rerender;
  rerender();
}

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderHome();
  bootShopPage();
  renderCart();
  if(document.getElementById('product-page')) bootProductPage();
});
