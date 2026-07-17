
    // ===== SVG Icons (inline for zero dependencies) =====
    const icons = {
      github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
      linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
      twitter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
      stackoverflow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="15" width="18" height="6" rx="1"/><path d="M6 18h12"/><path d="M6.5 12.5l11 2"/><path d="M8 7.5l10 4.5"/><path d="M10.5 3.5l8.5 7"/></svg>',
      external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
      mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
      phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      location: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      award: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
      backend: '⚙️',
      frontend: '🎨',
      database: '🗄️',
      devops: '🚀',
      practices: '📐'
    };

    const skillIcons = {
      'Backend': icons.backend,
      'Frontend': icons.frontend,
      'Database': icons.database,
      'DevOps & Tools': icons.devops,
      'Practices': icons.practices
    };

    // ===== State =====
    let portfolioData = null;

    // ===== Theme Management =====
    function getPreferredTheme() {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      const btn = document.getElementById('theme-toggle');
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }

    // Init theme immediately to prevent flash
    setTheme(getPreferredTheme());

    document.getElementById('theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ===== Navigation =====
    const sections = ['about', 'skills', 'experience', 'projects', 'testimonials', 'education', 'contact'];

    function buildNav() {
      const navLinks = document.getElementById('nav-links');
      const mobileMenu = document.getElementById('mobile-menu');

      sections.forEach(s => {
        const label = s.charAt(0).toUpperCase() + s.slice(1);
        navLinks.innerHTML += `<li role="none"><a href="#${s}" role="menuitem">${label}</a></li>`;
        mobileMenu.innerHTML += `<a href="#${s}">${label}</a>`;
      });
    }
    buildNav();

    // Active nav link on scroll
    function updateActiveNav() {
      const scrollY = window.scrollY + 120;
      let current = '';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      });

      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
      });
    }

    // Mobile menu
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', !isOpen);
      mobileMenu.setAttribute('aria-hidden', isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });

    // Nav scroll effect
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
      updateActiveNav();

      // Scroll-to-top button
      const scrollTop = document.getElementById('scroll-top');
      scrollTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    document.getElementById('scroll-top').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Scroll Animations =====
    function initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }

    // ===== Data Rendering =====
   

  function initializeContactForm() {

    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return;

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector(".btn-primary");
        const originalHTML = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "<span>Sending...</span>";

        const templateParams = {

            from_name: document.getElementById("form-name").value,

            from_email: document.getElementById("form-email").value,

            subject: document.getElementById("form-subject").value,

            message: document.getElementById("form-message").value

        };

        try {

            await emailjs.send(
                "service_n7eyqzg",
                "template_c8uo9qr",
                templateParams
            );

            button.classList.add("success");
            button.innerHTML = "<span>✓ Message Sent</span>";

            contactForm.reset();

        }
        catch (err) {

            console.error(err);

            button.classList.add("error");
            button.innerHTML = "<span>✗ Failed</span>";

        }
        finally {

            setTimeout(() => {

                button.classList.remove("success");
                button.classList.remove("error");

                button.disabled = false;

                button.innerHTML = originalHTML;

            }, 3000);

        }

    });

}

    // ===== Counter Animation =====
    function animateCounters() {
      const counters = document.querySelectorAll('.hero-stat-number');
      counters.forEach(counter => {
        const text = counter.textContent;
        const match = text.match(/(\d+)/);
        if (!match) return;

        const target = parseInt(match[0]);
        const suffix = text.replace(match[0], '');
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current) + suffix;
        }, 16);
      });
    }
    async function loadData() {
      try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Failed to load data');
        portfolioData = await response.json();
        renderPortfolio(portfolioData);
        initializeContactForm();
        animateCounters();

      } catch (err) {
        console.error('Error loading portfolio data:', err);
        // Fallback: show error state
        document.getElementById('hero-title').innerHTML =
          'Hi, I\'m <span class="accent">Dinesh Guragain</span>.<br/>Full Stack .NET Developer.';
        document.getElementById('hero-description').textContent =
          'Building robust, scalable web applications with clean architecture and modern technologies.';
        initScrollAnimations();
      }
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', loadData);
