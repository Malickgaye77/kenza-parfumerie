/* Fiche produit (produit.html?id=...) */
document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id"), p = window.KENZA_PRODUCTS.find((x) => x.id === id), root = document.getElementById("detail");
  const E = KenzaUI.esc, Cart = KenzaCart;
  if (!p) { root.innerHTML = '<div class="empty"><h1 class="h2">Parfum introuvable</h1><p>Ce parfum n\'existe pas ou n\'est plus disponible.</p><a class="btn btn--dark" href="produits.html">Voir tous les parfums</a></div>'; return; }
  document.title = p.name + " | KENZA PARFUMERIE";
  root.innerHTML = '<div class="detail__img"><img src="' + E(p.image) + '" alt="Flacon ' + E(p.name) + '" width="500" height="600"></div><div class="detail__txt">' +
    '<span class="eyebrow">' + E(KENZA_CATEGORIES[p.category]) + '</span><h1 class="h2">' + E(p.name) + '</h1><p class="detail__price">' + Cart.fmt(p.price) + '</p><div class="rule"></div><p class="note" ' + (KENZA_CONFIG.demoCatalog ? '' : 'hidden') + '>Fiche de démonstration : prix et disponibilité à confirmer avec la boutique.</p><p>' + E(p.description) + '</p>' +
    '<p class="stock ' + (p.available ? "ok" : "off") + '">' + (p.available ? "● En stock" : "● Actuellement indisponible") + '</p>' +
    '<div class="detail__buy"><label for="qty">Quantité</label><div class="qty qty--lg"><button type="button" id="m" aria-label="Diminuer la quantité">−</button><input id="qty" type="number" min="1" max="99" value="1" inputmode="numeric"><button type="button" id="pl" aria-label="Augmenter la quantité">+</button></div></div>' +
    '<div class="detail__btns"><button class="btn btn--dark" id="add"' + (p.available ? "" : " disabled") + '>Ajouter au panier</button><button class="btn btn--gold" id="wa"' + (p.available ? "" : " disabled") + '>Commander sur WhatsApp</button></div></div>';
  const qty = document.getElementById("qty"), get = () => Math.max(1, Math.min(99, parseInt(qty.value, 10) || 1));
  document.getElementById("m").onclick = () => qty.value = Math.max(1, get() - 1);
  document.getElementById("pl").onclick = () => qty.value = Math.min(99, get() + 1);
  qty.onchange = () => qty.value = get();
  document.getElementById("add").onclick = () => { Cart.add(p.id, get()); KenzaUI.toast("Parfum ajouté au panier."); KenzaUI.openCart(); };
  document.getElementById("wa").onclick = () => Cart.order([{ id: p.id, qty: get() }]);
});

