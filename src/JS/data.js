/**
 * ===================================================================
 * DATA — modifica qui contenuti e testi
 * ===================================================================
 */

export const META = [
  { label: "Formazione", value: "Automazione & Sistemi" },
  { label: "Background", value: "Informatica" },
  { label: "Focus", value: "Software · Systems · Security" },
  { label: "Università", value: "UniPD" }
];

export const PROJECTS = [
  {
    id: "3d-web-application",
    title: "3D Web Application",
    category: "Frontend / 3D",
    year: "2025",
    description:
      "Applicazione web interattiva sviluppata in gruppo con un ambiente 3D esplorabile. Il progetto integra una scena WebGL, interazioni con l'ambiente e una componente di fisica. Ho partecipato anche al coordinamento del gruppo e alla gestione del lavoro tramite Git.",
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
    id: "progetto-flutter",
    title: "Progetto Flutter",
    category: "Mobile",
    year: "2025",
    description:
      "Applicazione mobile sviluppata con Flutter e Dart durante il percorso di formazione informatica. Il progetto comprende la realizzazione dell'interfaccia, la logica applicativa e l'integrazione con servizi web.",
    stack: [
      "Flutter",
      "Dart",
      "XML",
      "Web Services",
      "Git"
    ]
  },

  {
    id: "tps-web-service",
    title: "TPS Web Service",
    category: "Web Service",
    year: "2025",
    description:
      "Progetto dedicato alla realizzazione e all'utilizzo di servizi web, con particolare attenzione alla comunicazione tra applicazioni, alla gestione dei dati e all'integrazione tra componenti software.",
    stack: [
      "Java",
      "Web Services",
      "XML",
      "HTTP",
      "Git"
    ]
  },

  {
    id: "escape-room",
    title: "Escape Room",
    category: "Software",
    year: "2025",
    description:
      "Progetto software sviluppato in gruppo per applicare programmazione, progettazione e organizzazione del lavoro. Ho partecipato allo sviluppo e al coordinamento delle attività del gruppo.",
    stack: [
      "Java",
      "OOP",
      "Git",
      "Project Management"
    ]
  },

  {
    id: "progetto-gpo",
    title: "Progetto GPO",
    category: "Systems",
    year: "2025",
    description:
      "Progetto orientato alla configurazione e alla gestione di sistemi Windows attraverso Group Policy, con approfondimento dei concetti di amministrazione dei sistemi e gestione degli ambienti di rete.",
    stack: [
      "Windows",
      "Group Policy",
      "Active Directory",
      "Networking"
    ]
  }
];

/**
 * Competenze principali
 */
export const SKILLS = {
  software: {
    number: "01 / 04",
    title: "SOFTWARE",
    description:
      "Sviluppo software, applicazioni web e strumenti digitali, con particolare attenzione alla struttura del codice e alla progettazione.",
    tags: [
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "Flutter",
      "Dart",
      "Three.js",
      "Git"
    ]
  },

  systems: {
    number: "02 / 04",
    title: "SYSTEMS",
    description:
      "Fondamenti di sistemi operativi, networking e amministrazione di ambienti informatici.",
    tags: [
      "Linux",
      "Bash",
      "TCP/IP",
      "DNS",
      "Firewall",
      "Windows",
      "Active Directory",
      "Git"
    ]
  },

  security: {
    number: "03 / 04",
    title: "CYBERSECURITY",
    description:
      "Percorso di approfondimento orientato alla sicurezza di sistemi e reti, SOC, analisi degli incidenti e gestione delle vulnerabilità.",
    tags: [
      "SOC",
      "MITRE ATT&CK",
      "Phishing Analysis",
      "Incident Response",
      "Vulnerability Management",
      "Network Security",
      "Cloud Security",
      "GRC"
    ]
  },

  automation: {
    number: "04 / 04",
    title: "AUTOMATION",
    description:
      "Formazione universitaria nell'ambito dell'automazione, dei sistemi e del controllo.",
    tags: [
      "Control Systems",
      "Automation",
      "Systems",
      "Programming",
      "Engineering"
    ]
  }
};

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