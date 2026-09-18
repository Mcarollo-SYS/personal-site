import {
  META,
  PROJECTS,
  SKILLS,
  EXPERIENCE
} from "./data.js";

import {
  animate,
  createTimeline,
  remove,
  stagger,
  svg
} from "https://cdn.jsdelivr.net/npm/animejs@4.2.2/+esm";


/* ===================================================================
   RENDER — META
=================================================================== */

function renderMeta() {
  const el = document.getElementById("metaRow");

  if (!el) return;

  el.innerHTML = META.map(item => `
    <div class="meta-cell">
      <div class="meta-label">${item.label}</div>
      <div class="meta-value">${item.value}</div>
    </div>
  `).join("");
}


/* ===================================================================
   PROJECT FILTERS
=================================================================== */

function renderFilters(activeCategory) {
  const categories = [
    "Tutti",
    ...new Set(PROJECTS.map(project => project.category))
  ];

  const el = document.getElementById("filters");

  if (!el) return;

  el.innerHTML = categories.map(category => `
    <button
      class="filter-btn ${category === activeCategory ? "is-active" : ""}"
      data-filter="${category}"
      type="button"
    >
      ${category}
    </button>
  `).join("");

  el.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      renderFilters(category);
      renderProjects(category);
    });
  });
}


/* ===================================================================
   PROJECTS
=================================================================== */

function renderProjects(filter = "Tutti") {
  const list =
    filter && filter !== "Tutti"
      ? PROJECTS.filter(project => project.category === filter)
      : PROJECTS;

  const el = document.getElementById("projectList");

  if (!el) return;

  el.innerHTML = list.map((project, index) => `
    <div
      class="project-row"
      data-id="${project.id}"
    >

      <div class="project-row-head">

        <div class="index-number">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="project-title">
          ${project.title}
        </div>

        <div class="project-tag">
          ${project.category}
        </div>

        <div class="project-year">
          ${project.year}
        </div>

        <div class="project-plus">
          +
        </div>

      </div>


      <div class="project-detail">

        <div class="project-detail-inner">

          <div class="project-detail-content">

            <p class="project-desc">
              ${project.description}
            </p>

            <div class="project-stack">
              ${project.stack.map(stackItem => `
                <span class="stack-chip">
                  ${stackItem}
                </span>
              `).join("")}
            </div>

            ${
              project.motionPath
                ? `
                  <div class="project-motion">

                    <svg
                      class="motion-svg"
                      viewBox="0 0 800 300"
                      xmlns="http://www.w3.org/2000/svg"
                    >

                      <path
                        class="motion-path"
                        d="
                          M 40 220
                          C 140 80,
                            220 80,
                            300 180
                          S 470 300,
                            560 150
                          S 700 40,
                            760 100
                        "
                        fill="none"
                      />

                      <g class="motion-car">

                        <rect
                          x="-22"
                          y="-10"
                          width="44"
                          height="20"
                          rx="4"
                        />

                        <circle
                          cx="-13"
                          cy="12"
                          r="5"
                        />

                        <circle
                          cx="13"
                          cy="12"
                          r="5"
                        />

                      </g>

                    </svg>

                  </div>
                `
                : ""
            }

          </div>

        </div>

      </div>

    </div>
  `).join("");

  initProjectAnimations();
  initProjectMotionPaths();
}


/* ===================================================================
   TIMELINE
=================================================================== */

function renderTimeline() {
  const el = document.getElementById("timeline");

  if (!el) return;

  el.innerHTML = EXPERIENCE.map(item => `
    <div class="timeline-row">

      <div class="timeline-year">
        ${item.year}
      </div>

      <div>

        <div class="timeline-title">
          ${item.title}
        </div>

        <div class="timeline-org">
          ${item.org}
        </div>

      </div>

      <div class="timeline-desc">
        ${item.desc}
      </div>

    </div>
  `).join("");
}


/* ===================================================================
   SKILLS — INTERACTIVE
=================================================================== */

function initSkillsInterface() {
  const buttons =
    document.querySelectorAll(".skill-nav-item");

  const category =
    document.getElementById("skillsCategory");

  const description =
    document.getElementById("skillsDescription");

  const tags =
    document.getElementById("skillsTags");

  const counter =
    document.getElementById("skillsCounter");

  if (
    !buttons.length ||
    !category ||
    !description ||
    !tags ||
    !counter
  ) {
    return;
  }

  function updateSkills(type) {
    const data = SKILLS[type];

    if (!data) return;

    remove([
      category,
      description,
      tags,
      counter
    ]);

    animate(
      [
        category,
        description,
        tags,
        counter
      ],
      {
        opacity: 0,
        translateY: 12,
        duration: 180,
        ease: "inQuad",

        onComplete: () => {

          category.textContent = data.title;

          description.textContent =
            data.description;

          counter.textContent =
            data.number;

          tags.innerHTML =
            data.tags
              .map(tag => `
                <span class="skill-tag">
                  ${tag}
                </span>
              `)
              .join("");

          animate(
            [
              category,
              description,
              tags,
              counter
            ],
            {
              opacity: [0, 1],
              translateY: [12, 0],
              duration: 450,
              delay: stagger(60),
              ease: "outCubic"
            }
          );
        }
      }
    );

    buttons.forEach(button => {
      button.classList.toggle(
        "is-active",
        button.dataset.skill === type
      );
    });
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      updateSkills(button.dataset.skill);
    });
  });

  updateSkills("software");
}


/* ===================================================================
   SCROLL SPY
=================================================================== */

function initScrollSpy() {
  const links =
    document.querySelectorAll("[data-nav]");

  const sections = [...links]
    .map(link => {
      const selector =
        link.getAttribute("href");

      return document.querySelector(selector);
    })
    .filter(Boolean);

  if (!sections.length) return;

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          const id =
            `#${entry.target.id}`;

          const link =
            document.querySelector(
              `[data-nav][href="${id}"]`
            );

          if (!link) return;

          links.forEach(item => {
            item.classList.remove("is-active");
          });

          link.classList.add("is-active");
        });

      },
      {
        rootMargin: "-40% 0px -50% 0px"
      }
    );

  sections.forEach(section => {
    observer.observe(section);
  });
}


/* ===================================================================
   MOBILE NAVIGATION
=================================================================== */

function initMobileNav() {
  const toggle =
    document.getElementById("navToggle");

  const links =
    document.getElementById("navLinks");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {

    const isOpen =
      links.classList.toggle("is-open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  links.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      links.classList.remove("is-open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });
}


/* ===================================================================
   PROJECT ANIMATIONS
=================================================================== */

function initProjectAnimations() {
  const rows =
    document.querySelectorAll(".project-row");

  if (!rows.length) return;

  rows.forEach(row => {

    const head =
      row.querySelector(".project-row-head");

    const index =
      row.querySelector(".index-number");

    const plus =
      row.querySelector(".project-plus");

    const detail =
      row.querySelector(".project-detail");

    const chips =
      row.querySelectorAll(".stack-chip");

    if (!head || !detail) return;

    detail.style.height = "0px";
    detail.style.overflow = "hidden";


    /* ---------------------------------------------------------------
       HOVER
    --------------------------------------------------------------- */

    head.addEventListener("mouseenter", () => {

      if (!window.matchMedia("(hover: hover)").matches) {
        return;
      }

      remove(plus);
      remove(index);

      animate(plus, {
        rotate: 45,
        scale: 1.15,
        duration: 300,
        ease: "outBack"
      });

      animate(index, {
        scale: 1.08,
        duration: 250,
        ease: "outQuad"
      });
    });


    head.addEventListener("mouseleave", () => {

      remove(plus);
      remove(index);

      animate(index, {
        scale: 1,
        duration: 250,
        ease: "outQuad"
      });

      animate(plus, {
        rotate: row.classList.contains("is-open")
          ? 45
          : 0,

        scale: row.classList.contains("is-open")
          ? 1.15
          : 1,

        duration: 300,
        ease: "outQuad"
      });
    });


    /* ---------------------------------------------------------------
       CLICK
    --------------------------------------------------------------- */

    head.addEventListener("click", () => {

      const isOpen =
        row.classList.contains("is-open");


      /* -------------------------------------------------------------
         CLOSE OTHER ROWS
      ------------------------------------------------------------- */

      rows.forEach(otherRow => {

        if (otherRow === row) return;

        if (!otherRow.classList.contains("is-open")) {
          return;
        }

        otherRow.classList.remove("is-open");

        const otherDetail =
          otherRow.querySelector(".project-detail");

        const otherPlus =
          otherRow.querySelector(".project-plus");

        if (otherDetail) {

          remove(otherDetail);

          animate(otherDetail, {
            height: 0,
            duration: 400,
            ease: "inOutQuad"
          });
        }

        if (otherPlus) {

          remove(otherPlus);

          animate(otherPlus, {
            rotate: 0,
            scale: 1,
            duration: 300,
            ease: "outQuad"
          });
        }
      });


      /* =============================================================
         OPEN
      ============================================================= */

      if (!isOpen) {

        row.classList.add("is-open");

        detail.style.display = "block";
        detail.style.height = "auto";

        const height =
          detail.scrollHeight;

        detail.style.height = "0px";

        remove(detail);

        animate(detail, {
          height,
          duration: 500,
          ease: "outQuart",

          onComplete: () => {
            detail.style.height = "auto";
          }
        });


        remove(plus);

        animate(plus, {
          rotate: 45,
          scale: 1.15,
          duration: 400,
          ease: "outBack"
        });


        if (chips.length) {

          remove(chips);

          animate(chips, {
            translateY: [15, 0],
            opacity: [0, 1],
            delay: stagger(60),
            duration: 400,
            ease: "outCubic"
          });
        }

      }


      /* =============================================================
         CLOSE
      ============================================================= */

      else {

        row.classList.remove("is-open");

        detail.style.height =
          `${detail.scrollHeight}px`;

        detail.offsetHeight;

        remove(detail);

        animate(detail, {
          height: 0,
          duration: 400,
          ease: "inOutQuad",

          onComplete: () => {
            detail.style.height = "0px";
          }
        });


        remove(plus);

        animate(plus, {
          rotate: 0,
          scale: 1,
          duration: 300,
          ease: "outQuad"
        });
      }
    });
  });
}


/* ===================================================================
   PROJECT — SVG MOTION PATH
=================================================================== */

function initProjectMotionPaths() {

  const projects =
    document.querySelectorAll(".project-row");

  projects.forEach(project => {

    const motionSvg =
      project.querySelector(".motion-svg");

    const path =
      project.querySelector(".motion-path");

    const car =
      project.querySelector(".motion-car");

    if (!motionSvg || !path || !car) {
      return;
    }


    const motionPath =
      svg.createMotionPath(path);


    animate(car, {
      ...motionPath,
      ease: "linear",
      duration: 5000,
      loop: true
    });


    const drawable =
      svg.createDrawable(path);

    animate(drawable, {
      draw: "0 1",
      ease: "linear",
      duration: 5000,
      loop: true
    });

  });
}

/* ===================================================================
   INTRO
=================================================================== */

let introTimeline = null;
let isIntroActive = true;
let introFinished = false;

const introOverlay =
  document.getElementById("intro-overlay");


/* ===================================================================
   COMPLETE INTRO EXIT
=================================================================== */

function completeIntroExit() {

  if (introFinished) {
    return;
  }

  introFinished = true;
  isIntroActive = false;

  if (introTimeline) {
    introTimeline.pause();
  }


  /*
   * Riabilita immediatamente lo scroll normale.
   */

  document.body.classList.remove("no-scroll");


  /*
   * Mostra il sito.
   */

  const mainElements = document.querySelectorAll(
    "header.nav, main, footer"
  );

  mainElements.forEach(element => {

    element.style.opacity = "1";
    element.style.transform = "none";

  });


  /*
   * Chiude l'intro.
   */

  if (introOverlay) {

    introOverlay.style.pointerEvents = "none";

    animate(introOverlay, {

      translateY: "-100%",
      opacity: 0,

      duration: 550,
      ease: "outCubic",

      onComplete: () => {

        introOverlay.style.display = "none";
        introOverlay.style.visibility = "hidden";

      }

    });

  }


  /*
   * Rimuoviamo i listener dell'intro.
   */

  window.removeEventListener(
    "wheel",
    handleIntroWheel
  );

  window.removeEventListener(
    "touchstart",
    handleIntroTouchStart
  );

  window.removeEventListener(
    "touchmove",
    handleIntroTouchMove
  );

}




/* ===================================================================
   WHEEL
=================================================================== */


function handleIntroWheel(event) {
  if (!isIntroActive) return;

  // Qualsiasi scroll verso il basso chiude completamente l'intro.
  if (event.deltaY > 0) {
    event.preventDefault();

    if (introTimeline) {
      introTimeline.pause();
    }

    completeIntroExit();
  }
}



/* ===================================================================
   TOUCH
=================================================================== */

let touchStartY = 0;


function handleIntroTouchStart(event) {

  if (!isIntroActive) {
    return;
  }

  touchStartY =
    event.touches[0].clientY;

}


function handleIntroTouchMove(event) {

  if (!isIntroActive) {
    return;
  }

  const currentY =
    event.touches[0].clientY;

  const delta =
    touchStartY - currentY;


  if (delta > 0) {


    touchStartY = currentY;

  }

}


/* ===================================================================
   PLAY INTRO
=================================================================== */

function playIntroAnimation() {

  if (!introOverlay) {
    return;
  }


  isIntroActive = true;
  introFinished = false;


  /*
   * Blocchiamo temporaneamente lo scroll della pagina.
   */

  document.body.classList.add("no-scroll");


  /*
   * Stato iniziale.
   */

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });


  introOverlay.style.display = "flex";
  introOverlay.style.visibility = "visible";
  introOverlay.style.pointerEvents = "auto";
  introOverlay.style.opacity = "1";
  introOverlay.style.transform =
    "translateY(0)";


  /*
   * Contenuto principale nascosto.
   */

  const mainElements = document.querySelectorAll(
    "header.nav, main, footer"
  );

  mainElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "none";

  });


  /* ===============================================================
     TIMELINE AUTOMATICA
  =============================================================== */

  introTimeline = createTimeline({

    defaults: {
      ease: "outExpo"
    }

  });


  /*
   * Nome.
   */

  introTimeline.add(".intro-name", {

    opacity: [0, 1],
    translateY: [40, 0],

    duration: 900,
    delay: 200

  });


  /*
   * Testi.
   */

  const slides =
    document.querySelectorAll(".slide-text");


  slides.forEach((slide, index) => {

    introTimeline.add(slide, {

      opacity: [0, 1],
      translateY: [20, 0],

      duration: 350

    });


    introTimeline.add(slide, {

      opacity: [1, 0],
      translateY: [0, -20],

      duration: 350,
      delay:
        index === slides.length - 1
          ? 500
          : 350

    });

  });


  /*
   * Fine automatica.
   */

  introTimeline.call(() => {

    if (!introFinished) {

      completeIntroExit();

    }

  });


  /* ===============================================================
     EVENTI
  =============================================================== */

  window.addEventListener(
    "wheel",
    handleIntroWheel,
    {
      passive: false
    }
  );


  window.addEventListener(
    "touchstart",
    handleIntroTouchStart,
    {
      passive: true
    }
  );


  window.addEventListener(
    "touchmove",
    handleIntroTouchMove,
    {
      passive: true
    }
  );

}





/* ===================================================================
   INITIALIZATION
=================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  renderMeta();

  renderFilters("Tutti");

  renderProjects("Tutti");

  renderTimeline();

  initSkillsInterface();

  initScrollSpy();

  initMobileNav();

  playIntroAnimation();

});