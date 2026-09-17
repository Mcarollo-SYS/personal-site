/* ===================================================================
   RENDER — Funzioni di rendering del DOM
=================================================================== */

function renderMeta() {
    const el = document.getElementById("metaRow");
    if (!el) return;
    el.innerHTML = META.map(m => `
      <div class="meta-cell">
        <div class="meta-label">${m.label}</div>
        <div class="meta-value">${m.value}</div>
      </div>
    `).join("");
  }
  
  function renderFilters(activeCategory) {
    const categories = ["Tutti", ...new Set(PROJECTS.map(p => p.category))];
    const el = document.getElementById("filters");
    if (!el) return;
    
    el.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === activeCategory ? "is-active" : ""}" data-filter="${cat}">
        ${cat}
      </button>
    `).join("");
  
    el.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        renderFilters(btn.dataset.filter);
        renderProjects(btn.dataset.filter);
      });
    });
  }
  
  function renderProjects(filter) {
    const list = filter && filter !== "Tutti"
      ? PROJECTS.filter(p => p.category === filter)
      : PROJECTS;
  
    const el = document.getElementById("projectList");
    if (!el) return;
  
    el.innerHTML = list.map((p, i) => `
      <div class="project-row" data-id="${p.id}">
        <div class="project-row-head">
          <div class="index-number">${String(i + 1).padStart(2, "0")}</div>
          <div class="project-title">${p.title}</div>
          <div class="project-tag">${p.category}</div>
          <div class="project-year">${p.year}</div>
          <div class="project-plus">+</div>
        </div>
        <div class="project-detail">
          <div class="project-detail-inner">
            <div class="project-detail-content">
              <p class="project-desc">${p.description}</p>
              <div class="project-stack">
                ${p.stack.map(s => `<span class="stack-chip">${s}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  
    el.querySelectorAll(".project-row").forEach(row => {
      row.querySelector(".project-row-head").addEventListener("click", () => {
        const isOpen = row.classList.contains("is-open");
        el.querySelectorAll(".project-row.is-open").forEach(r => r.classList.remove("is-open"));
        if (!isOpen) row.classList.add("is-open");
      });
    });
  }
  
  function renderSkills() {
    const el = document.getElementById("skillsGrid");
    if (!el) return;
  
    el.innerHTML = SKILLS.map(group => `
      <div>
        <div class="skill-group-title">${group.group}</div>
        ${group.items.map(item => `
          <div class="skill-item">
            <div class="skill-item-top">
              <span>${item.name}</span>
            </div>
            <div class="skill-bar">
              <div class="skill-bar-fill" style="width:${item.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");
  }
  
  function renderTimeline() {
    const el = document.getElementById("timeline");
    if (!el) return;
  
    el.innerHTML = EXPERIENCE.map(e => `
      <div class="timeline-row">
        <div class="timeline-year">${e.year}</div>
        <div>
          <div class="timeline-title">${e.title}</div>
          <div class="timeline-org">${e.org}</div>
        </div>
        <div class="timeline-desc">${e.desc}</div>
      </div>
    `).join("");
  }
  
  /* ===================================================================
     INTERACTIVE LOGIC — Scroll-spy & Navigation Mobile
  =================================================================== */
  
  function initScrollSpy() {
    const links = document.querySelectorAll("[data-nav]");
    const sections = [...links].map(l => document.querySelector(l.getAttribute("href")));
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = "#" + entry.target.id;
        const link = document.querySelector(`[data-nav][href="${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
  
    sections.forEach(s => s && observer.observe(s));
  }
  
  function initMobileNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;
  
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  
  /* ===================================================================
     INITIALIZATION
  =================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    renderMeta();
    renderFilters("Tutti");
    renderProjects("Tutti");
    renderSkills();
    renderTimeline();
    initScrollSpy();
    initMobileNav();
    playIntroAnimation();
  });

/* ===================================================================
   ANIME.JS INTRO — INCREMENTAL SCROLL WITH LOCKED BODY
=================================================================== */
let introTimeline = null;
let isIntroActive = true;
let scrollProgress = 0; // Da 0 a 1
const THRESHOLD = 0.35; // Soglia del 35% per completare l'uscita

function updateIntroProgress(delta) {
  if (!isIntroActive) return;

  // Incrementa la percentuale di trascinamento
  scrollProgress += delta;
  scrollProgress = Math.max(0, Math.min(1, scrollProgress));

  const overlay = document.getElementById('intro-overlay');
  const mainElements = document.querySelectorAll('header.nav, main, footer');

  // Sposta solo l'overlay verso l'alto
  if (overlay) {
    overlay.style.transform = `translateY(-${scrollProgress * 100}%)`;
  }

  // Aumenta l'opacità dei contenuti sottostanti (rimangono fermi in alto)
  mainElements.forEach(el => {
    el.style.opacity = scrollProgress;
  });

  // Se supera la soglia, completa l'uscita
  if (scrollProgress >= THRESHOLD) {
    completeIntroExit();
  }
}

function completeIntroExit() {
  if (!isIntroActive) return;
  isIntroActive = false;

  if (introTimeline) {
    introTimeline.pause();
  }

  // Completa l'uscita dell'overlay
  anime({
    targets: '#intro-overlay',
    translateY: '-100%',
    duration: 500,
    easing: 'easeOutQuad',
    complete: function() {
      const overlay = document.getElementById('intro-overlay');
      if (overlay) overlay.style.display = 'none';

      // Sblocca lo scroll della pagina e forza la posizione all'inizio (top: 0)
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, 0);
    }
  });

  // Rendi completamente visibile il sito
  anime({
    targets: ['header.nav', 'main', 'footer'],
    opacity: 1,
    translateY: 0,
    duration: 400,
    easing: 'easeOutQuad'
  });
}

function playIntroAnimation() {
  isIntroActive = true;
  scrollProgress = 0;

  // Blocca lo scroll ed assicura che si trovi in cima
  document.body.classList.add('no-scroll');
  window.scrollTo(0, 0);

  introTimeline = anime.timeline({
    easing: 'easeOutExpo'
  });

  // 1. Nome che appare dal basso
  introTimeline.add({
    targets: '.intro-name',
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1000,
    delay: 200
  });

  // 2. Transizione testi slider
  const slides = document.querySelectorAll('.slide-text');
  slides.forEach((slide, index) => {
    introTimeline.add({
      targets: slide,
      opacity: [
        { value: [0, 1], duration: 400 },
        { value: [1, 0], duration: 400, delay: 600 }
      ],
      translateY: [
        { value: [20, 0], duration: 400 },
        { value: [0, -20], duration: 400, delay: 600 }
      ]
    }, `-=${index === 0 ? 300 : 0}`);
  });

  // 3. Chiusura automatica a fine timer
  introTimeline.add({
    targets: '#intro-overlay',
    translateY: '-100%',
    duration: 1000,
    easing: 'easeInOutQuint',
    complete: function() {
      if (isIntroActive) {
        completeIntroExit();
      }
    }
  });

  introTimeline.add({
    targets: ['header.nav', 'main', 'footer'],
    opacity: [0, 1],
    duration: 800
  }, '-=800');

  // ==========================================
  // EVENTI DI SCROLL INTERCETTATI
  // ==========================================

  // Mouse Wheel / Touchpad
  window.addEventListener('wheel', (e) => {
    if (!isIntroActive) return;
    // Intercetta solo lo scroll verso il basso
    if (e.deltaY > 0) {
      const delta = e.deltaY * 0.0015;
      updateIntroProgress(delta);
    }
  }, { passive: true });

  // Touch / Mobile
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    if (isIntroActive) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isIntroActive) return;
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartY - currentY;
    
    if (deltaY > 0) { // Solo trascinamento verso l'alto (scroll giù)
      const deltaProgress = deltaY / window.innerHeight;
      updateIntroProgress(deltaProgress * 0.6);
    }
    
    touchStartY = currentY;
  }, { passive: true });
}