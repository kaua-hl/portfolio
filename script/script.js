const navLink = document.querySelectorAll(".header__menu a[href^='#']");

class SmoothScroll {
  constructor(navLink) {
    this.navLink = navLink;

    this.smoothScroll = this.smoothScroll.bind(this);
  }
  smoothScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
  events() {
    this.navLink.forEach((link) => {
      link.addEventListener("click", this.smoothScroll);
    });
  }
  init() {
    this.events();
  }
}

const smooth = new SmoothScroll(navLink);
smooth.init();
