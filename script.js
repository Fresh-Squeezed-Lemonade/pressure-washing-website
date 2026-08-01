/* =========================================================
   Jordan Clark's Pressure Washing — script.js
   • Sticky nav scroll behaviour
   • Mobile nav toggle
   • Smooth scroll with nav offset
   • Footer year
   ========================================================= */

'use strict';

// ── FOOTER YEAR ──────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();


// ── STICKY NAV ───────────────────────────────────────────
const nav = document.getElementById('nav');

const handleScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();


// ── MOBILE NAV TOGGLE ────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

const openNav = () => {
  navLinks.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Close menu');
  document.body.style.overflow = 'hidden';
};

const closeNav = () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
  document.body.style.overflow = '';
};

navToggle.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeNav() : openNav();
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) closeNav();
});


// ── SMOOTH SCROLL OFFSET (accounts for fixed nav) ────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight = nav.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});