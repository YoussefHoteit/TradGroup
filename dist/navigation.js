(() => {
  const menu = document.querySelector('.mobile-nav');
  const trigger = document.querySelector('.menu-trigger');
  const main = document.querySelector('main');
  const header = document.querySelector('.header');
  let scrollFrame;

  function syncHeader() {
    document.body.classList.toggle('is-home', Boolean(document.querySelector('.hero')));
    header.classList.toggle('is-scrolled', window.scrollY > 35);
    const sampleY = header.getBoundingClientRect().height / 2;
    const sampleX = window.innerWidth / 2;
    const darkSections = document.querySelectorAll('.hero, .ticker, .editorial, .inspiration-band, .page-intro, footer');
    const overDark = [...darkSections].some(section => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= sampleY && bounds.bottom > sampleY && bounds.left <= sampleX && bounds.right >= sampleX;
    });
    header.classList.toggle('over-light', !overDark);
    const current = location.hash.split('?')[0] || '#/';
    document.querySelectorAll('.desktop-nav a, .menu-links a').forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function closeMenu() {
    menu.close();
  }

  trigger.onclick = () => {
    if (menu.open) return closeMenu();
    menu.hidden = false;
    menu.showModal();
    document.body.classList.add('menu-open');
    trigger.setAttribute('aria-expanded', 'true');
  };
  document.querySelector('.menu-close').onclick = closeMenu;
  menu.addEventListener('close', () => {
    menu.hidden = true;
    document.body.classList.remove('menu-open');
    trigger.setAttribute('aria-expanded', 'false');
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.querySelector('.skip').addEventListener('click', event => {
    event.preventDefault();
    main.focus();
  });
  window.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      syncHeader();
      scrollFrame = null;
    });
  }, { passive: true });
  new MutationObserver(syncHeader).observe(main, { childList: true });
  window.addEventListener('hashchange', syncHeader);
  window.matchMedia('(min-width: 961px)').addEventListener('change', event => {
    if (event.matches && menu.open) closeMenu();
  });
  syncHeader();
})();
