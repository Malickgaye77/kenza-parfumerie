/* Interface commune : en-tête, pied de page, panier latéral, notifications, cartes produits */
(function () {
  const C = window.KENZA_CONFIG, Cart = window.KenzaCart, CAT = window.KENZA_CATEGORIES;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ic = {
    bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l1 13H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21z"/></svg>'
  };
  const page = document.body.dataset.page || "";
  const navItems = [
    ["accueil", "index.html", "Accueil"], ["parfums", "produits.html", "Nos parfums"],
    ["femme", "produits.html?categorie=femme", "Femme"], ["homme", "produits.html?categorie=homme", "Homme"],
    ["mixte", "produits.html?categorie=mixte", "Mixte"], ["apropos", "a-propos.html", "À propos"], ["contact", "contact.html", "Contact"]
  ];
  const logo = (cls) => '<a class="logo ' + (cls || "") + '" href="index.html" aria-label="' + esc(C.shopName) + ' — Accueil"><span class="logo__name">KENZA</span><span class="logo__sub">PARFUMERIE</span></a>';

  function build() {
    const h = document.getElementById("site-header");
    if (h) h.outerHTML = '<header class="site-header" id="header"><div class="container header__in">' + logo() +
      '<nav class="nav" id="nav" aria-label="Navigation principale"><ul>' +
      navItems.map((n) => '<li><a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a></li>").join("") +
      '</ul></nav><div class="header__actions"><button class="icon-btn" id="cartOpen" aria-label="Ouvrir le panier">' + ic.bag + '<span class="cart-count" id="cartCount">0</span></button>' +
      '<button class="burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav"><span></span><span></span></button></div></div></header>';

    const f = document.getElementById("site-footer");
    if (f) {
      const soc = [["Instagram", C.instagram], ["Facebook", C.facebook]].filter((s) => s[1]).map((s) => '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + s[0] + "</a></li>").join("");
      f.outerHTML = '<footer class="site-footer"><div class="container footer__grid"><div>' + logo("logo--light") +
        '<p class="footer__txt">' + esc(C.slogan) + " Une parfumerie moderne, raffinée et accessible, fondée par " + esc(C.founder) + ".</p></div>" +
        '<div><h2 class="footer__h">Navigation</h2><ul>' + navItems.filter((n) => ["accueil", "parfums", "apropos", "contact"].includes(n[0])).map((n) => '<li><a href="' + n[1] + '">' + n[2] + "</a></li>").join("") + "</ul></div>" +
        '<div><h2 class="footer__h">Contact</h2><ul>' + (C.phone ? "<li>" + esc(C.phone) + "</li>" : "") + (C.address ? "<li>" + esc(C.address) + "</li>" : "") + '<li><a href="contact.html">Nous écrire sur WhatsApp</a></li>' + (C.deliveryZone ? "<li>" + esc(C.deliveryZone) + "</li>" : "") + "</ul></div>" +
        '<div><h2 class="footer__h">Réseaux sociaux</h2><ul>' + soc + "</ul></div></div>" +
        '<div class="container footer__bottom">© ' + new Date().getFullYear() + " " + esc(C.shopName) + ". Tous droits réservés.</div></footer>";
    }
    document.body.insertAdjacentHTML("beforeend",
      '<div class="overlay" id="overlay" hidden></div><aside class="drawer" id="drawer" aria-label="Panier" aria-hidden="true"><div class="drawer__head"><h2>Votre panier</h2><button class="icon-btn" id="cartClose" aria-label="Fermer le panier">' + ic.close + '</button></div>' +
      '<div class="drawer__body" id="cartBody"></div><div class="drawer__foot" id="cartFoot"></div></aside><div class="toast" id="toast" role="status" aria-live="polite"></div>');
  }

  let tt;
  const toast = (m) => { const t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 3200); };

  function renderCart() {
    const items = Cart.items(), n = Cart.count(), el = document.getElementById("cartCount");
    el.textContent = n; el.hidden = n === 0;
    const body = document.getElementById("cartBody"), foot = document.getElementById("cartFoot");
    if (!items.length) {
      body.innerHTML = '<p class="empty-note">Votre panier est vide.<br>Découvrez notre sélection de parfums.</p>';
      foot.innerHTML = '<a class="btn btn--dark" href="produits.html">Découvrir nos parfums</a>'; return;
    }
    body.innerHTML = items.map((l) => { const p = window.KENZA_PRODUCTS.find((x) => x.id === l.id);
      return '<div class="line"><img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" width="64" height="77"><div class="line__info"><a href="produit.html?id=' + esc(p.id) + '">' + esc(p.name) + "</a><span>" + Cart.fmt(p.price) + '</span>' +
        '<div class="qty"><button data-a="dec" data-id="' + esc(p.id) + '" aria-label="Diminuer la quantité">−</button><span>' + l.qty + '</span><button data-a="inc" data-id="' + esc(p.id) + '" aria-label="Augmenter la quantité">+</button></div></div>' +
        '<button class="link-btn" data-a="del" data-id="' + esc(p.id) + '" aria-label="Supprimer ' + esc(p.name) + ' du panier">Supprimer</button></div>'; }).join("");
    foot.innerHTML = '<div class="total"><span>Total</span><strong>' + Cart.fmt(Cart.total()) + '</strong></div><button class="btn btn--gold" id="cartOrder">' + ic.wa + ' Commander sur WhatsApp</button><button class="link-btn" id="cartClear">Vider le panier</button>';
    document.getElementById("cartOrder").onclick = () => Cart.order(Cart.items());
    document.getElementById("cartClear").onclick = () => { Cart.clear(); toast("Panier vidé."); };
  }

  function drawer(open) {
    const d = document.getElementById("drawer"), o = document.getElementById("overlay");
    d.classList.toggle("open", open); d.setAttribute("aria-hidden", String(!open)); o.hidden = !open;
    document.body.classList.toggle("lock", open);
    if (open) document.getElementById("cartClose").focus();
  }

  function card(p) {
    return '<article class="card reveal"><a class="card__img" href="produit.html?id=' + esc(p.id) + '"><img src="' + esc(p.image) + '" alt="Flacon ' + esc(p.name) + '" width="500" height="600" loading="lazy">' +
      (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") + (p.available ? "" : '<span class="badge badge--off">Indisponible</span>') + '</a>' +
      '<div class="card__body"><span class="card__cat">' + esc(CAT[p.category]) + '</span><h3 class="card__name">' + esc(p.name) + '</h3><p class="card__price">' + Cart.fmt(p.price) + '</p>' +
      '<div class="card__actions"><a class="btn btn--line btn--sm" href="produit.html?id=' + esc(p.id) + '">Découvrir</a>' +
      '<button class="btn btn--dark btn--sm" data-order="' + esc(p.id) + '"' + (p.available ? "" : " disabled") + ">Commander</button></div></div></article>";
  }

  function reveal() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  window.KenzaUI = { toast, card, esc, reveal, openCart: () => drawer(true) };

  document.addEventListener("DOMContentLoaded", () => {
    build(); renderCart();
    document.querySelectorAll("[data-config]").forEach((e) => { const v = C[e.dataset.config]; if (v) e.textContent = v; });
    const burger = document.getElementById("burger"), nav = document.getElementById("nav");
    burger.onclick = () => { const o = nav.classList.toggle("open"); burger.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
    nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
    document.getElementById("cartOpen").onclick = () => drawer(true);
    document.getElementById("cartClose").onclick = () => drawer(false);
    document.getElementById("overlay").onclick = () => drawer(false);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") drawer(false); });
    document.getElementById("cartBody").addEventListener("click", (e) => {
      const b = e.target.closest("[data-a]"); if (!b) return;
      const id = b.dataset.id, l = Cart.items().find((x) => x.id === id);
      if (b.dataset.a === "inc") Cart.setQty(id, l.qty + 1); else if (b.dataset.a === "dec") Cart.setQty(id, l.qty - 1); else Cart.remove(id);
    });
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-order]"); if (!b) return;
      if (Cart.add(b.dataset.order)) { toast("Parfum ajouté au panier."); drawer(true); }
    });
    document.addEventListener("cart:change", renderCart);
    window.addEventListener("storage", renderCart);
    const hd = document.getElementById("header");
    const sc = () => hd.classList.toggle("scrolled", window.scrollY > 20); sc(); window.addEventListener("scroll", sc, { passive: true });
    // Cartes de l'accueil
    const feat = document.getElementById("featured");
    if (feat) feat.innerHTML = window.KENZA_PRODUCTS.filter((p) => p.badge).slice(0, 4).map(card).join("");
    // Liens WhatsApp génériques
    document.querySelectorAll("[data-wa]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const l = Cart.waLink("Bonjour " + C.shopName + ", je souhaiterais avoir des informations sur vos parfums.");
      if (l) window.open(l, "_blank", "noopener"); else toast("Le numéro WhatsApp de la boutique n'est pas encore configuré.");
    }));
    document.querySelectorAll("[data-demo]").forEach((e) => { e.hidden = !C.demoCatalog; });
    document.querySelectorAll("[data-config-img]").forEach((e) => { if (C.founderImage) e.src = C.founderImage; });
    reveal();
  });
})();

