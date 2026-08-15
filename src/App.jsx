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

  */
