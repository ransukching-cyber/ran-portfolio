document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("siteNav");
if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  };
  menuToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => { if (window.innerWidth > 900) closeMenu(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
}

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const toggleBackToTop = () => backToTop.classList.toggle("show", window.scrollY > 420);
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
