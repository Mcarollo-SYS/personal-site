/* ===================================================================
   DATA — modifica qui contenuti e testi
=================================================================== */

const META = [
    { label: "Basato a",       value: "Milano, IT" },
    { label: "Disponibile da",  value: "Gennaio 2027" },
    { label: "Focus",           value: "Backend & Sistemi" },
    { label: "Esperienza",      value: "3+ anni" }
  ];
  
  const PROJECTS = [
    {
      id: "nimbus",
      title: "Nimbus API",
      category: "Backend",
      year: "2026",
      description: "Sistema di code distribuito per l'elaborazione asincrona di migliaia di richieste al minuto, con retry automatici e tracciamento end-to-end.",
      stack: ["Node.js", "PostgreSQL", "Redis", "Docker"]
    },
    {
      id: "ledger",
      title: "Ledger",
      category: "Dati",
      year: "2025",
      description: "Pipeline ETL per la riconciliazione automatica di transazioni finanziarie tra sistemi eterogenei, con validazione e reportistica giornaliera.",
      stack: ["Python", "Pandas", "Airflow", "PostgreSQL"]
    },
    {
      id: "formwork",
      title: "Formwork",
      category: "Frontend",
      year: "2025",
      description: "Design system componibile adottato in tre prodotti interni, con documentazione viva e test visivi automatizzati.",
      stack: ["React", "TypeScript", "Storybook"]
    },
    {
      id: "watchtower",
      title: "Watchtower",
      category: "Sistemi",
      year: "2024",
      description: "Servizio di monitoraggio e alerting per infrastrutture containerizzate, con dashboard in tempo reale e soglie configurabili.",
      stack: ["Go", "Docker", "Prometheus", "Grafana"]
    },
    {
      id: "relay",
      title: "Relay",
      category: "Backend",
      year: "2024",
      description: "Gateway GraphQL che unifica sette microservizi legacy dietro un'unica interfaccia, riducendo il tempo di integrazione del team frontend.",
      stack: ["Node.js", "GraphQL", "Kubernetes"]
    },
    {
      id: "atlas-cli",
      title: "Atlas CLI",
      category: "Sistemi",
      year: "2024",
      description: "Strumento open source a riga di comando per la gestione di configurazioni multi-ambiente, con validazione dello schema integrata.",
      stack: ["Rust", "Open Source"]
    }
  ];
  
  const SKILLS = [
    {
      group: "Linguaggi",
      items: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Go", level: 65 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      group: "Framework",
      items: [
        { name: "Node.js / Express", level: 88 },
        { name: "React", level: 75 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      group: "Infrastruttura",
      items: [
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 60 },
        { name: "AWS", level: 68 }
      ]
    },
    {
      group: "Strumenti",
      items: [
        { name: "Git", level: 92 },
        { name: "PostgreSQL / Redis", level: 78 },
        { name: "Prometheus / Grafana", level: 62 }
      ]
    }
  ];
  
  const EXPERIENCE = [
    {
      year: "2026 — oggi",
      title: "Software Engineer Freelance",
      org: "Progetti indipendenti",
      desc: "Consulenza su architetture backend e sistemi di dati per piccoli team e startup."
    },
    {
      year: "2023 — 2026",
      title: "Backend Developer",
      org: "Azienda tech, Milano",
      desc: "Sviluppo e manutenzione di servizi backend in produzione, migrazione verso un'architettura a microservizi."
    },
    {
      year: "2019 — 2023",
      title: "Laurea in Informatica",
      org: "Università di Bologna",
      desc: "Tesi su algoritmi di scheduling per sistemi distribuiti."
    }
  ];