import { STACK_GROUPS } from "./stack-data";

function createCategoryBlock(title, pngList = [], labelList = []) {
  const section = document.createElement("section");
  section.className = "stack-category";

  const header = document.createElement("h3");
  header.className = "stack-category-title";
  header.textContent = title;
  section.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "stack-grid";

  const row = document.createElement("div");
  row.className = "stack-row";

  const max = Math.max(pngList.length, labelList.length);
  for (let i = 0; i < max; i++) {
    const card = document.createElement("div");
    card.className = "stack-card";

    if (pngList[i]) {
      const img = document.createElement("img");
      img.src = pngList[i];
      img.alt = labelList[i] || title;
      img.className = "stack-card-img";
      card.appendChild(img);
    }

    const label = document.createElement("div");
    label.className = "stack-card-label";
    label.textContent = labelList[i] || pngList[i] || "";
    card.appendChild(label);

    row.appendChild(card);
  }

  grid.appendChild(row);
  section.appendChild(grid);
  return section;
}

export default class Stack {
  constructor() {
    this.root = document.querySelector(".stack-module .site-inner");
    if (!this.root) return;
    this.render();
  }

  render() {
    const mapping = [
      { key: "core", selector: ".stack-section[data-section=expert]" },
      {
        key: "experienced",
        selector: ".stack-section[data-section=experienced]",
      },
      { key: "learn", selector: ".stack-section[data-section=learn]" },
    ];

    const subOrder = [
      "LANGUAGES",
      "BACKEND",
      "CI/CD",
      "WORKFLOWS & CONCEPTS",
      "VERSION CONTROL",
    ];

    mapping.forEach((m) => {
      const container = this.root.querySelector(m.selector);
      if (!container) return;
      container.innerHTML = "";

      const group = STACK_GROUPS[m.key];
      if (!group) return;

      const groupWrap = document.createElement("div");
      groupWrap.className = "stack-group";

      const titleEl = document.createElement("div");
      titleEl.className = "stack-group-title";
      titleEl.textContent = group.title;
      groupWrap.appendChild(titleEl);

      const subContainer = document.createElement("div");
      subContainer.className = "stack-group-subcats";

      subOrder.forEach((subKey) => {
        const sub = group.subcategories[subKey];
        if (!sub) return;
        const pngList = Array.isArray(sub.png) ? sub.png : [];
        const labelList = Array.isArray(sub.labels) ? sub.labels : [];
        const block = createCategoryBlock(subKey, pngList, labelList);
        subContainer.appendChild(block);
      });

      groupWrap.appendChild(subContainer);
      container.appendChild(groupWrap);
    });
  }
}
