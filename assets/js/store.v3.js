const STORE = [
/* ================= FLEURS ================= */
{
id:"flower-gelato",
name:"Gelato #41 CBD – USA",
category:"fleurs",
badge:"Indoor USA",
image:"assets/images/flower1.jpg",
desc:"Fleur premium cultivée aux États-Unis par des producteurs renommés. Arômes crémeux et puissants.",
options: grammages()
},
{
id:"flower-ogkush",
name:"OG Kush CBD – California",
category:"fleurs",
badge:"Top Shelf",
image:"assets/images/flower2.jpg",
desc:"OG Kush CBD iconique venue de Californie. Terpènes riches et saveur authentique.",
options: grammages()
},
{
id:"flower-banana",
name:"Banana Cream CBD",
category:"fleurs",
badge:"Exotic",
image:"assets/images/flower3.jpg",
desc:"Notes sucrées et fruitées, sélection premium USA.",
options: grammages()
},
{
id:"flower-zkittlez",
name:"Zkittlez CBD",
category:"fleurs",
badge:"Indoor",
image:"assets/images/flower4.jpg",
desc:"Explosion aromatique fruitée, fleur indoor haut de gamme.",
options: grammages()
},
{
id:"flower-sour",
name:"Sour Diesel CBD",
category:"fleurs",
badge:"Classic USA",
image:"assets/images/flower5.jpg",
desc:"Profil diesel intense, génétique mythique américaine.",
options: grammages()
},

/* ================= RÉSINES / HASH ================= */
{
id:"hash-ice",
name:"Ice-O-Lator CBD",
category:"resines",
badge:"Premium Hash",
image:"assets/images/hash1.jpg",
desc:"Extraction à froid, texture grasse et arômes profonds.",
options: grammages()
},
{
id:"hash-dry",
name:"Dry Sift CBD",
category:"resines",
badge:"Traditional",
image:"assets/images/hash2.jpg",
desc:"Tamisage traditionnel, qualité supérieure.",
options: grammages()
},
{
id:"hash-static",
name:"Static Hash CBD",
category:"resines",
badge:"Ultra Clean",
image:"assets/images/hash3.jpg",
desc:"Hash ultra pur issu de la technologie Static.",
options: grammages()
},
{
id:"hash-mousse",
name:"Mousseux Premium CBD",
category:"resines",
badge:"Soft",
image:"assets/images/hash4.jpg",
desc:"Texture souple, goût rond et puissant.",
options: grammages()
},
{
id:"hash-royal",
name:"Royal Hash CBD",
category:"resines",
badge:"Luxury",
image:"assets/images/hash5.jpg",
desc:"Sélection luxe, production limitée.",
options: grammages()
},

/* ================= EXTRAITS ================= */
{
id:"rosin-gold",
name:"Rosin Gold Press CBD",
category:"extraits",
badge:"Solventless",
image:"assets/images/extract1.jpg",
desc:"Rosin CBD pressé à chaud sans solvants.",
options: grammages()
},
{
id:"wax",
name:"Wax CBD Premium",
category:"extraits",
badge:"USA",
image:"assets/images/extract2.jpg",
desc:"Texture wax onctueuse, forte concentration.",
options: grammages()
},
{
id:"shatter",
name:"Shatter CBD",
category:"extraits",
badge:"Glass",
image:"assets/images/extract3.jpg",
desc:"Aspect cristallin, pureté maximale.",
options: grammages()
},
{
id:"live-resin",
name:"Live Resin CBD",
category:"extraits",
badge:"Fresh Frozen",
image:"assets/images/extract4.jpg",
desc:"Terpènes frais conservés après récolte.",
options: grammages()
},
{
id:"diamonds",
name:"CBD Diamonds",
category:"extraits",
badge:"Ultra Luxe",
image:"assets/images/extract5.jpg",
desc:"Cristaux CBD haute pureté.",
options: grammages()
}
];

function grammages(){
return [
{label:"1 g",price:15},
{label:"2 g",price:28},
{label:"5 g",price:65},
{label:"10 g",price:120},
{label:"25 g",price:280},
{label:"50 g",price:520},
{label:"100 g",price:950}
];
}

