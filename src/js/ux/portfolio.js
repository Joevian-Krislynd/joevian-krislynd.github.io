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
    this.index = 0; // current start index

    if (!this.track || !this.viewport) return;

    this._bind();
    this._update();
    window.addEventListener("resize", () => this._update());
  }

  getVisibleCount() {
    return window.matchMedia("(max-width: 768px)").matches ? 1 : 3;
  }

  _renderCards() {
    this.track.innerHTML = "";
    const visible = this.getVisibleCount();
    const gap = 24;
    const cardWidth = `calc((100% - ${gap * (visible - 1)}px) / ${visible})`;

    for (let offset = 0; offset < visible; offset++) {
      const itemIndex = (this.index + offset) % this.items.length;
      const it = this.items[itemIndex];
      const card = document.createElement("div");
      card.className = "portfolio-card";
      card.style.flex = `0 0 ${cardWidth}`;
      if (offset !== visible - 1) card.style.marginRight = `${gap}px`;

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
    }
  }

  _bind() {
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.next());
  }

  prev() {
    this.index = (this.index - 1 + this.items.length) % this.items.length;
    this._renderCards();
  }

  next() {
    this.index = (this.index + 1) % this.items.length;
    this._renderCards();
  }

  _update() {
    this._renderCards();
  }
}
