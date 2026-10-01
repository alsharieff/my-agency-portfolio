import React, { useState } from "react";
import ss1 from "../../assets/ss1.webp";
import ss2 from "../../assets/ss2.webp";
import ss3 from "../../assets/ss3.webp";
import ss4 from "../../assets/ss4.webp";
import ss5 from "../../assets/ss5.webp";

/*
================================================================================
=== COMMENTED OUT CAROUSEL CODE (Ready to be uncommented when public        ===
=== project files and permissions are cleared for portfolio display)         ===
================================================================================

const showcaseItems = [
  {
    id: 1,
    title: "soon",
    category: "Legal & Corporate",
    desc: "Custom high-converting legal platform built with bespoke post types and fast PHP hooks.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    image: ss1,
    serviceUrl: "/services#legal-websites",
  },
  {
    id: 2,
    title: "soon",
    category: "Fintech Platform",
    desc: "Modular UI architecture designed for optimal conversion, speed, and mobile responsiveness.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    image: ss2,
    serviceUrl: "/services#fintech-platforms",
  },
  {
    id: 3,
    title: "soon",
    category: "Industrial UI",
    desc: "Heavy industry catalog layout with lightweight JavaScript routing and clean DOM structure.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    image: ss3,
    serviceUrl: "/services#industrial-ui",
  },
  {
    id: 4,
    title: "soon",
    category: "Healthcare Web",
    desc: "Accessible, fast-loading web portal engineered for care services and SEO optimization.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    image: ss4,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 5,
    title: "soon",
    category: "Healthcare Web",
    desc: "Structured client field management & high-performance custom layout.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    image: ss5,
    serviceUrl: "/services#healthcare-web",
  },
];

const tickerList = [...showcaseItems, ...showcaseItems];

export function FeaturedWorkCarouselBackup() {
  const [flippedId, setFlippedId] = useState(null);

  const handleCardClick = (uniqueKey) => {
    setFlippedId((prev) => (prev === uniqueKey ? null : uniqueKey));
  };

  return (
    <section className="relative w-full bg-[#030408] text-white flex flex-col items-center justify-center py-24 px-2 sm:px-6 overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center relative z-10">
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-800/40 px-3.5 py-1 rounded-full backdrop-blur-md">
            Interactive Showcase
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects & Deliverables
          </h2>
        </div>
        <div className="w-full relative overflow-hidden group py-6">
          <div className="flex gap-8 sm:gap-10 w-max animate-infinite-scroll group-hover:[animation-play-state:paused] px-12">
            {tickerList.map((item, index) => {
              const uniqueKey = `${item.id}-${index}`;
              const isFlipped = flippedId === uniqueKey;
              return (
                <div
                  key={uniqueKey}
                  onClick={() => handleCardClick(uniqueKey)}
                  onMouseEnter={() => setFlippedId(uniqueKey)}
                  onMouseLeave={() => setFlippedId(null)}
                  className="w-[320px] sm:w-[380px] h-[500px] sm:h-[580px] [perspective:1000px] shrink-0 cursor-pointer select-none"
                >
                  <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl border border-white/10 bg-[#0b0f19] p-3.5 flex flex-col shadow-2xl">
                      <div className="h-9 bg-zinc-900/80 border-b border-white/10 px-3.5 flex items-center justify-between shrink-0 rounded-t-xl">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">{item.title}.com</span>
                        <div className="w-4" />
                      </div>
                      <div className="relative w-full flex-1 overflow-hidden bg-[#030508] rounded-b-xl group/img">
                        <img src={item.image} alt={item.title} className="w-full h-auto object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover/img:translate-y-[-60%]" />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent flex justify-between items-end">
                          <div>
                            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wide">{item.category}</span>
                            <h3 className="text-base font-bold text-white">{item.title}.com</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-indigo-500/40 bg-[#0b0f19] p-7 flex flex-col justify-between shadow-2xl shadow-indigo-500/10">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">{item.category}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-4">{item.title}.com</h3>
                        <p className="text-zinc-300 text-xs sm:text-sm mt-3 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
================================================================================
*/

export default function FeaturedWorkCarousel() {
  return (
    <section className="relative w-full bg-[#030408] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[450px] bg-indigo-600/10 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 text-center">
        {/* Section Badge */}
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-6">
          Portfolio Notice
        </span>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 uppercase">
          Enterprise Work Protected by Strict Non-Disclosure Agreements
        </h2>

        {/* Explanatory Content Card */}
        <div className="w-full bg-[#0b0f19] border border-white/10 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl backdrop-blur-md text-left flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0 text-indigo-400 font-bold text-base">
              🔒
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                Commitment to Client Privacy & Legal Compliance
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Out of professional integrity and respect for former corporate
                employers and institutional partners, direct live links or
                repository screenshots of proprietary platforms cannot be
                publicly exhibited here.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-400 font-mono">
              Need technical verification or custom code samples?
            </span>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm whitespace-nowrap"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
