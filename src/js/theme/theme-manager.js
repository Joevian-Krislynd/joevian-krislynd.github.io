export function updateThemeIcon() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    const theme = document.documentElement.dataset.theme || "light";
    themeToggle.src = theme === "dark" ? "./../../assets/icon/moon.png" : "./../../assets/icon/sun.png";
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