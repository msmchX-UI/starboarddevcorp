const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');

const STORAGE_KEY = 'starboard-theme';
const savedTheme = localStorage.getItem(STORAGE_KEY);

if (savedTheme === 'light') {
  root.classList.add('light');
}

function updateThemeIcon() {
  const isLight = root.classList.contains('light');
  themeToggle.textContent = isLight ? '🌙' : '🌗';
}

if (themeToggle) {
  updateThemeIcon();
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
    updateThemeIcon();
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
