(() => {
  const menu = document.querySelector('.mobile-nav');
  const trigger = document.querySelector('.menu-trigger');
  const main = document.querySelector('main');
  const header = document.querySelector('.header');
  let scrollFrame;

  function syncCollections() {
    const rail = document.getElementById('home-collections');
    if (!rail) return;
    const cards = [...rail.children];
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const index = Math.max(0, Math.min(cards.length - 1, Math.round(rail.scrollLeft / step)));
    document.getElementById('collection-position').textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    main.querySelector('[data-collection-step="-1"]').disabled = rail.scrollLeft < 2;
    main.querySelector('[data-collection-step="1"]').disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
  }

  main.addEventListener('click', event => {
    const button = event.target.closest('[data-collection-step]');
    const rail = document.getElementById('home-collections');
    if (!button || !rail) return;
    const step = rail.children[1].offsetLeft - rail.children[0].offsetLeft;
    rail.scrollBy({ left: Number(button.dataset.collectionStep) * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
  main.addEventListener('scroll', event => {
    if (event.target.id === 'home-collections') syncCollections();
  }, { capture: true, passive: true });

  function syncHeader() {
    const hero = document.querySelector('.hero');
    document.body.classList.toggle('is-home', Boolean(hero));
    if (hero) header.style.setProperty('--hero-height', `${hero.offsetHeight}px`);
    header.classList.toggle('is-scrolled', window.scrollY > 0);
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
  new MutationObserver(() => { syncHeader(); syncCollections(); }).observe(main, { childList: true });
  window.addEventListener('hashchange', syncHeader);
  window.addEventListener('resize', () => { syncHeader(); syncCollections(); });
  window.matchMedia('(min-width: 961px)').addEventListener('change', event => {
    if (event.matches && menu.open) closeMenu();
  });
  syncHeader();
  syncCollections();
})();
