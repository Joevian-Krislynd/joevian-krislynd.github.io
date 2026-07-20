const DEFAULT_ITEMS = [
  { img: "/assets/porto/ubinus.png", title: "Nexus Creative Hub" },
  { img: "/assets/porto/ubinus.jpeg", title: "Aura Mindfulness" },
  { img: "/assets/porto/predictme.png", title: "DataPulse Dashboard" },
  { img: "/assets/porto/bakersa.png", title: "Bakersa" },
  { img: "/assets/porto/bakersa1.png", title: "Bakersa 2" },
];

export default class Portfolio {
  constructor(items = DEFAULT_ITEMS) {
    this.items = items;
    this.viewport = document.querySelector(
      ".portfolio-carousel .carousel-viewport",
    );
    this.track = document.querySelector(".portfolio-carousel .carousel-track");
    this.prevBtn = document.querySelector(
      ".portfolio-carousel .carousel-arrow.prev",
    );
    this.nextBtn = document.querySelector(
      ".portfolio-carousel .carousel-arrow.next",
    );
    this.visible = 3;
    this.index = 0; // start index

    if (!this.track || !this.viewport) return;

    this._renderCards();
    this._bind();
    this._update();
    window.addEventListener("resize", () => this._update());
  }

  _renderCards() {
    this.track.innerHTML = "";
    this.items.forEach((it) => {
      const card = document.createElement("div");
      card.className = "portfolio-card";

      const imgWrap = document.createElement("div");
      imgWrap.className = "portfolio-card-imgwrap";
      const img = document.createElement("img");
      img.src = it.img;
      img.alt = it.title;
      imgWrap.appendChild(img);

      const caption = document.createElement("div");
      caption.className = "portfolio-card-caption";
      caption.textContent = it.title;

      card.appendChild(imgWrap);
      card.appendChild(caption);
      this.track.appendChild(card);
    });
  }

  _bind() {
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.next());
  }

  prev() {
    this.index = Math.max(0, this.index - 1);
    this._update();
  }

  next() {
    const maxIndex = Math.max(0, this.items.length - this.visible);
    this.index = Math.min(maxIndex, this.index + 1);
    this._update();
  }

  _update() {
    const viewportWidth = this.viewport.clientWidth;
    const gap = 24; // px
    const cardWidth = Math.floor(
      (viewportWidth - gap * (this.visible - 1)) / this.visible,
    );
    const cards = Array.from(this.track.children);
    cards.forEach((c) => {
      c.style.flex = `0 0 ${cardWidth}px`;
      c.style.marginRight = `${gap}px`;
    });
    // last card margin reset
    if (cards[cards.length - 1])
      cards[cards.length - 1].style.marginRight = "0px";

    const translateX = -(this.index * (cardWidth + gap));
    this.track.style.transform = `translateX(${translateX}px)`;
  }
}
