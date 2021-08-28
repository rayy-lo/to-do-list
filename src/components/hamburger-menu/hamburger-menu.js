class HamburgerMenu extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("aria-controls", "sidebar");
    this.setAttribute("class", "mobile-menu");
    this.addEventListener("click", this.toggleSidebar);
  }

  toggleSidebar() {
    const sidebar = document.querySelector("#sidebar");
    const isOpen = sidebar.classList.contains("slide-in");

    sidebar.classList.toggle(isOpen ? "slide-out" : "slide-in");
  }
}

customElements.define("hamburger-menu", HamburgerMenu);
