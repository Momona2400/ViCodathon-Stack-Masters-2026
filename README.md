# ABTalks Redesign — 60-Day Coding Challenge Platform

A mobile-first React + Vite + TailwindCSS application designed for the **ABTalks 60-Day Coding Challenge**. This project provides an energetic, modern dark-mode experience optimized for 390px mobile viewports (and desktop screens), enabling students to track streaks, view daily challenges, submit GitHub & LinkedIn proof, and earn gamified achievement badges.

---

## 🗺️ Route Map

| Route Path | Page Component | Description |
| :--- | :--- | :--- |
| **`/`** | `LandingPage.jsx` | High-converting motivation landing page with hero headline, community statistics, floating code snippet cards, and CTA to start the journey. |
| **`/dashboard`** | `DashboardPage.jsx` | Student Dashboard displaying current streak badge, progress bar, today's task card, unlocked achievements, and interactive edge-case tester. |
| **`/day/12`** | `DayTaskPage.jsx` | Challenge Day 12 task details, learning objectives, resources, GitHub commit input, LinkedIn post link input, and proof submission flow. |
| **`*`** | `NotFoundPage.jsx` | Graceful 404 error fallback page with quick navigation back to the dashboard. |

---

## ⚡ Key Features & Edge Case Handling

1. **`streak = 0` (Fresh Start or Lost Streak)**:
   - Displays a neutral gray flame badge with "0 Days — Fresh Start".
   - Prompts student: *"Ignite your flame today! Complete Day 1 to start your 60-day streak."*

2. **`missed day` (Missed Yesterday's Task)**:
   - Displays a prominent alert banner on top of the dashboard.
   - Converts today's task into a **Recovery Task** so the student can salvage their momentum.

3. **`empty achievements` (No Badges Earned)**:
   - Displays an inspiring empty trophy cabinet component explaining how to earn the first *Ignition Key* badge.

4. **Interactive Persona Switcher**:
   - Includes a floating top switcher bar on the Dashboard allowing reviewers and recruiters to toggle between active 12-day streak, zero streak, missed day, and empty achievements without modifying JSON files manually.

5. **Proof Submission Flow with Celebration**:
   - Challenge Day 12 features link validation for GitHub (`github.com`) and LinkedIn (`linkedin.com`).
   - Submitting valid proof triggers an instant celebratory canvas confetti burst (`canvas-confetti`), updates global streak state (+100 XP), and displays a success modal.

---

## 📁 Complete Project Structure

```
d:\Stack-Masters-ViCodathon-2026\
├── public/
│   └── favicon.svg               # SVG fire logo favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation header with mobile drawer & active route badges
│   │   ├── Footer.jsx            # Modern footer with quick navigation links & social proof
│   │   ├── PersonaSwitcher.jsx   # Edge case testing toolbar (Active, 0 Streak, Missed Day, Empty Achievements)
│   │   ├── StreakBadge.jsx       # Dynamic fire streak indicator with flame animation & alerts
│   │   ├── ProgressBar.jsx       # Animated gradient progress bar with 20.0% completion metrics
│   │   ├── TaskCard.jsx          # Today's challenge card with difficulty tag & CTA action link
│   │   ├── AchievementCard.jsx   # Achievement grid with locked/unlocked badge states & empty state
│   │   └── ProofModal.jsx        # Confetti celebration modal after submitting proof
│   ├── data/
│   │   └── mockData.json         # Mock JSON dataset for student profile, day 12 task, and achievements
│   ├── pages/
│   │   ├── LandingPage.jsx       # Route: /
│   │   ├── DashboardPage.jsx     # Route: /dashboard
│   │   ├── DayTaskPage.jsx       # Route: /day/12 (and /day/:dayId)
│   │   └── NotFoundPage.jsx      # Route: *
│   ├── styles/
│   │   └── index.css             # Tailwind CSS directives & custom glassmorphism utilities
│   ├── App.jsx                   # React Router setup & global state management
│   └── main.jsx                  # React DOM entrypoint
├── index.html                    # HTML entry with mobile viewport meta tag (width=390px responsive)
├── package.json                  # Dependencies (React, React Router, Lucide, Tailwind, Confetti)
├── vite.config.js                # Vite build configuration
├── tailwind.config.js            # Custom Tailwind theme, colors, and keyframe animations
├── postcss.config.js             # PostCSS plugins setup
├── vercel.json                   # Vercel SPA route rewrite configuration
└── README.md                     # Documentation & Vercel deployment instructions
```

---

## 🚀 Local Development Setup

Follow these steps to run the application locally:

```bash
# 1. Clone the repository / Navigate to directory
cd Stack-Masters-ViCodathon-2026

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open your browser at `http://localhost:3000` (or `http://localhost:5173`).

---

## 📦 Production Build & Local Preview

To verify standard production compilation:

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Instructions for Vercel

Deploying **ABTalks Redesign** to Vercel is fast and seamless:

### Option A: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy directly from the project directory:
   ```bash
   vercel
   ```

3. Follow the CLI prompts:
   - Set project scope & name: `abtalks-redesign`
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option B: Deploy via Vercel GitHub Dashboard

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit - ABTalks Redesign"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New" -> "Project"**.
3. Select your `Stack-Masters-ViCodathon-2026` GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Vercel will build and serve your app at a `.vercel.app` domain.

> **Note on Client-Side Routing**: The included `vercel.json` file ensures that deep links like `/dashboard` and `/day/12` render properly without 404 errors on browser refresh.