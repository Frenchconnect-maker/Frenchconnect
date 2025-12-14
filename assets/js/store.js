// Product catalog
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
  {
    id: "frenchconnect-smellz-bananacake-cakeberry-rosin",
    name: "FrenchConnect x Smellz – Bananacake / Cakeberry Rosin CBD",
    price: 40.00,
    image: "assets/images/cakeberry-rosin.jpg",
    category: "extraits",
    badge: "Rosin Ultra Premium",
    desc: "Issu de la collaboration exclusive FrenchConnect x Smellz, ce Rosin CBD Bananacake / Cakeberry est un coup de cœur 2025. Fruit de près de trois mois de travail, il offre une texture pure et un profil aromatique d’exception. Notes gourmandes et fruitées, terpènes 100 % naturels, extraction sans solvants. Série limitée. THC < 0,3 %.",
    payment_link: ""
  }
];

// ----- NE TOUCHE PLUS À CE QUI EST EN DESSOUS -----

const formatPrice = (n) => n.toFixed(2).replace('.', ',') + ' €';

function getCart(){
  try { return JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e){ return []; }
}
function setCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){
  const cart = getCart();
  const count = cart.reduce((sum, l) => sum + l.qty, 0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = count;
}
function findProduct(id){ return STORE.find(p => p.id === id); }
