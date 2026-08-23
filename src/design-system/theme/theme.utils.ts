export function isDarkTheme() {
  return document.documentElement.classList.contains(
    "dark"
  );
}

export function getCurrentTheme() {
  return isDarkTheme()
    ? "dark"
    : "light";
}