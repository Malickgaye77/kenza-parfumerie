/* Panier : localStorage + commande WhatsApp */
(function () {
  const KEY = "kenza_panier_v1";
  const C = window.KENZA_CONFIG;
  const fmt = (n) => new Intl.NumberFormat("fr-FR").format(n).replace(/\u202f/g, " ") + " " + C.currency;
  const find = (id) => window.KENZA_PRODUCTS.find((p) => p.id === id);
  const load = () => {
    try {
      const a = JSON.parse(localStorage.getItem(KEY));
      return Array.isArray(a) ? a.filter((l) => find(l.id) && l.qty > 0) : [];
    } catch (e) { return []; }
  };
  const save = (items) => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} document.dispatchEvent(new CustomEvent("cart:change")); };

  const Cart = {
    fmt,
    items: load,
    count: () => load().reduce((s, l) => s + l.qty, 0),
    total: () => load().reduce((s, l) => s + l.qty * find(l.id).price, 0),
    add(id, qty = 1) {
      const p = find(id); if (!p || !p.available) return false;
      const items = load(), l = items.find((x) => x.id === id);
      if (l) l.qty = Math.min(99, l.qty + qty); else items.push({ id, qty });
      save(items); return true;
    },
    setQty(id, qty) {
      let items = load();
      if (qty <= 0) items = items.filter((l) => l.id !== id); else items.forEach((l) => { if (l.id === id) l.qty = Math.min(99, qty); });
      save(items);
    },
    remove(id) { save(load().filter((l) => l.id !== id)); },
    clear() { save([]); },
    waLink(text) {
      const n = (C.whatsappNumber || "").replace(/\D/g, "");
      return n ? "https://wa.me/" + n + "?text=" + encodeURIComponent(text) : "";
    },
    message(items) {
      let m = "Bonjour " + C.shopName + ",\n\nJe souhaite passer une commande :\n\n";
      items.forEach((l, i) => {
        const p = find(l.id);
        m += (i + 1) + ". Parfum : " + p.name + "\n   Quantité : " + l.qty + "\n   Prix : " + fmt(p.price) + "\n\n";
      });
      const t = items.reduce((s, l) => s + l.qty * find(l.id).price, 0);
      return m + "Total : " + fmt(t) + "\n\nMerci de me confirmer la disponibilité et les modalités de livraison.";
    },
    // Ouvre WhatsApp ; renvoie false si numéro manquant
    order(items) {
      const link = Cart.waLink(Cart.message(items));
      if (!link) { window.KenzaUI.toast("Le numéro WhatsApp de la boutique n'est pas encore configuré."); return false; }
      window.open(link, "_blank", "noopener"); return true;
    }
  };
  window.KenzaCart = Cart;
})();
