const themeToggle = document.getElementById('theme-toggle');

function updateThemeIcon() {
  const theme = document.documentElement.dataset.theme;

  themeToggle.src =
    theme === 'dark'
      ? '/assets/icon/moon.png'
      : '/assets/icon/sun.png';
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.dataset.theme || 'light';

  const newTheme =
    currentTheme === 'light'
      ? 'dark'
      : 'light';

  document.documentElement.dataset.theme = newTheme;

  updateThemeIcon();
}

themeToggle.addEventListener('click', toggleTheme);

updateThemeIcon();