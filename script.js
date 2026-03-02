const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#menu a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");
const copyHint = document.getElementById("copyHint");

copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    copyHint.textContent = "✅ Message copié !";
  } catch {
    copyHint.textContent = "❌ Impossible de copier. Sélectionne le texte manuellement.";
  }
});

const images = document.querySelectorAll(".gallery-img");
const dots = document.querySelectorAll(".gallery-dots .dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    images[index].classList.add("active");
    dot.classList.add("active");
  });
});

const projectImages = document.querySelectorAll(".project-img");
const projectDots = document.querySelectorAll(".project-dots .dot");

projectDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    projectImages.forEach(img => img.classList.remove("active"));
    projectDots.forEach(d => d.classList.remove("active"));

    projectImages[index].classList.add("active");
    dot.classList.add("active");
  });
});