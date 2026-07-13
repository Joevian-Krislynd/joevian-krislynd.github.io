export class Navbar {
  constructor() {
    this.nav = document.getElementById("navbar");
    this.navToggle = document.getElementById("hamburger-menu");
    this.navMenu = document.getElementById("navbar-menu");
    this.navLinks = this.navMenu.querySelector(".navlinks");
    this.navItems = document.querySelectorAll(".nav-item");
    this.isNavbarExpanded = false;
    this.prevScrollPosition =
      window.scrollY ?? document.documentElement.scrollTop;

    this.darkMode = document.getElementById("light-mode");
    this.setListener();
  }

  setListener() {
    this.navToggle.addEventListener("click", () => this.toggleNav());
    this.navItems.forEach((item) => {
      item.addEventListener("click", () => this.toggleNav());
    });
    this.darkMode.addEventListener("change", () => {
      const currentTheme = document.documentElement.dataset.theme || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = newTheme;
    });
  }

  toggleNav() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
    this.navToggle.setAttribute("aria-expanded", this.isNavbarExpanded);
    if (window.innerWidth < 768) {
      this.navMenu.classList.toggle("active", this.isNavbarExpanded);
    }
  }
}
