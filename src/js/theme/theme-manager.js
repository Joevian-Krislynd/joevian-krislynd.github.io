import moonIcon from './../../assets/icon/moon.png';
import sunIcon from './../../assets/icon/sun.png';

export function updateThemeIcon() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    const theme = document.documentElement.dataset.theme || "light";
    themeToggle.src = theme === "dark" ? moonIcon : sunIcon;
}

export function initTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle != undefined && themeToggle != null) themeToggle.addEventListener("click", toggleTheme);
    updateThemeIcon();

    function toggleTheme() {
        const currentTheme = document.documentElement.dataset.theme || "light";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = newTheme;
        updateThemeIcon();
    }
}