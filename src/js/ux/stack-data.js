/*
  Configurable category data for the Stack module.
  Edit these arrays to customize categories, image paths, and labels.

  Naming required by the project:
  - EXPERT_CATEGORIES
  - EXPERT_CATEGORIES_PNG
  - EXPERT_CATEGORIES_LABEL
  - EXPERIENCED_CATEGORIES
  - EXPERIENCED_CATEGORIES_PNG
  - EXPERIENCED_CATEGORIES_LABEL
  - LEARN_CATEGORIES
  - LEARN_CATEGORIES_PNG
  - LEARN_CATEGORIES_LABEL

  Example structure:
  EXPERT_CATEGORIES = ["Languages", "Frontend"]
  EXPERT_CATEGORIES_PNG = [["/assets/icon/js.svg","/assets/icon/html.svg"],["/assets/icon/tailwind.svg"]]
  EXPERT_CATEGORIES_LABEL = [["JavaScript","HTML/CSS"],["Tailwind"]]
*/

// New grouped configuration for Stack module
// Groups: core (Core Stack & Expertise), experienced (Experienced With), learn (Currently Exploring)
// Each group contains subcategories with images and labels.

export const STACK_GROUPS = {
  core: {
    title: "Core Stack & Expertise",
    subcategories: {
      LANGUAGES: {
        png: ["/assets/porto/ubinus.png", "/assets/porto/predictme.png"],
        labels: ["JavaScript", "Python"],
      },
      BACKEND: {
        png: ["/assets/porto/bakersa.png"],
        labels: ["Node.js"],
      },
      "CI/CD": {
        png: [],
        labels: [],
      },
      "WORKFLOWS & CONCEPTS": {
        png: [],
        labels: [],
      },
      "VERSION CONTROL": {
        png: ["/assets/porto/bakersa1.png"],
        labels: ["Git"],
      },
    },
  },
  experienced: {
    title: "Experienced With",
    subcategories: {
      LANGUAGES: {
        png: ["/assets/porto/bakersa1.png"],
        labels: ["TypeScript"],
      },
      BACKEND: {
        png: [],
        labels: [],
      },
      "CI/CD": { png: [], labels: [] },
      "WORKFLOWS & CONCEPTS": { png: [], labels: [] },
      "VERSION CONTROL": { png: [], labels: [] },
    },
  },
  learn: {
    title: "Currently Exploring",
    subcategories: {
      LANGUAGES: { png: ["/assets/porto/predictme.png"], labels: ["Python"] },
      BACKEND: { png: ["/assets/porto/ubinus.png"], labels: ["SQL"] },
      "CI/CD": { png: [], labels: [] },
      "WORKFLOWS & CONCEPTS": { png: [], labels: [] },
      "VERSION CONTROL": {
        png: ["/assets/porto/bakersa.png"],
        labels: ["Git"],
      },
    },
  },
};
