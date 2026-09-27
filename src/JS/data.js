/**
 * ===================================================================
 * DATA — modifica qui contenuti e testi
 * ===================================================================
 */

export const META = [
  { label: "Siti web", value: "Vetrina · Landing · Portfolio" },
  { label: "Applicazioni", value: "Web · Mobile · Prototipi" },
  { label: "Integrazioni", value: "API · Servizi · Dati" },
  { label: "Supporto", value: "Revisione · Cura tecnica" }
];

export const PROJECTS = [
  {
    id: "progetto-gpo",
    title: "GPO — Ambiente 3D interattivo",
    category: "Web · 3D",
    year: "2025",
    description:
      "Prototipo web sviluppato in team con Three.js e Cannon.js. La scena 3D include un veicolo guidabile e una simulazione fisica con gravità, attrito e collisioni, oltre a telecamera e illuminazione dinamiche. Ho contribuito allo sviluppo e al coordinamento del lavoro del gruppo.",
    repository: "https://github.com/Mcarollo-SYS/Progetto-GPO",
    stack: [
      "JavaScript",
      "Three.js",
      "WebGL",
      "Cannon.js",
      "HTML",
      "CSS",
      "Git"
    ],
    motionPath: true
  },

  {
    id: "notespese",
    title: "NoteSpese — Gestione delle spese",
    category: "Mobile · full stack",
    year: "2025",
    description:
      "Applicazione mobile per registrare entrate e uscite, consultare un riepilogo mensile e filtrare le transazioni. Il progetto collega un client Flutter a un'API REST in PHP e a un database MySQL, con autenticazione, operazioni CRUD e grafici per visualizzare i dati.",
    repository: "https://github.com/Mcarollo-SYS/PROGETTO-FLUTTER",
    stack: [
      "Flutter",
      "Dart",
      "PHP",
      "REST API",
      "MySQL",
      "Provider",
      "fl_chart"
    ]
  },

  {
    id: "tps-web-service",
    title: "TPS Web Service — Gestione concessionario",
    category: "Web service · Java",
    year: "2025",
    description:
      "Web service per gestire auto, marche e clienti, con un'API PHP che scambia dati XML e un database MySQL. Un client desktop Java Swing consente di consultare i dati e svolgere operazioni di creazione, aggiornamento ed eliminazione tramite richieste HTTP.",
    repository: "https://github.com/Mcarollo-SYS/TPS-WEB_SERVICE",
    stack: [
      "Java",
      "PHP",
      "MySQL",
      "XML",
      "JAXB",
      "HTTP"
    ]
  },

  {
    id: "escape-room",
    title: "Escape Room — Gioco 2D in Java",
    category: "Java · videogiochi",
    year: "2025",
    description:
      "Gioco puzzle 2D con visuale dall'alto, realizzato in Java. Il codice separa modello, interfaccia e controlli con l'architettura MVC; include una mappa a tile, rilevamento delle collisioni e un esercizio di concorrenza Producer–Consumer con buffer condiviso.",
    repository: "https://github.com/Mcarollo-SYS/Escape-room-4-year",
    stack: [
      "Java",
      "Java Swing",
      "MVC",
      "Multithreading",
      "Tile engine"
    ]
  },

];

/**
 * Percorso formativo
 */
export const EXPERIENCE = [
  {
    year: "2025 — oggi",
    title: "Ingegneria dell'Automazione e dei Sistemi",
    org: "Università degli Studi di Padova",
    desc:
      "Percorso universitario orientato all'automazione, ai sistemi di controllo, alla programmazione e ai fondamenti dell'ingegneria dei sistemi."
  },

  {
    year: "2025",
    title: "Diploma di Informatica",
    org: "ITIS Max Planck",
    desc:
      "Formazione tecnica in informatica con esperienza nello sviluppo software, programmazione Java, sviluppo web, database, networking e servizi web."
  },

  {
    year: "2025",
    title: "PCTO — Sviluppo software",
    org: "Ideagrip",
    desc:
      "Esperienza formativa su database SQL e Crystal Reports, seguita da attività di sviluppo con Flutter e realizzazione di componenti per un portale aziendale."
  }
];
