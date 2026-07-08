function updateLangIcon() {
    const langToggle = document.getElementById("lang-toggle");
    if (!langToggle) return;
    const lang = document.documentElement.dataset.lang || "en";
    langToggle.src = lang === "en" ? "./assets/icon/usa.png" : "./assets/icon/ina.png";
}

async function setLanguage(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);

        if (!response.ok) {
            throw new Error(`Failed to load lang/${lang}.json`);
        }
        const translations = await response.json();

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.dataset.i18n;
            element.textContent = translations[key] || key;
        });
    } catch (error) {
        console.error("Language loading failed:", error);
    }
}

function toggleLanguage() {
    const currentLang = document.documentElement.dataset.lang || "en";

    const newLang = currentLang === "en" ? "id" : "en";
    document.documentElement.dataset.lang = newLang;

    updateLangIcon();
    setLanguage(newLang);
}

export function initLang() {
    const langToggle = document.getElementById("lang-toggle");
    if (!langToggle) return;

    const lang = document.documentElement.dataset.lang || "en";

    updateLangIcon();
    setLanguage(lang);

    langToggle.addEventListener( "click", toggleLanguage);
}