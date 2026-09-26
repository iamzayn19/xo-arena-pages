// Small progressive enhancement shared by every page — the site is fully readable and
// correct without JavaScript at all (plain static HTML/CSS), this only keeps the footer's
// copyright year from silently going stale.
const yearEl = document.querySelector<HTMLElement>("[data-year]");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
