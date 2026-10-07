// Header menu on narrow screens. Shared by every page.
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu]');
const nav = document.getElementById('site-nav');
if (menuBtn && nav) {
  const setMenu = (open: boolean) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      menuBtn.focus();
    }
  });
}
