/* ============================================
   NOVEL BREED AGRIC LTD — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAVBAR: scroll shadow ──────────────────────
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ── 2. HAMBURGER MENU ────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when clicking backdrop
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && 
        !navLinks.contains(e.target) && 
        !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking non-dropdown links only
  navLinks.querySelectorAll('a').forEach(link => {
    if (!link.closest('.has-dropdown')) {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });

  // Close menu when clicking dropdown sub-links
  navLinks.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── 3. MOBILE DROPDOWN TOGGLE ───────────────────
  const dropdownParents = document.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        // Close other dropdowns
        dropdownParents.forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
        item.classList.toggle('open');
      }
    });
  });

  // ── 4. SCROLL REVEAL ─────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));

  // ── 5. STAT COUNTER ANIMATION ────────────────────
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => countObserver.observe(el));

  function animateCount(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const duration = 1800;
    const steps    = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  }

  // ── 6. ACTIVE NAV LINK (highlight current page) ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });

  // ── 7. NEWSLETTER FORM ────────────────────────────
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn   = newsletterForm.querySelector('button');
      const email = newsletterForm.querySelector('input[type="email"]').value;

      if (!email) return;

      btn.textContent = 'Subscribed! ✓';
      btn.style.background = '#2ecc71';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        newsletterForm.reset();
      }, 3000);
    });
  }

  // ── 8. Add social icons to sidebar bottom (mobile only) ──────────
  if (navLinks && window.innerWidth <= 768) {
    const socialDiv = document.createElement('div');
    socialDiv.style.cssText = 'margin-top:auto;padding:20px 24px;border-top:1px solid #f0f0f0;display:flex;justify-content:center;gap:16px;';
    socialDiv.innerHTML = `
      <a href="#" style="width:36px;height:36px;border-radius:50%;border:1px solid rgba(27,107,47,0.2);display:flex;align-items:center;justify-content:center;color:#1B6B2F;transition:all 0.3s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
      <a href="#" style="width:36px;height:36px;border-radius:50%;border:1px solid rgba(27,107,47,0.2);display:flex;align-items:center;justify-content:center;color:#1B6B2F;transition:all 0.3s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a href="#" style="width:36px;height:36px;border-radius:50%;border:1px solid rgba(27,107,47,0.2);display:flex;align-items:center;justify-content:center;color:#1B6B2F;transition:all 0.3s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="#" style="width:36px;height:36px;border-radius:50%;border:1px solid rgba(27,107,47,0.2);display:flex;align-items:center;justify-content:center;color:#1B6B2F;transition:all 0.3s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
    `;
    navLinks.appendChild(socialDiv);
    
    socialDiv.querySelectorAll('a').forEach(link => {
      link.onmouseenter = () => {
        link.style.background = '#1B6B2F';
        link.style.borderColor = '#1B6B2F';
        link.style.color = '#fff';
      };
      link.onmouseleave = () => {
        link.style.background = '';
        link.style.borderColor = 'rgba(27,107,47,0.2)';
        link.style.color = '#1B6B2F';
      };
    });
  }

});
