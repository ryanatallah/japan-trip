// Theme toggle, the outline rail, lightbox. No dependencies, no network.
// The stored theme and outline state are applied by the inline script in <head>, before first
// paint; this file only handles what happens after.
(() => {
  'use strict';

  const root = document.documentElement;

  // ── theme ─────────────────────────────────────────────────────────
  document.querySelector('.theme')?.addEventListener('click', () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const now = root.getAttribute('data-theme') || (dark ? 'dark' : 'light');
    const next = now === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('jp26-theme', next);
  });

  // ── outline rail ──────────────────────────────────────────────────
  // Two jobs: open/close the thing, and keep it pointed at whatever heading the reader is
  // currently under. The second one is the whole reason it exists.
  const rail = document.getElementById('outline');
  if (rail) {
    const list = rail.querySelector('.ol-list');
    const crumb = document.querySelector('.crumb');
    const crumbSec = crumb?.querySelector('b');
    const crumbSub = crumb?.querySelector('em');
    const toggle = document.querySelector('.ol-toggle');
    const scrim = document.querySelector('.ol-scrim');
    const wide = window.matchMedia('(min-width: 1180px)');
    const secs = [...rail.querySelectorAll('.ol-sec')];
    // Every heading the rail links to, in document order — which is the order the rail was
    // generated in, so the two lists stay in step by construction.
    const marks = [...rail.querySelectorAll('a[data-t]')]
      .map((a) => ({ a, el: document.getElementById(a.dataset.t) }))
      .filter((m) => m.el);

    const isOpen = () => root.getAttribute('data-outline') === 'on';
    const setOpen = (on) => {
      root.setAttribute('data-outline', on ? 'on' : 'off');
      toggle?.setAttribute('aria-expanded', String(on));
      crumb?.setAttribute('aria-expanded', String(on));
      // Only the rail's state is worth remembering. The drawer is always dismissed on arrival.
      if (wide.matches) localStorage.setItem('jp26-outline', on ? 'on' : 'off');
    };

    toggle?.addEventListener('click', () => setOpen(!isOpen()));
    crumb?.addEventListener('click', () => setOpen(!isOpen()));
    rail.querySelector('.ol-close')?.addEventListener('click', () => setOpen(false));
    scrim?.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen() && !wide.matches) setOpen(false);
    });
    // The drawer is modal and closes behind you; the rail is furniture and stays put.
    rail.addEventListener('click', (e) => {
      if (e.target.closest('a[data-t]') && !wide.matches) setOpen(false);
    });
    wide.addEventListener('change', (e) => {
      setOpen(e.matches && localStorage.getItem('jp26-outline') !== 'off');
    });

    // A section is open if the reader is inside it — unless they have said otherwise, in which
    // case their choice outranks the automatic one for the rest of the visit.
    let curSec = null;
    const paintOpen = () => {
      for (const s of secs) {
        const open = s.dataset.user ? s.dataset.user === 'open' : s === curSec;
        s.classList.toggle('is-open', open && s.classList.contains('has-sub'));
        s.querySelector('button.ol-tw')?.setAttribute('aria-expanded', String(open));
      }
    };
    for (const s of secs) {
      s.querySelector('button.ol-tw')?.addEventListener('click', () => {
        s.dataset.user = s.classList.contains('is-open') ? 'closed' : 'open';
        paintOpen();
      });
    }

    // Keep the current entry in view in the rail, but only when it has drifted out — scrolling
    // it on every change would fight the reader.
    const reveal = (a) => {
      if (!wide.matches || !isOpen() || !a.classList.contains('on')) return;
      const r = a.getBoundingClientRect(), box = list.getBoundingClientRect();
      if (r.top >= box.top + 48 && r.bottom <= box.bottom - 48) return;
      list.scrollTo({ top: list.scrollTop + (r.top + r.height / 2) - (box.top + box.height / 2), behavior: 'smooth' });
    };

    // The line the reading position is measured against: just under the sticky chrome, wherever
    // that currently is. Re-measured on resize because the crumb bar comes and goes.
    let line = 0;
    const measure = () => {
      const vis = (el) => (el && getComputedStyle(el).display !== 'none' ? el.offsetHeight : 0);
      line = vis(document.querySelector('.nav')) + vis(document.querySelector('.itinbar')) + vis(crumb) + 16;
    };

    let active = -1;
    const spy = () => {
      let i = 0;
      for (let n = 0; n < marks.length; n++) {
        if (marks[n].el.getBoundingClientRect().top <= line) i = n; else break;
      }
      // Nothing new crosses the line in the last screenful, so the final heading would never
      // win on its own.
      if (window.innerHeight + window.scrollY >= root.scrollHeight - 4) i = marks.length - 1;
      if (i === active) return;
      active = i;

      for (const m of marks) { m.a.classList.remove('on'); m.a.removeAttribute('aria-current'); }
      const a = marks[i].a;
      a.classList.add('on');
      a.setAttribute('aria-current', 'location');
      curSec = a.closest('.ol-sec');
      for (const s of secs) s.classList.toggle('is-cur', s === curSec);
      paintOpen();

      if (crumbSec) {
        crumbSec.textContent = curSec.querySelector('.ol-row > a').textContent;
        crumbSub.textContent = a.closest('.ol-sub') ? a.textContent : '';
      }
      reveal(a);
      setTimeout(() => reveal(a), 300);   // again once the section has finished expanding
    };

    let queued = false;
    measure();
    spy();
    addEventListener('scroll', () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; spy(); });
    }, { passive: true });
    addEventListener('resize', () => { measure(); active = -1; spy(); }, { passive: true });
  }

  // ── lightbox ──────────────────────────────────────────────────────
  const lb = document.querySelector('.lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.lb-cap');
  const lbCredit = lb.querySelector('.lb-credit');
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
    // Credit is required for CC-licensed images, so show it whenever present.
    lbCredit.textContent = el.dataset.credit ? `— ${el.dataset.credit}` : '';
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
})();
