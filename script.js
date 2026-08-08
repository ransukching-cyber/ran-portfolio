document.getElementById("year") && (document.getElementById("year").textContent=new Date().getFullYear());

const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle("show", window.scrollY > 420);
  };
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
