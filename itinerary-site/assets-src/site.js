// Lightbox, theme toggle, subnav highlighting. No dependencies, no network.
(() => {
  'use strict';

  // ── theme ─────────────────────────────────────────────────────────
  const root = document.documentElement;
  const stored = localStorage.getItem('jp26-theme');
  if (stored) root.setAttribute('data-theme', stored);
  document.querySelector('.theme')?.addEventListener('click', () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const now = root.getAttribute('data-theme') || (dark ? 'dark' : 'light');
    const next = now === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('jp26-theme', next);
  });

  // ── lightbox ──────────────────────────────────────────────────────
  const lb = document.querySelector('.lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.lb-cap');
  const lbSrc = lb.querySelector('.lb-src');
  let shots = [];
  let idx = 0;
  let lastFocus = null;

  function show(i) {
    if (!shots.length) return;
    idx = (i + shots.length) % shots.length;
    const el = shots[idx];
    lbImg.src = el.dataset.full;
    lbImg.alt = el.dataset.caption || '';
    lbCap.textContent = el.dataset.caption || '';
    if (el.dataset.source) {
      lbSrc.href = el.dataset.source;
      lbSrc.hidden = false;
    } else {
      lbSrc.hidden = true;
    }
    // Preload the neighbours so arrowing through feels instant.
    [1, -1].forEach((d) => {
      const n = shots[(idx + d + shots.length) % shots.length];
      if (n) new Image().src = n.dataset.full;
    });
  }

  function open(el) {
    // Scope the gallery to the nearest logical group so arrows stay in context.
    const scope = el.closest('.entity, .place, .card, .strip, .grid, .hero-collage') || document;
    shots = [...scope.querySelectorAll('.shot[data-full]')];
    if (!shots.includes(el)) shots = [el];
    lastFocus = el;
    show(shots.indexOf(el));
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb-close').focus();
  }

  function close() {
    lb.hidden = true;
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
    lastFocus?.focus();
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.shot[data-full]');
    if (btn) { e.preventDefault(); open(btn); }
  });

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.tagName === 'FIGURE') close(); });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') show(idx + 1);
    else if (e.key === 'ArrowLeft') show(idx - 1);
  });

  // Swipe on touch devices.
  let x0 = null;
  lb.addEventListener('touchstart', (e) => { x0 = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 55) show(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });

  // ── subnav current-section highlight ──────────────────────────────
  const links = [...document.querySelectorAll('.subnav a')];
  if (links.length && 'IntersectionObserver' in window) {
    const map = new Map();
    links.forEach((a) => {
      const sec = document.querySelector(a.getAttribute('href'));
      if (sec) map.set(sec, a);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.classList.remove('on'));
          map.get(en.target)?.classList.add('on');
        }
      });
    }, { rootMargin: '-30% 0px -65% 0px' });
    map.forEach((_, sec) => io.observe(sec));
  }
})();
