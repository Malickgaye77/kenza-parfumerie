/* ============================================================
   CATALOGUE — DONNÉES DE DÉMONSTRATION
   Les produits, prix, descriptions, photos et disponibilités ci-dessous
   sont des EXEMPLES provisoires, pas un stock réel confirmé.
   Pour ajouter / modifier / supprimer : voir README.md
   category : "femme" | "homme" | "mixte"   —   badge : texte ou ""
   image : chemin de la photo (ex. assets/images/mon-parfum.jpg)
   ============================================================ */
window.KENZA_PRODUCTS = [
  { id: "dior-sauvage", name: "Dior Sauvage", category: "homme", price: 68000, image: "assets/images/dior-sauvage.svg", description: "Une fragrance fraîche et épicée, signature d'un homme libre et affirmé. Description provisoire.", available: true, badge: "Populaire" },
  { id: "bleu-chanel", name: "Bleu de Chanel", category: "homme", price: 75000, image: "assets/images/bleu-chanel.svg", description: "Un sillage boisé et aromatique, élégant et intemporel. Description provisoire.", available: true, badge: "" },
  { id: "ysl-y", name: "Yves Saint Laurent Y", category: "homme", price: 65000, image: "assets/images/ysl-y.svg", description: "Une eau fraîche et moderne aux accents lumineux. Description provisoire.", available: true, badge: "Nouveauté" },
  { id: "jpg-le-male", name: "Jean Paul Gaultier Le Male", category: "homme", price: 60000, image: "assets/images/jpg-le-male.svg", description: "Un parfum gourmand et séducteur, au caractère marqué. Description provisoire.", available: false, badge: "" },
  { id: "paco-1-million", name: "Paco Rabanne 1 Million", category: "homme", price: 58000, image: "assets/images/paco-1-million.svg", description: "Une fragrance chaude et ambrée qui ne passe pas inaperçue. Description provisoire.", available: true, badge: "Coup de cœur" },
  { id: "la-vie-est-belle", name: "Lancôme La Vie Est Belle", category: "femme", price: 70000, image: "assets/images/la-vie-est-belle.svg", description: "Un parfum gourmand et lumineux, célébrant la joie de vivre. Description provisoire.", available: true, badge: "Populaire" },
  { id: "dior-jadore", name: "Dior J'adore", category: "femme", price: 78000, image: "assets/images/dior-jadore.svg", description: "Un bouquet floral raffiné et féminin. Description provisoire.", available: true, badge: "" },
  { id: "coco-mademoiselle", name: "Chanel Coco Mademoiselle", category: "femme", price: 82000, image: "assets/images/coco-mademoiselle.svg", description: "Une fragrance orientale fraîche, élégante et audacieuse. Description provisoire.", available: true, badge: "Coup de cœur" },
  { id: "ysl-libre", name: "Yves Saint Laurent Libre", category: "femme", price: 72000, image: "assets/images/ysl-libre.svg", description: "Une signature florale et solaire pour les femmes libres. Description provisoire.", available: true, badge: "" },
  { id: "good-girl", name: "Carolina Herrera Good Girl", category: "femme", price: 69000, image: "assets/images/good-girl.svg", description: "Un parfum envoûtant, entre douceur et caractère. Description provisoire.", available: false, badge: "Nouveauté" },
  { id: "tom-ford-oud-wood", name: "Tom Ford Oud Wood", category: "mixte", price: 135000, image: "assets/images/tom-ford-oud-wood.svg", description: "Un bois précieux, riche et profond, à partager. Description provisoire.", available: true, badge: "Prestige" },
  { id: "baccarat-rouge-540", name: "Baccarat Rouge 540", category: "mixte", price: 150000, image: "assets/images/baccarat-rouge-540.svg", description: "Un sillage ambré, floral et lumineux, devenu iconique. Description provisoire.", available: true, badge: "Prestige" }
];
window.KENZA_CATEGORIES = { femme: "Femme", homme: "Homme", mixte: "Mixte" };

