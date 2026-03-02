# ✦ Vows & Veils

> Kerala's premier bridal discovery platform — connecting brides with verified makeup artists, saree drapers, decorators and more.

---

## 🗂️ Project Structure

```
vows-and-veils/
├── index.html              ← Root HTML entry + SEO meta + font preloads
├── package.json            ← Dependencies & npm scripts
├── vite.config.js          ← Vite bundler config
├── tailwind.config.js      ← Tailwind theme (Kerala luxury tokens)
├── postcss.config.js       ← PostCSS (Tailwind + Autoprefixer)
├── vercel.json             ← Vercel deploy config + SPA rewrites
├── .gitignore
└── src/
    ├── main.jsx            ← React entry point (mounts App into #root)
    ├── index.css           ← Global styles, CSS vars, animations
    └── App.jsx             ← Full application (all portals)
```

---

## 🚀 Deploy to Vercel with Custom Domain

### Step 1 — Push to GitHub

```bash
# Inside the project folder
git init
git add .
git commit -m "feat: initial Vows & Veils prototype"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/vows-and-veils.git
git branch -M main
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Click **Import Git Repository** → connect your GitHub account
3. Select the `vows-and-veils` repo
4. Vercel auto-detects Vite. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy** — your app is live on a `*.vercel.app` URL in ~60 seconds

### Step 3 — Add Your Custom Domain

1. In your Vercel project → **Settings → Domains**
2. Enter your domain e.g. `vowsandveils.in` → **Add**
3. Vercel gives you DNS records to add:

   | Type  | Name | Value                     |
   |-------|------|---------------------------|
   | A     | @    | `76.76.21.21`             |
   | CNAME | www  | `cname.vercel-dns.com`    |

4. Add these records in your domain registrar's DNS panel (GoDaddy / Namecheap / Google Domains)
5. DNS propagates in 5–30 minutes → Vercel auto-provisions SSL

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Test Credentials

| Role   | Email                        | Password         |
|--------|------------------------------|------------------|
| Client | `anupama.kerala@test.com`    | `vows2026`       |
| Vendor | `glam_by_lekshmi@test.com`   | `artist123`      |
| Admin  | `admin_verify@vows.com`      | `secure_vows_99` |

---

## 🔄 Automatic Deployments

Once connected to Vercel:
- Every `git push` to `main` triggers a **production deployment** automatically
- Pull requests get **preview URLs** for staging review

---

## 🛠️ Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18 + Vite 5                 |
| Styling  | Tailwind CSS 3 + CSS Variables    |
| Fonts    | Google Fonts (Cormorant + Jost)   |
| Deploy   | Vercel (Edge Network)             |
| State    | React useState + localStorage     |
