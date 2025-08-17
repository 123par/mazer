const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
    toggleButton.innerHTML = '<i data-feather="sun"></i>';
  } else {
    body.classList.add('theme-light');
    body.classList.remove('theme-dark');
    toggleButton.innerHTML = '<i data-feather="moon"></i>';
  }
  feather.replace();
}

const savedMode = localStorage.getItem('mazer-darkmode');
setDarkMode(savedMode === 'true');

toggleButton.addEventListener('click', () => {
  const isDark = body.classList.contains('theme-dark');
  setDarkMode(!isDark);
  localStorage.setItem('mazer-darkmode', (!isDark).toString());
});
