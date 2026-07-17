// ==========================================
// Portfolio JavaScript
// Part 1 - Icons, Theme, Navigation
// ==========================================

// ===== SVG Icons =====
const icons = {
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',

    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',

    twitter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5"/></svg>',

    stackoverflow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="15" width="18" height="6"/><path d="M6 18h12"/></svg>',

    external: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',

    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>',

    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3"/></svg>',

    location: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/></svg>',

    award: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/></svg>',

    backend: "⚙️",
    frontend: "🎨",
    database: "🗄️",
    devops: "🚀",
    practices: "📐"
};

// ===== Skill Icons =====
const skillIcons = {
    Backend: icons.backend,
    Frontend: icons.frontend,
    Database: icons.database,
    "DevOps & Tools": icons.devops,
    Practices: icons.practices
};

// ===== State =====
let portfolioData = null;

// ==========================================
// Theme
// ==========================================

function getPreferredTheme() {

    const saved = localStorage.getItem("theme");

    if (saved)
        return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function setTheme(theme) {

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

    const btn = document.getElementById("theme-toggle");

    if (!btn) return;

    btn.textContent = theme === "dark" ? "☀️" : "🌙";

    btn.setAttribute(
        "aria-label",
        theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}

setTheme(getPreferredTheme());

document
    .getElementById("theme-toggle")
    ?.addEventListener("click", () => {

        const current =
            document.documentElement.getAttribute("data-theme");

        setTheme(current === "dark" ? "light" : "dark");
    });

// ==========================================
// Navigation
// ==========================================

const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "testimonials",
    "education",
    "contact"
];

function buildNav() {

    const navLinks = document.getElementById("nav-links");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!navLinks || !mobileMenu) return;

    sections.forEach(section => {

        const label =
            section.charAt(0).toUpperCase() +
            section.slice(1);

        navLinks.innerHTML +=
            `<li><a href="#${section}">${label}</a></li>`;

        mobileMenu.innerHTML +=
            `<a href="#${section}">${label}</a>`;
    });
}

buildNav();

function updateActiveNav() {

    const scrollY = window.scrollY + 120;

    let current = "";

    sections.forEach(id => {

        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollY)
            current = id;
    });

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );
        });
}

// ==========================================
// Mobile Menu
// ==========================================

const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileToggle?.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");
    mobileToggle.classList.toggle("open");
});

mobileMenu?.addEventListener("click", e => {

    if (e.target.tagName !== "A") return;

    mobileMenu.classList.remove("open");
    mobileToggle.classList.remove("open");
});

// ==========================================
// Scroll Events
// ==========================================

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {

    nav?.classList.toggle(
        "scrolled",
        window.scrollY > 20
    );

    updateActiveNav();

    document
        .getElementById("scroll-top")
        ?.classList.toggle(
            "visible",
            window.scrollY > 600
        );

}, { passive: true });

document
    .getElementById("scroll-top")
    ?.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

// ==========================================
// Scroll Animation
// ==========================================

function initScrollAnimations() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting)
                entry.target.classList.add("is-visible");

        });

    }, {

        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"

    });

    document
        .querySelectorAll(".animate-on-scroll")
        .forEach(el => observer.observe(el));
}
// ==========================================
// Part 2 - renderPortfolio()
// Hero, About, Skills, Experience
// ==========================================

function renderPortfolio(data) {

    const {
        personal,
        skills,
        experience,
        projects,
        education,
        certifications,
        testimonials
    } = data;

    // =====================================
    // Hero Section
    // =====================================

    document.getElementById("hero-title").innerHTML =
        `Hi, I'm <span class="accent">${personal.name}</span>.<br>${personal.title}.`;

    document.getElementById("hero-description").textContent =
        personal.tagline;

    // =====================================
    // About Section
    // =====================================

    document.getElementById("about-bio").textContent =
        personal.bio;

    const aboutDetails = document.getElementById("about-details");

    const detailItems = [

        {
            label: "Location",
            value: personal.location
        },

        {
            label: "Email",
            value: personal.email
        },

        {
            label: "Phone",
            value: personal.phone
        },

        {
            label: "Experience",
            value: "4+ Years"
        }

    ];

    aboutDetails.innerHTML = detailItems.map(item => `

        <div class="about-detail">

            <div class="about-detail-label">
                ${item.label}
            </div>

            <div class="about-detail-value">
                ${item.value}
            </div>

        </div>

    `).join("");

    // =====================================
    // Social Links
    // =====================================

    const socialLinks =
        document.getElementById("social-links");

    if (personal.social) {

        socialLinks.innerHTML =
            Object.entries(personal.social)
                .map(([key, value]) => `

            <a href="${value}"
               class="social-link"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="${key}"
               title="${key}">

                ${icons[key] || key}

            </a>

        `).join("");
    }

    // =====================================
    // Certifications
    // =====================================

    const certContainer =
        document.getElementById("about-certs");

    certContainer.innerHTML = "";

    if (certifications && certifications.length) {

        certifications.forEach(cert => {

            certContainer.innerHTML += `

                <div class="cert-item">

                    <div class="cert-icon">
                        ${icons.award}
                    </div>

                    <div>

                        <div class="cert-info-name">
                            ${cert.name}
                        </div>

                        <div class="cert-info-meta">
                            ${cert.issuer} • ${cert.year}
                        </div>

                    </div>

                </div>

            `;
        });

    }



    const skillsGrid =
        document.getElementById("skills-grid");

    skillsGrid.innerHTML = "";

    skills.forEach(skill => {

        skillsGrid.innerHTML += `

            <div class="skill-card animate-on-scroll">

                <div class="skill-card-header">

                    <span class="skill-card-icon">

                        ${skillIcons[skill.category] || "💡"}

                    </span>

                    ${skill.category}

                </div>

                <div class="skill-tags">

                    ${skill.items
                        .map(item => `
                            <span class="skill-tag">
                                ${item}
                            </span>
                        `)
                        .join("")}

                </div>

            </div>

        `;

    });

    // =====================================
    // Experience Timeline
    // =====================================

    const timeline =
        document.getElementById("timeline");

    timeline.innerHTML = "";

    experience.forEach(exp => {

        timeline.innerHTML += `

            <div class="timeline-item animate-on-scroll">

                <div class="timeline-dot"></div>

                <div class="timeline-period">

                    ${exp.period}

                </div>

                <div class="timeline-role">

                    ${exp.role}

                </div>

                <div class="timeline-company">

                    ${exp.company} · ${exp.location}

                </div>

                <div class="timeline-desc">

                    ${exp.description}

                </div>

                <ul class="timeline-highlights">

                    ${exp.highlights
                        .map(item => `<li>${item}</li>`)
                        .join("")}

                </ul>

            </div>

        `;

    });
    // =====================================
    // Projects
    // =====================================

    const projectsGrid =
        document.getElementById("projects-grid");

    projectsGrid.innerHTML = "";

    projects.forEach(project => {

        projectsGrid.innerHTML += `

            <div class="project-card animate-on-scroll">

                ${project.featured
                    ? '<div class="project-featured-badge">★ Featured</div>'
                    : ''}

                <div class="project-title">
                    ${project.title}
                </div>

                <div class="project-desc">
                    ${project.description}
                </div>

                <div class="project-tech">

                    ${project.tech
                        .map(tech => `<span>${tech}</span>`)
                        .join("")}

                </div>

                <div class="project-links">

                    ${project.githubUrl
                        ? `
                        <a href="${project.githubUrl}"
                           target="_blank"
                           rel="noopener noreferrer">

                            ${icons.github}
                            GitHub

                        </a>
                        `
                        : ""}

                    ${project.liveUrl
                        ? `
                        <a href="${project.liveUrl}"
                           target="_blank"
                           rel="noopener noreferrer">

                            ${icons.external}
                            Live Demo

                        </a>
                        `
                        : ""}

                </div>

            </div>

        `;

    });

    // =====================================
    // Testimonials
    // =====================================

    const testimonialsGrid =
        document.getElementById("testimonials-grid");

    testimonialsGrid.innerHTML = "";

    testimonials.forEach(testimonial => {

        testimonialsGrid.innerHTML += `

            <div class="testimonial-card animate-on-scroll">

                <div class="testimonial-quote-icon">

                    "

                </div>

                <div class="testimonial-text">

                    ${testimonial.quote}

                </div>

                <div class="testimonial-author">

                    ${testimonial.author}

                </div>

                <div class="testimonial-role">

                    ${testimonial.role}

                </div>

            </div>

        `;

    });

    // =====================================
    // Education
    // =====================================

    const educationGrid =
        document.getElementById("education-grid");

    educationGrid.innerHTML = "";

    education.forEach(edu => {

        educationGrid.innerHTML += `

            <div class="edu-card animate-on-scroll">

                <div class="edu-period">

                    ${edu.period}

                </div>

                <div class="edu-degree">

                    ${edu.degree}

                </div>

                <div class="edu-institution">

                    ${edu.institution} · ${edu.location}

                </div>

                <div class="edu-desc">

                    ${edu.description}

                </div>

            </div>

        `;

    });

    // =====================================
    // Footer
    // =====================================

    document.getElementById("footer-name").textContent =
        personal.name;

    document.getElementById("footer-year").textContent =
        new Date().getFullYear();

    // =====================================
    // Hero Statistics
    // =====================================

    const statNumbers =
        document.querySelectorAll(".hero-stat-number");

    if (statNumbers.length >= 3 && certifications) {

        statNumbers[2].textContent =
            certifications.length;

    }

    // =====================================
    // Initialize Animations
    // =====================================

    initScrollAnimations();

}
// ==========================================
// Part 4 - Contact Form (EmailJS)
// ==========================================

function initializeContactForm() {

    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return;

    // Prevent duplicate event listeners
    if (contactForm.dataset.initialized === "true") {
        return;
    }

    contactForm.dataset.initialized = "true";

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector(".btn-primary");

        if (!button) return;

        const originalHTML = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "<span>Sending...</span>";

        const templateParams = {

            from_name: document.getElementById("form-name").value.trim(),

            from_email: document.getElementById("form-email").value.trim(),

            subject: document.getElementById("form-subject").value.trim(),

            message: document.getElementById("form-message").value.trim()

        };

        try {

            await emailjs.send(

                "service_n7eyqzg",

                "template_rss59gn",

                templateParams

            );

            button.classList.remove("error");
            button.classList.add("success");

            button.innerHTML = "<span>✓ Message Sent</span>";

            contactForm.reset();

        }
        catch (err) {

            console.error("EmailJS Error:", err);

            button.classList.remove("success");
            button.classList.add("error");

            button.innerHTML = "<span>✗ Failed</span>";

            alert(
                err?.text ||
                "Unable to send your message. Please try again."
            );

        }
        finally {

            setTimeout(() => {

                button.disabled = false;

                button.classList.remove("success");
                button.classList.remove("error");

                button.innerHTML = originalHTML;

            }, 3000);

        }

    });

}
// ==========================================
// Part 5 - Initialization
// ==========================================

// ===== Counter Animation =====

function animateCounters() {

    const counters = document.querySelectorAll(".hero-stat-number");

    counters.forEach(counter => {

        const text = counter.textContent;

        const match = text.match(/(\d+)/);

        if (!match) return;

        const target = parseInt(match[1]);

        const suffix = text.replace(match[1], "");

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

// ==========================================
// Load Portfolio Data
// ==========================================

async function loadData() {

    try {

        const response = await fetch("data.json");

        if (!response.ok)
            throw new Error("Unable to load data.json");

        portfolioData = await response.json();

        renderPortfolio(portfolioData);

        initializeContactForm();

        animateCounters();

    }
    catch (error) {

        console.error("Portfolio Error:", error);

        document.getElementById("hero-title").innerHTML =
            `Hi, I'm <span class="accent">Dinesh Guragain</span>.<br>Full Stack .NET Developer.`;

        document.getElementById("hero-description").textContent =
            "Unable to load portfolio data.";

    }

}

// ==========================================
// Theme Watcher
// ==========================================

window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", e => {

        if (!localStorage.getItem("theme")) {

            setTheme(e.matches ? "dark" : "light");

        }

    });

// ==========================================
// DOM Ready
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    loadData();

});

// ==========================================
// End of Scrypt.js
// ==========================================