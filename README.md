# Aagoi — Official Website (Coming Soon)

> **Official Tagline:** Moving Your Career Forward.  
> **Brand Identity:** Aagoi is an early-stage career technology initiative building a more intelligent, structured, and personalised approach to career growth.

---

## 1. Brand Guidelines & Critical Spelling

- **Official Brand Name:** `Aagoi`
- **Spelling Requirement:** Only the first letter **A** is uppercase. Every other letter must be lowercase (`a`, `g`, `o`, `i`).
- **Never write:** `AaGoi`, `AAGoi`, `AAGOI`, or `AaGOI`.
- **Palette System:**
  - Deep Navy: `#152D46`
  - Primary Blue: `#1269A8`
  - Bright Blue: `#1686D9`
  - Teal: `#17A6A0`
  - Off White: `#F7F9FC`
  - Surface White: `#FFFFFF`
  - Secondary Slate: `#526477`
  - Light Border: `#E5EAF0`

---

## 2. Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Manrope (Headings), Inter (Body)

---

## 3. Project Structure

```text
aagoi-website/
├── public/
│   ├── aagoi-logo.png             # Original official logo asset (untouched source)
│   ├── aagoi-logo-transparent.png # Clean anti-aliased transparent wordmark
│   ├── aagoi-logo-white.png       # High-contrast white variant for dark navy surfaces
│   ├── favicon.svg                # Scalable vector brand favicon
│   └── favicon.png                # PNG favicon
├── src/
│   ├── assets/                    # Bundled brand assets
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive header with smooth navigation & CTA
│   │   ├── Hero.tsx               # Two-column hero with animated ecosystem visual
│   │   ├── About.tsx              # Brand mission & structured career approach
│   │   ├── Approach.tsx           # 3 feature cards (AI, Human Support, Ecosystem)
│   │   ├── Audience.tsx           # Who We Help (Experienced professionals & inclusive vision)
│   │   ├── Values.tsx             # Ethical values (Deep Navy section, trust & integrity)
│   │   ├── EarlyAccess.tsx        # Client early-access pathway
│   │   ├── Partnerships.tsx       # Partnership & collaboration spheres
│   │   ├── Contact.tsx            # Official verified email & phone channels
│   │   └── Footer.tsx             # Deep Navy footer with dynamic copyright
│   ├── config/
│   │   └── site.ts                # Central configuration (brand, forms, contacts, nav)
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # React DOM entry point
│   └── index.css                  # Tailwind CSS v4 design tokens and global styles
├── index.html                     # Semantic HTML5, SEO metadata, fonts & Open Graph tags
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript compiler options
├── vite.config.ts                 # Vite bundler configuration
└── README.md                      # Project documentation
```

---

## 4. Central Form & Contact Configuration

All enquiry pathways and contact points are managed centrally in `src/config/site.ts`:

- **Client Early-Access Form:** `https://forms.gle/TwFJn46dcSRjpyXh9`
- **Partnership / Collaboration Form:** `https://forms.gle/r735TNUF4Y8gwbf79`
- **Official Website:** `https://aagoi.in`
- **Official Contact Email:** `founder@aagoi.in`
- **Official Telephone:** `+91 9707146758`

---

## 5. Development & Local Testing

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` to view the live site.

### Build for Production
```bash
npm run build
```
The output directory will be `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 6. Git & GitHub Upload Instructions

When ready to publish to a new GitHub repository:

```bash
# 1. Initialize git in the project directory
git init

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Aagoi Coming Soon official website"

# 4. Set default branch to main
git branch -M main

# 5. Link to your newly created GitHub repository
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 7. Vercel Deployment Instructions

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Click **Add New...** → **Project**.
3. Import your GitHub repository (`<YOUR-REPO-NAME>`).
4. Keep the default Vite build preset:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.
6. Under **Project Settings** → **Domains**, add `aagoi.in` or your designated custom domain and follow DNS CNAME/A record configuration.
