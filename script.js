document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => nav.classList.toggle("menu-open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("menu-open")));
