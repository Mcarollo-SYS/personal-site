import './styles/style.css';
import { projectsData } from './config/data.js';
import Modal from './UI/Modal.js';
import { animate, stagger } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal();
    const grid = document.getElementById('projects-grid');

    // 1. Inizializza Sfondo Particellare Canvas
    initParticleCanvas();

    // 2. Renderizza le Card dei Progetti
    renderProjects(projectsData);

    // 3. Stagger Intro Animations con Anime.js v4
    animate('.navbar', { opacity: [0, 1], translateY: [-20, 0], duration: 800, ease: 'outQuad' });
    animate('.hero-tag', { opacity: [0, 1], translateY: [15, 0], duration: 600, delay: 200, ease: 'outQuad' });
    animate('.hero-title', { opacity: [0, 1], translateY: [20, 0], duration: 800, delay: 300, ease: 'outCubic' });
    animate('.hero-subtitle', { opacity: [0, 1], translateY: [20, 0], duration: 800, delay: 400, ease: 'outCubic' });
    animate('.filter-btn', { opacity: [0, 1], translateY: [15, 0], delay: stagger(80, { start: 500 }), duration: 600, ease: 'outQuad' });
    
    animate('.project-card', {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(100, { start: 700 }),
        duration: 800,
        ease: 'outExpo'
    });

    // 4. Gestione Filtri Dinamici
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const filter = e.currentTarget.getAttribute('data-filter');
            const filteredData = filter === 'all' 
                ? projectsData 
                : projectsData.filter(p => p.category === filter);

            // Transizione di uscita e rientro delle card
            animate('.project-card', {
                opacity: 0,
                scale: 0.95,
                duration: 250,
                ease: 'inQuad',
                onComplete: () => {
                    renderProjects(filteredData);
                    animate('.project-card', {
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        translateY: [20, 0],
                        delay: stagger(80),
                        duration: 500,
                        ease: 'outCubic'
                    });
                }
            });
        });
    });

    // Funzione di Render Card
    function renderProjects(data) {
        grid.innerHTML = '';
        data.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div>
                    <div class="card-header">
                        <span class="card-category">${p.categoryName}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square card-icon"></i>
                    </div>
                    <h2 class="card-title">${p.title}</h2>
                    <p class="card-desc">${p.desc}</p>
                </div>
                <div class="card-tags">
                    ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
                </div>
            `;

            card.addEventListener('click', () => {
                animate(card, { scale: [0.97, 1], duration: 250, ease: 'outBack' });
                modal.open(p);
            });

            grid.appendChild(card);
        });
    }

    // Effetto Sfondo Particellare
    function initParticleCanvas() {
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.2,
            speedY: Math.random() * 0.3 + 0.1
        }));

        function draw() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.y -= p.speedY;
                if (p.y < 0) p.y = height;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }
        draw();
    }
});