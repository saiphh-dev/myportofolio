# 🌟 Saiphh — Roblox Studio Builder Portfolio

Portfolio Next.js moderno, minimale e pulito per **Saiphh**, Roblox Studio Builder specializzato in **Studs-style builds** e ambientazioni immersive. Configurato per il deploy automatico su **GitHub Pages** tramite **GitHub Actions** (`github.io`).

---

## 🚀 Come Pubblicare su GitHub Pages (github.io)

Il progetto è preconfigurato per il deploy con **GitHub Actions** e l'export statico di Next.js (`output: 'export'`).

### 1. Attivare GitHub Actions su GitHub Pages
1. Vai sul tuo repository: [saiphh-dev/myportofolio](https://github.com/saiphh-dev/myportofolio)
2. Clicca su **Settings** > **Pages** (nel menu a sinistra).
3. Sotto **Build and deployment** > **Source**, seleziona:
   👉 **`GitHub Actions`** (invece di "Deploy from a branch").

### 2. Pubblicare il codice
Esegui questi comandi da terminale:
```bash
git add .
git commit -m "feat: clean portfolio with 3D coin and 2-row carousel"
git push origin main
```

L'Action `.github/workflows/deploy.yml` compilerà e pubblicherà il sito sul tuo URL GitHub Pages:
🔗 **`https://saiphh-dev.github.io/myportofolio/`**

---

## 🎨 Caratteristiche del Design Clean

1. **Coin 3D Perfettamente Dritto & Interattivo**:
   - Moneta 3D cilindrica con la tua texture Discord perfettamente allineata e dritta.
   - Rotazione continua fluida a 360° su se stessa, con interazione libera da mouse/touch (trascina per ruotare).
   - Nessun riquadro o bordo attorno: la moneta fluttua elegantemente nel vuoto sopra il tuo nome.

2. **Descrizione Unificata & Centrata**:
   - Posizionata al centro in formato compatto, elegante e leggibile.
   - Include tutta la tua presentazione (5+ anni di esperienza, Studs-style, ambientazioni, qualità del lavoro e l'elenco delle tue Specialità).
   - Testi proporzionati e puliti, senza box pesanti o elementi superflui.

3. **Carousel a 2 Righe (Marquee Infinito)**:
   - **Riga 1**: scorrimento continuo e fluido verso **sinistra**.
   - **Riga 2**: scorrimento continuo e fluido verso **destra**.
   - Al passaggio del mouse l'animazione rallenta/va in pausa per facilitare il click.
   - Cliccando su ogni foto si apre il **Lightbox Modal** a schermo intero.

4. **Come aggiungere nuove foto al Carousel**:
   Apri [`src/data/profile.js`](file:///c:/Users/fligo/Documents/Portofloio/myportofolio/src/data/profile.js) e aggiungi semplicemente le tue immagini all'array `galleryImages`:
   ```javascript
   galleryImages: [
     { id: 1, src: "/showcase/part1_studs.jpg", title: "Studs-Style Architecture", alt: "Build 1" },
     { id: 2, src: "/showcase/tua_nuova_foto.png", title: "Titolo Build", alt: "Descrizione" },
     // Aggiungi quante foto vuoi qui, verranno mostrate subito nel carousel!
   ]
   ```

5. **Sezione Contatti Clean**:
   - Frase in evidenza: *"Looking for a builder who can bring your ideas to life? Feel free to contact me — I'm always open to new projects and collaborations!"*
   - Server Discord indicato con il nome: **`Infinity Wonderful`** (senza link di testo raw).
   - Icone piccole cliccabili per TikTok, Discord, GitHub, YouTube e Roblox con redirect istantaneo.

---

## 💻 Comandi Locali

```bash
# Avvia il dev server
npm run dev

# Verifica della build statica
npm run build
```
