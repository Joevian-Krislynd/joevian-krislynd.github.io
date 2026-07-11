export const NAVBAR_CONFIG = {
  links: [
    { href: "#about", text: "About" },
    { href: "#exp", text: "Experience" },
    { href: "#edu", text: "Education" },
    { href: "#tools", text: "Stacks" },
    { href: "#contact", text: "Contact" },
  ],
};

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

    this.setListener();
  }

  setListener() {
    this.navToggle.addEventListener("click", () => this.toggleNav);
    this.navMenu.addEventListener("click", () => this.toggleNav);
    this.navItems.forEach((item) => {
      item.addEventListener("click", () => this.toggleNav);
    });
    console.log(this.navToggle);
    console.log(this.navMenu);
    console.log(this.navItems);
  }

  toggleNav() {
    console.log("klik");
    this.isNavbarExpanded = !this.isNavbarExpanded;
    this.navToggle.setAttribute("aria-expanded", this.isNavbarExpanded);
  }
}
