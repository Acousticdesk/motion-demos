const vh = window.innerHeight;

document.addEventListener("DOMContentLoaded", function () {
  const listTextEl = document.getElementsByClassName("list-text")[0];

  if (!listTextEl) {
    throw new Error('Element with class "list-text" not found.');
  }

  listTextEl.style.top = `${vh / 2 - listTextEl.clientHeight / 2}px`;
});
