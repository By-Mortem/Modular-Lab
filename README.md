# 🟢 Modular Lab — Sito Web

Sito web ufficiale di **Modular Lab**, creative studio specializzato in servizi per server **FiveM** (mappe custom, script ESX/QBCore, grafiche, loading screen, trailer e molto altro).

Sito statico, veloce e responsive, pronto per essere pubblicato su **GitHub Pages**.

## 📄 Contenuti

- **Hero** — logo 3D "MODULAR LAB" e tagline
- **Chi Siamo** — chi è lo studio e "perché sceglierci"
- **Servizi** — loading screen, trailer, grafiche, overlay OBS, UI/HUD, brand identity + tag extra
- **Listino Prezzi** — prezzi per mappe custom, script & sistemi, grafiche & design, loading screen e trailer
- **Contatti** — CTA Discord per preventivi e ordini

## 🚀 Pubblicare su GitHub Pages

### 1. Crea il repository su GitHub

- Vai su [github.com/new](https://github.com/new)
- Dai un nome al repo, es. `modular-lab`
- **Non** spuntare "Add a README" (per evitare conflitti)

### 2. Collega e pubblica il progetto

```bash
# dalla cartella del progetto
git init
git add .
git commit -m "Sito web Modular Lab"
git branch -M main
git remote add origin https://github.com/<TUO-UTENTE>/modular-lab.git
git push -u origin main
```

### 3. Attiva GitHub Pages

- Apri il repo su GitHub → **Settings** → **Pages**
- In "Build and deployment" scegli **Deploy from a branch**
- Branch: `main` · Cartella: `/ (root)`
- Salva. Dopo pochi minuti il sito sarà online all'indirizzo:

```
https://<TUO-UTENTE>.github.io/modular-lab/
```

## ✏️ Personalizzazione

- **Link Discord** — il pulsante è già collegato a [discord.gg/HV9eaAH4qz](https://discord.gg/HV9eaAH4qz). Per cambiarlo, modifica `DISCORD_INVITE_URL` in `js/main.js`.
- **Colori** — tutte le variabili di colore sono in cima a `css/style.css` (sezione `:root`).

## 🛠 Struttura

```
.
├── index.html        # pagina principale
├── css/style.css     # stili e tema
├── js/main.js        # interazioni (menu, animazioni, Discord)
├── assets/favicon.svg
├── assets/logo.svg     # logo Modular Lab in formato vettoriale
└── README.md
```

## 🎨 Branding

Il tema usa **verde e blu** come colori principali, seguendo il logo e le preferenze dell'owner. Il file `assets/logo.svg` è una versione vettoriale del logo fornito, così resta nitido su desktop e mobile.

## 📝 Licenza

© Modular Lab — Tutti i diritti riservati.
