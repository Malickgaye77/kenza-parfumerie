# KENZA PARFUMERIE — site vitrine

Site statique (HTML5, CSS3, JavaScript vanilla) — aucun backend, aucun paiement en ligne. Les commandes sont envoyées sur WhatsApp.

## Structure
- `index.html`, `produits.html`, `produit.html?id=…`, `a-propos.html`, `contact.html`
- `css/` : `style.css`, `responsive.css`, `animations.css`
- `js/` : `config.js` (coordonnées), `products.js` (catalogue), `cart.js` (panier/WhatsApp), `main.js` (en-tête, pied de page, panier latéral), `products-page.js`, `product-page.js`, `contact-page.js`
- `assets/images/` (visuels), `assets/logo/logo.svg`, `favicon.svg`

## Configurer WhatsApp et les coordonnées
Tout se règle dans **`js/config.js`** : nom, fondatrice, slogan, téléphone, adresse, Instagram, Facebook et `whatsappNumber`.
Le numéro s'écrit au format international **sans `+` ni espaces** (ex. `221XXXXXXXXX`). Tant qu'il est vide, un message d'information s'affiche à la place de l'ouverture de WhatsApp.

## Ajouter / modifier / supprimer un parfum (`js/products.js`)
- **Ajouter** : copiez une ligne du tableau `KENZA_PRODUCTS` et changez `id` (unique, sans espace), `name`, `category` (`femme`, `homme` ou `mixte`), `price` (nombre en FCFA), `image`, `description`, `available` (`true`/`false`), `badge` (texte ou `""`).
- **Modifier** : changez les valeurs de la ligne concernée.
- **Supprimer** : supprimez la ligne entière.
- Images : déposez vos photos (JPG/WebP, ~800×960 px, compressées) dans `assets/images/` et indiquez le chemin. Les 12 produits actuels (parfums connus, prix fictifs) et leurs visuels sont des **exemples à remplacer**. Vous pouvez aussi remplacer `hero.svg`, `editorial.svg`, `fondatrice.svg`, `femme-1.svg`, etc.
- Mettre `demoCatalog: false` dans config.js retire les mentions « démonstration ». La photo de la fondatrice se change via `founderImage` dans config.js. Les badges « Populaire », « Nouveauté », etc. : les 4 premiers produits avec un badge s'affichent sur l'accueil.

## Tester en local
Ouvrez le dossier et lancez un serveur statique, par exemple `python -m http.server 8000` puis http://localhost:8000.

## Publier sur Netlify
1. Poussez le dossier sur GitHub (`git init`, `git add .`, `git commit`, `git remote add origin …`, `git push`).
2. Sur netlify.com : « Add new site » → « Import from Git » → choisissez le dépôt. Commande de build : vide ; dossier de publication : `.`
3. Ou glissez-déposez le dossier dans Netlify Drop. Vercel fonctionne de la même manière.

## À compléter
Vraie page Facebook (`facebook` dans config.js), compte Instagram (`instagram`, vide = masqué), vrais produits et photos, photo de la fondatrice, domaine (balises Open Graph : ajouter une URL absolue d'image après mise en ligne).

