// ====== ELEMENTS ======
const overlay = document.getElementById("overlay");
const drawerTitle = document.getElementById("drawerTitle");
const drawerBody = document.getElementById("drawerBody");
const closeDrawerBtn = document.getElementById("closeDrawer");

const chips = document.querySelectorAll(".chip");
const sections = document.querySelectorAll(".menuSection");

// ====== TITRES ======
const titles = {
  formules: "Formules Brunch",
  brunch: "Brunch & Lunch",
  burgers: "Burgers",
  pancakes: "Pancakes",
  painperdu: "Pain perdu",
  crepes: "Crêpes & Gaufres",
  boissons: "Boissons",
};

// ====== HELPERS ======
function openOverlay() {
  overlay.classList.add("isOpen");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  overlay.classList.remove("isOpen");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setActiveChip(key) {
  chips.forEach((c) => c.classList.remove("active"));
  const btn = Array.from(chips).find((c) => c.dataset.open === key);
  if (btn) btn.classList.add("active");
}

function showSection(key) {
  sections.forEach((s) => s.classList.remove("isActive"));

  const section = Array.from(sections).find((s) => s.dataset.section === key);
  if (!section) return;

  section.classList.add("isActive");
  drawerTitle.textContent = titles[key] || "Menu";

  drawerBody.scrollTo({ top: 0, behavior: "smooth" });

  animateItems(section);
}

function animateItems(section) {
  const items = section.querySelectorAll(".menuItem");

  items.forEach((it) => {
    it.classList.remove("animate");
    void it.offsetWidth; // reflow
  });

  items.forEach((it, idx) => {
    setTimeout(() => it.classList.add("animate"), 70 * idx);
  });
}

// ====== EVENTS ======
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const key = chip.dataset.open;
    if (!key) return;

    setActiveChip(key);
    openOverlay();
    showSection(key);
  });
});

closeDrawerBtn.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("isOpen")) closeOverlay();
});

// ====== QR CODE TABLE ======
const params = new URLSearchParams(window.location.search);
const table = params.get("table");
if (table) {
  const el = document.getElementById("table-number");
  if (el) el.textContent = `Table ${table}`;
}

// ====== IMAGE FADE-IN (premium) ======
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  if (!img.complete) img.style.opacity = "0";
  img.addEventListener("load", () => (img.style.opacity = "1"));
  if (img.complete) img.style.opacity = "1";
});

// ====== AUTO OPEN (option) ======
// index.html?menu=burgers
const autoMenu = params.get("menu");
if (autoMenu && titles[autoMenu]) {
  setActiveChip(autoMenu);
  openOverlay();
  showSection(autoMenu);
}
