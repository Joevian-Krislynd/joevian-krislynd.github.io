function updateLangSwitcher(lang) {
  const langOptions = document.querySelectorAll(".lang-option");

  langOptions.forEach((option) => {
    const isActive = option.dataset.lang === lang;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

async function setLanguage(lang) {
  try {
    const response = await fetch(`/lang/${lang}.json`);

    if (!response.ok) {
      throw new Error(`Failed to load /lang/${lang}.json`);
    }
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = translations[key] || key;
    });
  } catch (error) {
    console.error("Language loading failed:", error);
  }
}

function toggleLanguage(event) {
  event.preventDefault();

  const selectedLang = event.currentTarget.dataset.lang;
  document.documentElement.dataset.lang = selectedLang;

  updateLangSwitcher(selectedLang);
  setLanguage(selectedLang);
}

export function initLang() {
  const langOptions = document.querySelectorAll(".lang-option");
  if (!langOptions.length) return;

  const lang = "en";
  document.documentElement.dataset.lang = lang;

  updateLangSwitcher(lang);
  setLanguage(lang);

  langOptions.forEach((option) => {
    option.addEventListener("click", toggleLanguage);
  });
}
