const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll(".menu-mobile a");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("active");
    menuToggle.classList.toggle("active", menuAberto);
    menuToggle.setAttribute("aria-expanded", String(menuAberto));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
