import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070c] text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
/* 

  src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Work.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── portfolioData.js
├── App.jsx
├── index.css
└── main.jsx

  */
