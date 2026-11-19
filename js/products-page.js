/* Catalogue : recherche, filtre, tri */
document.addEventListener("DOMContentLoaded", () => {
  const P = window.KENZA_PRODUCTS, grid = document.getElementById("grid"), count = document.getElementById("count"), empty = document.getElementById("empty");
  const q = document.getElementById("search"), cat = document.getElementById("cat"), sort = document.getElementById("sort");
  const url = new URLSearchParams(location.search);
  if (["femme", "homme", "mixte"].includes(url.get("categorie"))) cat.value = url.get("categorie");
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  function render() {
    let list = P.filter((p) => (cat.value === "tous" || p.category === cat.value) && norm(p.name).includes(norm(q.value.trim())));
    if (sort.value === "asc") list.sort((a, b) => a.price - b.price); else if (sort.value === "desc") list.sort((a, b) => b.price - a.price);
    grid.innerHTML = list.map(KenzaUI.card).join("");
    count.textContent = list.length + (list.length > 1 ? " parfums trouvés" : " parfum trouvé");
    empty.hidden = list.length > 0; KenzaUI.reveal();
  }
  [q, cat, sort].forEach((e) => e.addEventListener("input", render));
  document.getElementById("reset").onclick = () => { q.value = ""; cat.value = "tous"; sort.value = "defaut"; render(); };
  render();
});
