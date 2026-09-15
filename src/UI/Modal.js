import { animate } from 'animejs';

export default class Modal {
    constructor() {
        this.backdrop = document.getElementById('project-modal');
        this.closeBtn = document.getElementById('modal-close');
        this.init();
    }

    init() {
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        if (this.backdrop) {
            this.backdrop.addEventListener('click', (e) => {
                if (e.target === this.backdrop) this.close();
            });
        }
    }

    open(data) {
        if (!this.backdrop) return;

        document.getElementById('modal-category').innerText = data.categoryName || 'PROGETTO';
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-desc').innerText = data.fullDesc || data.desc;
        document.getElementById('modal-arch').innerText = data.architecture;

        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = data.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');

        const footer = document.getElementById('modal-footer');
        footer.innerHTML = '';
        if (data.github) {
            footer.innerHTML = `
                <a href="${data.github}" target="_blank" class="btn-action btn-github">
                    <i class="fa-brands fa-github"></i> Apri Repository GitHub
                </a>
            `;
        }

        this.backdrop.classList.add('active');

        // Pop-In animation con Anime.js v4
        animate('.modal-card', {
            scale: [0.85, 1],
            opacity: [0, 1],
            duration: 400,
            ease: 'outBack'
        });
    }

    close() {
        if (!this.backdrop) return;
        animate('.modal-card', {
            scale: [1, 0.9],
            opacity: [1, 0],
            duration: 250,
            ease: 'inQuad',
            onComplete: () => {
                this.backdrop.classList.remove('active');
            }
        });
    }
}