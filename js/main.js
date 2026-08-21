/* MODULAR LAB — main.js */

(function () {
  'use strict';

  // --- Navbar shadow on scroll ---
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile menu toggle ---
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function closeMenu() {
    if (!navLinks || !toggle) return;
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // --- Reveal on scroll ---
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // --- Footer year ---
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // --- Discord CTA ---
  var DISCORD_INVITE_URL = 'https://discord.gg/HV9eaAH4qz';

  var discordBtn = document.getElementById('discordBtn');
  if (discordBtn) {
    discordBtn.setAttribute('href', DISCORD_INVITE_URL);
    discordBtn.setAttribute('target', '_blank');
    discordBtn.setAttribute('rel', 'noopener');
  }
})();
