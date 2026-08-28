import React, { useState } from "react";
import ss1 from "../../assets/ss1.webp";
import ss2 from "../../assets/ss2.webp";
import ss3 from "../../assets/ss3.webp";
import ss4 from "../../assets/ss4.webp";
import ss5 from "../../assets/ss5.webp";
import ss6 from "../../assets/ss6.webp";
import ss7 from "../../assets/ss7.webp";
import ss8 from "../../assets/ss8.webp";

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

// Duplicate for seamless continuous ticker loop
const tickerList = [...showcaseItems, ...showcaseItems];

export default function FeaturedWorkCarousel() {
  const [flippedId, setFlippedId] = useState(null);

  return (
    <section className="relative w-full bg-[#05070c] text-white flex flex-col items-center justify-center py-24 px-2 sm:px-6 overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Main Container - Expanded from max-w-6xl to max-w-[1400px] */}
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <span className="text-[11px] font-mono tracking-[0.25em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            Interactive Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects & Deliverables
          </h2>
          {/* <p className="text-xs sm:text-sm text-zinc-400 max-w-md mt-1">
            Hover or click any browser card to flip for technical details.
          </p> */}
        </div>

        {/* Expanded Outer Bounds & Scroll Area */}
        <div className="w-full relative overflow-hidden group py-6">
          {/* Edge Vignette Overlays */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[#05070c] via-[#05070c]/80 to-transparent z-20 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[#05070c] via-[#05070c]/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track with Larger Card Widths */}
          <div className="flex gap-8 sm:gap-10 w-max animate-infinite-scroll group-hover:[animation-play-state:paused] px-12">
            {tickerList.map((item, index) => {
              const uniqueKey = `${item.id}-${index}`;
              const isFlipped = flippedId === uniqueKey;

              return (
                <div
                  key={uniqueKey}
                  onMouseEnter={() => setFlippedId(uniqueKey)}
                  onMouseLeave={() => setFlippedId(null)}
                  /* Card width increased to 380px on desktop */
                  className="w-[320px] sm:w-[380px] h-[500px] sm:h-[580px] [perspective:1000px] shrink-0 cursor-pointer"
                >
                  {/* 3D Flip Inner Container */}
                  <div
                    className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* FRONT SIDE (Browser Mockup Preview) */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl border border-zinc-800/80 bg-[#080b11] p-3.5 flex flex-col shadow-2xl">
                      {/* Top Bar */}
                      <div className="h-9 bg-zinc-900/80 border-b border-zinc-800/80 px-3.5 flex items-center justify-between shrink-0 rounded-t-xl">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {item.title}.com
                        </span>
                        <div className="w-4" />
                      </div>

                      {/* Image Preview Container */}
                      <div className="relative w-full flex-1 overflow-hidden bg-[#030508] rounded-b-xl group/img">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover/img:translate-y-[-60%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent flex justify-between items-end">
                          <div>
                            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wide">
                              {item.category}
                            </span>
                            <h3 className="text-base font-bold text-white">
                              {item.title}.com
                            </h3>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-700/60 px-2.5 py-1 rounded">
                            Hover to Flip ↺
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BACK SIDE (Detailed Specs & Action) */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-blue-500/40 bg-[#0b0f19] p-7 flex flex-col justify-between shadow-2xl shadow-blue-500/10">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mt-4">
                          {item.title}.com
                        </h3>

                        <p className="text-zinc-300 text-xs sm:text-sm mt-3 leading-relaxed">
                          {item.desc}
                        </p>

                        <div className="mt-6 flex flex-col gap-2">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase">
                            Tech Stack & Scope
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-mono text-zinc-200 bg-zinc-900 border border-zinc-700/80 px-2.5 py-1 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href={item.serviceUrl}
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
                      >
                        <span>View Full Case Study</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Motion Keyframes */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
