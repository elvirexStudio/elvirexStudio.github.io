const revealItems = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => observer.observe(item));

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".main-nav a");

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const processSteps = [
  {
    kicker: "Etapa 01",
    title: "Aprender con base real",
    text:
      "Investigar, practicar y entender cómo se diseñan agentes útiles antes de ofrecerlos a empresas. La prioridad es crear criterio, no aparentar experiencia.",
  },
  {
    kicker: "Etapa 02",
    title: "Probar antes de prometer",
    text:
      "Construir prototipos, fallar, equivocarme, medir qué funciona, detectar límites y enseñar también las partes que no salen a la primera.",
  },
  {
    kicker: "Etapa 03",
    title: "Documentar el camino",
    text:
      "Subir el proceso a Instagram y YouTube para que otras personas vean la realidad de emprender y cómo se vive en directo.",
  },
  {
    kicker: "Etapa 04",
    title: "Entrar al mercado con confianza",
    text:
      "Cuando haya formación, pruebas y resultados, convertir elvirexStudio en una propuesta profesional para empresas.",
  },
];

const stepButtons = document.querySelectorAll(".timeline-step");
const kicker = document.querySelector("#process-kicker");
const title = document.querySelector("#process-title");
const text = document.querySelector("#process-text");

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const step = processSteps[Number(button.dataset.step)];
    stepButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    kicker.textContent = step.kicker;
    title.textContent = step.title;
    text.textContent = step.text;
  });
});
