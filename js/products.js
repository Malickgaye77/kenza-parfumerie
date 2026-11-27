/* ============================================================
   CATALOGUE — DONNÉES DE DÉMONSTRATION
   Les produits, prix, descriptions, photos et disponibilités ci-dessous
   sont des EXEMPLES provisoires, pas un stock réel confirmé.
   Pour ajouter / modifier / supprimer : voir README.md
   category : "femme" | "homme" | "mixte"   —   badge : texte ou ""
   image : chemin de la photo (ex. assets/images/mon-parfum.jpg)
   ============================================================ */

window.KENZA_PRODUCTS = [
  // HOMME
  { id: "asad", name: "Asad", category: "homme", price: 20000, image: "assets/images/Homme/asad.jpg", description: "Une fragrance masculine au caractère affirmé.", available: true, badge: "Populaire" },
  { id: "club-de-nuit", name: "Club de Nuit", category: "homme", price: 25000, image: "assets/images/Homme/club de nuit.png", description: "Une fragrance élégante et pleine de caractère.", available: true, badge: "" },
  { id: "fakhar-lattafa", name: "Fakhar Lattafa", category: "homme", price: 17000, image: "assets/images/Homme/fakhar latttafa.webp", description: "Un parfum raffiné aux notes séduisantes.", available: true, badge: "Nouveauté" },
  { id: "khamrah-lattafa", name: "Khamrah Lattafa", category: "homme", price: 18000, image: "assets/images/Homme/Khamrah Lattafa.webp", description: "Une fragrance chaleureuse et gourmande.", available: true, badge: "" },
  { id: "mousuf", name: "Mousuf", category: "homme", price: 8000, image: "assets/images/Homme/mousuf.png", description: "Une fragrance intense et captivante.", available: true, badge: "Coup de cœur" },

  // FEMME
  { id: "amiral-al-arab", name: "Amiral Al Arab", category: "femme", price: 12000, image: "assets/images/Femme/amiral al arab.webp", description: "Une fragrance élégante et délicate.", available: true, badge: "Populaire" },
  { id: "club-de-nuit-intense", name: "Club de Nuit Intense", category: "femme", price: 25000, image: "assets/images/Femme/club de nuit intense.webp", description: "Un parfum au sillage intense et raffiné.", available: true, badge: "" },
  { id: "mousuf-rose", name: "Mousuf Rose", category: "femme", price: 8000, image: "assets/images/Femme/mousuf rose.webp", description: "Une fragrance douce et féminine.", available: true, badge: "Coup de cœur" },
  { id: "musk-mood", name: "Musk Mood", category: "femme", price: 12000, image: "assets/images/Femme/Musk Mood.png", description: "Une fragrance délicate et enveloppante.", available: true, badge: "" },
  { id: "sakeena", name: "Sakeena", category: "femme", price: 18000, image: "assets/images/Femme/sakeena.webp", description: "Un parfum élégant et lumineux.", available: true, badge: "Nouveauté" },
  { id: "yara", name: "Yara", category: "femme", price: 15000, image: "assets/images/Femme/yara.png", description: "Une fragrance douce et gourmande.", available: true, badge: "" },

  // MIXTE
  { id: "badi-al-oud", name: "Badi Al Oud", category: "mixte", price: 135000, image: "assets/images/Mixte/badi al oud.png", description: "Un parfum boisé aux notes profondes.", available: true, badge: "Prestige" },
  { id: "khamrah", name: "Khamrah", category: "mixte", price: 18000, image: "assets/images/Mixte/khamrah.png", description: "Une fragrance chaleureuse et enveloppante.", available: true, badge: "Prestige" },
  { id: "lattafa-oud-mood", name: "Lattafa Oud Mood", category: "mixte", price: 12000, image: "assets/images/Mixte/lattafa oud mood.webp", description: "Un parfum oriental aux accords riches.", available: true, badge: "" },
  { id: "oud-al-malik", name: "Oud Al Malik", category: "mixte", price: 15000, image: "assets/images/Mixte/oud al malik.webp", description: "Une fragrance boisée et élégante.", available: true, badge: "Prestige" }
];

window.KENZA_CATEGORIES = {
  femme: "Femme",
  homme: "Homme",
  mixte: "Mixte"
};


