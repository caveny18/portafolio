// Animaciones al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade, .slide").forEach(el => {
  observer.observe(el);
});

// Cambio de idioma
let currentLang = "es";

const toggleBtn = document.getElementById("langToggle");

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  toggleBtn.textContent = currentLang === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});

// Inicializar textos
document.querySelectorAll("[data-es]").forEach(el => {
  el.textContent = el.dataset.es;
});
