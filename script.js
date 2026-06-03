// =====================
// NAVIGATION - scroll shadow
// =====================
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// =====================
// MOBILE MENU
// =====================
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.querySelector('.mobile-menu__close');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// =====================
// SMOOTH SCROLL for nav links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =====================
// FADE IN ON SCROLL
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .about__inner, .speaking__text, .speaking__image-wrap, .book__inner').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

// =====================
// TESTIMONIAL READ MORE
// =====================
document.querySelectorAll('.testimonial__toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const rest = btn.previousElementSibling.querySelector('.testimonial__rest');
    const isHidden = rest.style.display === 'none';
    rest.style.display = isHidden ? 'inline' : 'none';
    btn.textContent = isHidden ? 'Read less' : 'Read more';
  });
});
