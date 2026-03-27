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

// Aucun JavaScript n'est nécessaire pour le formulaire Formspree

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

let robotSlideIndex = 0;

function showRobotSlide(index) {
  const carousel = document.querySelector(".robot-carousel");
  const slides = carousel.querySelectorAll(".robot-slide");
  const dots = carousel.querySelectorAll(".dot");

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function showVeilleuseSlide(index) {
  const gallery = document.getElementById("veilleuse-gallery");

  const slides = gallery.querySelectorAll(".gallery-img");
  const dots = document.querySelectorAll("#veilleuse-gallery + .gallery-dots .dot");

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}