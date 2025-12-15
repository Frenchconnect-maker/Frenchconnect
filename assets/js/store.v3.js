const STORE = [

/* ================= FLEURS ================= */
{
id:"flower-gelato",
name:"Gelato #41 CBD – USA",
price:15,
image:"assets/images/flower1.jpg",
category:"fleurs",
badge:"Indoor USA",
desc:"Fleur premium cultivée aux États-Unis par des producteurs renommés.",
options: grammages()
},
{
id:"flower-ogkush",
name:"OG Kush CBD – California",
price:15,
image:"assets/images/flower2.jpg",
category:"fleurs",
badge:"Top Shelf",
desc:"OG Kush CBD iconique venue de Californie.",
options: grammages()
},
{
id:"flower-zkittlez",
name:"Zkittlez CBD",
price:15,
image:"assets/images/flower3.jpg",
category:"fleurs",
badge:"Exotic",
desc:"Explosion aromatique fruitée, sélection premium USA.",
options: grammages()
},
{
id:"flower-sour",
name:"Sour Diesel CBD",
price:15,
image:"assets/images/flower4.jpg",
category:"fleurs",
badge:"Classic USA",
desc:"Profil diesel intense, génétique mythique américaine.",
options: grammages()
},
{
id:"flower-banana",
name:"Banana Cream CBD",
price:15,
image:"assets/images/flower5.jpg",
category:"fleurs",
badge:"Indoor",
desc:"Notes sucrées et crémeuses.",
options: grammages()
},

/* ================= HASH / RÉSINES ================= */
{
id:"hash-ice",
name:"Ice-O-Lator CBD",
price:14,
image:"assets/images/hash1.jpg",
category:"resines",
badge:"Premium Hash",
desc:"Extraction à froid, texture grasse.",
options: grammages()
},
{
id:"hash-static",
name:"Static Hash CBD",
price:14,
image:"assets/images/hash2.jpg",
category:"resines",
badge:"Ultra Clean",
desc:"Hash ultra pur, qualité luxe.",
options: grammages()
},
{
id:"hash-dry",
name:"Dry Sift CBD",
price:14,
image:"assets/images/hash3.jpg",
category:"resines",
badge:"Traditional",
desc:"Méthode traditionnelle haut de gamme.",
options: grammages()
},
{
id:"hash-royal",
name:"Royal Hash CBD",
price:14,
image:"assets/images/hash4.jpg",
category:"resines",
badge:"Luxury",
desc:"Sélection premium en série limitée.",
options: grammages()
},
{
id:"hash-mousse",
name:"Mousseux CBD",
price:14,
image:"assets/images/hash5.jpg",
category:"resines",
badge:"Soft",
desc:"Texture souple, goût puissant.",
options: grammages()
},

/* ================= EXTRAITS ================= */
{
id:"extract-rosin",
name:"Rosin Gold Press CBD",
price:30,
image:"assets/images/extract1.jpg",
category:"extraits",
badge:"Solventless",
desc:"Rosin pressé à chaud sans solvants.",
options: grammages()
},
{
id:"extract-wax",
name:"Wax CBD Premium",
price:30,
image:"assets/images/extract2.jpg",
category:"extraits",
badge:"USA",
desc:"Texture wax onctueuse.",
options: grammages()
},
{
id:"extract-shatter",
name:"Shatter CBD",
price:30,
image:"assets/images/extract3.jpg",
category:"extraits",
badge:"Glass",
desc:"Aspect cristallin, pureté élevée.",
options: grammages()
},
{
id:"extract-live",
name:"Live Resin CBD",
price:30,
image:"assets/images/extract4.jpg",
category:"extraits",
badge:"Fresh Frozen",
desc:"Terpènes frais conservés.",
options: grammages()
},
{
id:"extract-diamonds",
name:"CBD Diamonds",
price:35,
image:"assets/images/extract5.jpg",
category:"extraits",
badge:"Ultra Luxe",
desc:"Cristaux CBD haute pureté.",
options: grammages()
}

];

/* ===== GRAMMAGES ===== */
function grammages(){
return [
{ id:"1g", label:"1 g", price:15 },
{ id:"2g", label:"2 g", price:28 },
{ id:"5g", label:"5 g", price:65 },
{ id:"10g", label:"10 g", price:120 },
{ id:"25g", label:"25 g", price:280 },
{ id:"50g", label:"50 g", price:520 },
{ id:"100g", label:"100 g", price:950 }
];
}


