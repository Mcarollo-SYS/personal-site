<p align="center">
  <img
    src="https://capsule-render.vercel.app/api?type=transparent&fontColor=CFFF3E&fontSize=46&height=90&width=700&text=Personal%20Site"
    alt="Personal Site"
  />
</p>

<p align="center">
  <strong>Interactive portfolio · Three.js · Vite · Anime.js</strong>
</p>

<p align="center">
  <a href="https://github.com/Mcarollo-SYS/personal-site">
    <img src="https://img.shields.io/badge/SOURCE-GitHub-CFFF3E?style=for-the-badge&logo=github&logoColor=0d1117&labelColor=0d1117">
  </a>
  <a href="YOUR-VERCEL-URL">
    <img src="https://img.shields.io/badge/LIVE-Vercel-CFFF3E?style=for-the-badge&logo=vercel&logoColor=0d1117&labelColor=0d1117">
  </a>
</p>

---

## 🌐 About

An interactive personal portfolio designed to combine **software development, 3D graphics and technical storytelling**.

The website is built with:

<p align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,vite,threejs" />

</p>

```text
HTML5
CSS3
JavaScript ES6 Modules
Vite
Three.js
WebGL
Anime.js
```

---

## ⚡ Features

<table>
<tr>
<td width="50%">

### 🎮 Interactive 3D

Three.js + WebGL environment with interactive elements and real-time rendering.

</td>
<td width="50%">

### 🎬 Animations

Anime.js powered animations and scroll-based interactions.

</td>
</tr>

<tr>
<td>

### 📱 Responsive

Designed to work across desktop, tablet and mobile devices.

</td>
<td>

### 🚀 Production Ready

Optimized Vite build with automatic Vercel deployment.

</td>
</tr>
</table>

---

## 🧩 Tech Stack

<details open>
<summary><b>Frontend</b></summary>

<br>

`HTML5` · `CSS3` · `JavaScript`

</details>

<details>
<summary><b>3D & Graphics</b></summary>

<br>

`Three.js` · `WebGL`

</details>

<details>
<summary><b>Animation</b></summary>

<br>

`Anime.js`

</details>

<details>
<summary><b>Development</b></summary>

<br>

`Vite` · `Git` · `GitHub`

</details>

<details>
<summary><b>Deployment</b></summary>

<br>

`Vercel` · `HTTPS` · `CDN`

</details>

---

# 🛠️ Development

### 01 — Clone

```bash
git clone https://github.com/Mcarollo-SYS/personal-site.git
cd personal-site
```

### 02 — Install

```bash
npm install
```

### 03 — Start

```bash
npm run dev -- --port 5174
```

Open:

```text
http://localhost:5174
```

---

## 🔄 Development Workflow

```text
┌────────────────────┐
│     EDIT CODE      │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│    Vite :5174      │
│   Hot Reloading    │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│   TEST LOCALLY     │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│    git commit      │
│     git push       │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│      GitHub        │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│      Vercel        │
│   Automatic Build  │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│    🌐 LIVE SITE    │
└────────────────────┘
```

---

# ☁️ Production

The production website is hosted on **Vercel**.

<p align="center">
  <img src="https://img.shields.io/badge/Hosting-Vercel-0d1117?style=for-the-badge&logo=vercel&logoColor=CFFF3E">
  <img src="https://img.shields.io/badge/HTTPS-Enabled-0d1117?style=for-the-badge&logo=letsencrypt&logoColor=CFFF3E">
  <img src="https://img.shields.io/badge/Deploy-Automatic-0d1117?style=for-the-badge&logo=github&logoColor=CFFF3E">
</p>

### How deployment works

Every push to the repository triggers a new deployment:

```text
git push
    │
    ▼
 GitHub
    │
    ▼
 Vercel detects commit
    │
    ├── npm install
    │
    ├── npm run build
    │
    └── deploy
         │
         ▼
      🌐 LIVE
```

There is no need to manually upload `dist/`.

---

# 🧪 Production Preview

Generate the production build:

```bash
npm run build
```

Output:

```text
dist/
├── index.html
└── assets/
```

Preview the production build locally:

```bash
npm run preview -- --port 4173
```

Open:

```text
http://localhost:4173
```

---

# 🌍 Temporary Public Development

For temporary external access without deploying:

<details>
<summary><b>☁️ Cloudflare Tunnel</b></summary>

<br>

```bash
npx cloudflared tunnel --url http://localhost:5174
```

Generates a temporary HTTPS URL:

```text
https://xxxx.trycloudflare.com
```

</details>

<details>
<summary><b>🔗 Localtunnel</b></summary>

<br>

```bash
npx localtunnel --port 5174
```

</details>

<details>
<summary><b>🌐 ngrok</b></summary>

<br>

```bash
npx ngrok http 5174
```

</details>

> Tunneling is intended for **development and testing**. Production is handled by Vercel.

---

# ⚙️ Vite Configuration

External tunnels require Vite to accept the generated hostname.

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true
  }
});
```

<details>
<summary>⚠️ Security note</summary>

<br>

`allowedHosts: true` allows requests from any hostname.

This configuration is useful for temporary development tunnels but should not be considered a hardened production configuration.

The production application runs through Vercel.

</details>

---

# 📦 Commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

---

# 📁 Project Structure

```text
personal-site/
│
├── public/
│   ├── models/
│   ├── textures/
│   └── ...
│
├── src/
│   ├── main.js
│   ├── style.css
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 🔐 Security

Dependencies are regularly checked using:

```bash
npm audit
```

Current production build:

```text
Vite 8.3.0
Node.js 22.12+
npm audit → 0 vulnerabilities
```

---

## 📊 Project Status

<p align="center">

<img src="https://img.shields.io/badge/Build-Passing-CFFF3E?style=flat-square&labelColor=0d1117">
<img src="https://img.shields.io/badge/Security-0%20Vulnerabilities-CFFF3E?style=flat-square&labelColor=0d1117">
<img src="https://img.shields.io/badge/Deploy-Vercel-CFFF3E?style=flat-square&labelColor=0d1117">
<img src="https://img.shields.io/badge/Status-Active-CFFF3E?style=flat-square&labelColor=0d1117">

</p>

---

<p align="center">
  <a href="YOUR-VERCEL-URL">
    <img src="https://capsule-render.vercel.app/api?type=rect&color=0d1117&height=45&text=🌐%20Visit%20the%20Live%20Portfolio&fontColor=CFFF3E&fontSize=17">
  </a>
</p>

<p align="center">
  <sub>Built with Vite · Three.js · Anime.js · JavaScript</sub>
</p>

<p align="center">
  <sub>Building, learning and improving — one project at a time.</sub>
</p>
