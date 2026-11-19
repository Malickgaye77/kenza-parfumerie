/* Page contact : coordonnées issues de config.js + formulaire vers WhatsApp */
document.addEventListener("DOMContentLoaded", () => {
  const C = KENZA_CONFIG, E = KenzaUI.esc, rows = [];
  const todo = '<span class="note">À renseigner dans js/config.js</span>';
  const link = (u, t) => u ? '<a href="' + E(u) + '" target="_blank" rel="noopener">' + t + "</a>" : todo;
  const wa = (C.whatsappNumber || "").replace(/\D/g, "");
  rows.push(["WhatsApp", wa ? '<a href="https://wa.me/' + wa + '" target="_blank" rel="noopener">+' + wa + "</a>" : todo]);
  rows.push(["Téléphone", C.phone ? '<a href="tel:' + E(C.phone.replace(/[^\d+]/g, "")) + '">' + E(C.phone) + "</a>" : todo]);
  rows.push(["Localisation", E(C.address || "") || todo]);
  rows.push(["Zone de livraison", E(C.deliveryZone || "") || todo]);
  if (C.instagram) rows.push(["Instagram", link(C.instagram, "Voir notre Instagram")]);
  if (C.facebook) rows.push(["Facebook", link(C.facebook, "Voir notre Facebook")]);
  document.getElementById("info").innerHTML = rows.map((r) => "<li><b>" + r[0] + "</b><span>" + r[1] + "</span></li>").join("");
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const n = document.getElementById("nom").value.trim(), m = document.getElementById("msg").value.trim();
    document.getElementById("e1").textContent = n ? "" : "Veuillez indiquer votre nom.";
    document.getElementById("e2").textContent = m ? "" : "Veuillez saisir votre message.";
    if (!n || !m) return;
    const l = KenzaCart.waLink("Bonjour " + C.shopName + ",\n\n" + m + "\n\n" + n);
    if (l) window.open(l, "_blank", "noopener"); else KenzaUI.toast("Le numéro WhatsApp de la boutique n'est pas encore configuré.");
  });
});

