import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Imports
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#05070c] text-slate-100 antialiased selection:bg-blue-500 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

/* 

src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── sections/
│       ├── Contact.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       └── Work.jsx
├── data/
│   └── portfolioData.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Portfolio.jsx
│   └── Services.jsx
├── App.jsx
├── index.css
└── main.jsx

-----------------------

Act as a senior React + Tailwind CSS developer. Create a new section component that strictly matches my site's global design system extracted from my Hero section:

1. SECTION WRAPPER & CONTAINER SPECS:
- Outer wrapper: <section className="relative w-full bg-[#05070c] text-white flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden font-sans">
- Inner containers: Standard max-width is `w-full max-w-6xl` (or `max-w-7xl` for wide grids) centered on page.

2. TYPOGRAPHY & HIERARCHY:
- NO <h1> ALLOWED. The Hero section already uses the page's <h1>.
- Section Titles: Use <h2> with `text-3xl sm:text-5xl font-extrabold tracking-tight text-center max-w-3xl text-white text-glow`.
- Subtitles/Body: Use `<p>` with `text-zinc-400 text-center max-w-xl text-sm sm:text-base leading-relaxed font-normal`.
- Badges/Kickers: Use `text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold` or pill style (`px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-xs font-medium text-zinc-300`).

3. CARDS & UI COMPONENTS:
- Card Containers: `rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200`.
- Color Palette: Dark canvas (`#05070c`), Zinc text/borders (`zinc-800`, `zinc-500`, `zinc-400`), Blue accents (`blue-400`, `blue-500/10` glows).
- Icons/Logos: Contain inside `p-1.5 rounded-md bg-zinc-800/80 flex items-center justify-center`.

Please generate a clean, responsive React section component matching these rules.

--------------------------------------------------
[MY SPECIFIC SECTION REQUEST / CODE]:
Insert your request here (e.g., "Create a 3-column Projects section with feature cards and action buttons")
--------------------------------------------------



  */
