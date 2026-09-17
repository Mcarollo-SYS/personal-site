# 🌐 Personal Site — Dev Setup & Tunneling Guide

Un portfolio personale moderno, responsive e ad alte prestazioni sviluppato con **HTML5**, **CSS3**, **JavaScript (ES6 Modules)**, **Anime.js** per le animazioni basate sullo scroll e **Three.js** per la resa grafica 3D.

Il progetto include una configurazione pronta all'uso per avviare il dev server locale di **Vite** e condividere il sito in tempo reale tramite tunnel HTTPS pubblici senza effettuare il deploy formale.

---

## 📋 Indice del Documento

1. [Prerequisiti](#1-prerequisiti)
2. [Setup e Installazione](#2-setup-e-installazione)
3. [Configurazione di Vite (`vite.config.js`)](#3-configurazione-di-vite-viteconfigjs)
4. [Avvio del Server di Sviluppo](#4-avvio-del-server-di-sviluppo)
5. [Guida al Tunneling Passo-Passo](#5-guida-al-tunneling-passo-passo)
6. [Risoluzione Problemi ed Errori Comuni](#6-risoluzione-problemi-ed-errori-comuni)
7. [Build & Anteprima di Produzione](#7-build--anteprima-di-produzione)

---

## 1. Prerequisiti

Assicurati che nel tuo ambiente locale siano installati:

- **Node.js**: `>= 20.19.0` oppure `>= 22.12.0`
- **npm**: `>= 10.0.0`

---

## 2. Setup e Installazione

Clona il repository ed entra nella cartella principale:

```bash
git clone https://github.com/Mcarollo-SYS/personal-site.git
cd personal-site
```

Installa le dipendenze del progetto:

```bash
npm install
```

---

## 3. Configurazione di Vite (`vite.config.js`)

Per consentire l'accesso al dev server tramite domini esterni generati da Cloudflare Tunnel, ngrok o Localtunnel, configura `vite.config.js` nella radice del progetto:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    // Permette a Vite di ascoltare su tutte le interfacce di rete
    allowedHosts: true
    // Autorizza le connessioni da qualsiasi host esterno
  }
});
```

> **Nota:** `allowedHosts: true` autorizza qualsiasi hostname. È utile per lo sviluppo locale e il tunneling, ma non è consigliato per un server esposto permanentemente a Internet.

---

## 4. Avvio del Server di Sviluppo

Nel terminale principale esegui:

```bash
npm run dev
```

Il dev server verrà avviato all'indirizzo:

```text
http://localhost:5173
```

Mantieni questo terminale in esecuzione durante tutta la sessione di sviluppo.

---

## 5. Guida al Tunneling Passo-Passo

Per condividere il sito in tempo reale tramite un link HTTPS pubblico, apri un secondo terminale e utilizza uno dei seguenti metodi.

### Metodo A — Cloudflare Tunnel

Nel secondo terminale:

```bash
npx cloudflared tunnel --url http://localhost:5173
```

Attendi la generazione dell'URL pubblico. Verrà mostrato un indirizzo simile a:

```text
https://xxxx-xxxx-xxxx.trycloudflare.com
```

Copia l'URL con dominio `.trycloudflare.com` e condividilo.

### Metodo B — Localtunnel

Nel secondo terminale:

```bash
npx localtunnel --port 5173
```

Copia l'URL restituito, ad esempio:

```text
https://xxxx.loca.lt
```

> **Nota:** alla prima apertura, il destinatario potrebbe dover inserire l'IP pubblico del dev host.

### Metodo C — ngrok

ngrok richiede un account e un authtoken.

Configura il token una sola volta:

```bash
npx ngrok config add-authtoken IL_TUO_TOKEN
```

Avvia quindi il tunnel:

```bash
npx ngrok http 5173
```

Copia l'indirizzo HTTPS mostrato nella voce `Forwarding`.

---

## 6. Risoluzione Problemi ed Errori Comuni

### `Blocked Request`

Se il browser mostra un errore `Blocked Request`:

1. Controlla che `allowedHosts: true` sia presente in `vite.config.js`.
2. Salva il file.
3. Arresta Vite.
4. Riavvia:

```bash
npm run dev
```

### `CACError: Unknown option '--allowedHosts'`

Le versioni recenti di Vite non richiedono l'utilizzo di `--allowedHosts` direttamente dalla CLI.

Utilizza la configurazione:

```javascript
server: {
  host: true,
  allowedHosts: true
}
```

all'interno di `vite.config.js`.

### `Operation timed out` — SSH / porta 22

Se la rete o il firewall bloccano le connessioni SSH in uscita, evita strumenti che utilizzano SSH per il tunneling e utilizza Cloudflare Tunnel, Localtunnel o ngrok.

---

## 7. Build & Anteprima di Produzione

Per creare la build ottimizzata:

```bash
npm run build
```

La build verrà generata nella cartella:

```text
dist/
```

Per testare localmente la build di produzione:

```bash
npm run preview
```
