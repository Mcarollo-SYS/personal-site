<div align="center">

# MATTEO CAROLLO

### Siti web e strumenti digitali · Matteo Carollo

Siti web su misura, strumenti digitali e supporto tecnico per freelance e piccole attività. I progetti mostrano esempi concreti del lavoro e dell’approccio.

<br>

![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![Vercel](https://img.shields.io/badge/Hosting-Vercel%20ready-111111?style=for-the-badge&logo=vercel&logoColor=white)

[Progetti](#progetti) · [Tecnologie](#tecnologie) · [Avvio-locale](#avvio-locale) · [Struttura](#struttura) · [Sicurezza](#sicurezza)

</div>

---

## Il progetto

Il sito presenta i servizi di Matteo Carollo: realizzazione di siti web, prototipi e strumenti digitali, integrazioni e interventi tecnici di base. I progetti selezionati offrono esempi concreti delle competenze e del metodo di lavoro. L’interfaccia mantiene una direzione visiva essenziale, con animazioni leggere e contenuti aggiornabili da file dedicati.

È un sito statico realizzato con HTML, CSS e JavaScript: non richiede un backend né un database.

## Progetti

Una selezione di lavori con descrizioni, tecnologie e collegamenti ai repository:

| Progetto | Descrizione | Tecnologie |
| --- | --- | --- |
| [GPO — Ambiente 3D interattivo](https://github.com/Mcarollo-SYS/Progetto-GPO) | Scena web esplorabile con veicolo guidabile e simulazione fisica. | JavaScript, Three.js, Cannon.js |
| [NoteSpese](https://github.com/Mcarollo-SYS/PROGETTO-FLUTTER) | App mobile per registrare e analizzare entrate e uscite, collegata a un'API. | Flutter, PHP, MySQL, REST |
| [TPS Web Service](https://github.com/Mcarollo-SYS/TPS-WEB_SERVICE) | API per gestire auto, marche e clienti, con client desktop Java. | Java, PHP, MySQL, XML |
| [Escape Room](https://github.com/Mcarollo-SYS/Escape-room-4-year) | Gioco puzzle 2D con architettura MVC e logica concorrente. | Java, Swing, multithreading |
| [Aegis Home](https://github.com/Mcarollo-SYS/Aegis-home) | Progetto in sviluppo per monitorare il traffico e gli eventi di sicurezza di una rete domestica. | Python, FastAPI, PostgreSQL, React |

## Tecnologie

- **Interfaccia:** HTML, CSS e JavaScript ES modules
- **Build e sviluppo:** Vite
- **Animazioni:** Anime.js, installato come dipendenza npm locale
- **Hosting previsto:** Vercel

Three.js compare nei progetti presentati, ma non è una dipendenza del portfolio.

## Avvio locale

Requisiti: Node.js `20.19+` oppure `22.12+` e npm.

```bash
git clone https://github.com/Mcarollo-SYS/personal-site.git
cd personal-site
npm ci
npm run dev
```

Vite avvia il server di sviluppo su `http://localhost:5174`.

### Build di produzione

```bash
npm run build
npm run preview
```

La build viene generata nella cartella `dist/`; l'anteprima locale usa la porta `4173`.

## Struttura

```text
personal-site/
├── index.html             # Struttura e contenuti statici
├── vercel.json            # Header HTTP per la distribuzione Vercel
├── vite.config.js         # Configurazione del server e della build
└── src/
    ├── CSS/
    │   └── style.css      # Layout, tema e responsive design
    └── JS/
        ├── data.js        # Testi, progetti, competenze e percorso
        └── main.js        # Rendering, interazioni e animazioni
```

### Aggiornare i contenuti

- Modifica progetti, competenze e percorso formativo in `src/JS/data.js`.
- Modifica sezioni e testi di base in `index.html`.
- Modifica stile e adattamento mobile in `src/CSS/style.css`.

## Sicurezza

La configurazione Vercel aggiunge Content Security Policy e header per la protezione da content sniffing, framing indesiderato e accesso non necessario a funzionalità del browser. La policy consente solo le risorse richieste dal sito: asset locali, Google Fonts e l'API pubblica GitHub usata per mostrare la data di aggiornamento del repository Aegis Home.

Anime.js viene servito dal bundle locale, senza import runtime da CDN. I contenuti dei progetti sono creati tramite API DOM e `textContent`.

Per controllare le dipendenze:

```bash
npm audit
```

## Licenza e diritti

© Matteo Carollo. Tutti i diritti riservati. Il codice e i contenuti sono pubblicati a scopo dimostrativo; non è concessa una licenza per riutilizzarli.

---

<div align="center">

Realizzato da **Matteo Carollo** · [GitHub](https://github.com/Mcarollo-SYS)

</div>
