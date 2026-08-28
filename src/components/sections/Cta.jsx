import React from "react";
// Import your custom SVGs
import acfLogo from "../../assets/acf.svg";
import ahref from "../../assets/ahref.svg";
import chatgpt from "../../assets/chatgpt.svg";
import css from "../../assets/css.svg";
import screamingfrog from "../../assets/frog.svg";
import gsc from "../../assets/gsc.svg";

// Combined tech stack items from both rows
const techStack = [
  // Row 1 Stack
  { name: "WordPress", slug: "wordpress", color: "21759B" },
  { name: "PHP for WP", slug: "php", color: "777BB4" },
  { name: "ACF", customSvg: acfLogo },
  { name: "Elementor", slug: "elementor", color: "92003B" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", customSvg: css },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },

  // Row 2 Stack
  { name: "Google Search Console", customSvg: gsc },
  { name: "Screaming Frog", customSvg: screamingfrog },
  { name: "Ahrefs", customSvg: ahref },
  { name: "GitHub", slug: "github", color: "ffffff" },
  { name: "ChatGPT", customSvg: chatgpt },
  { name: "Gemini", slug: "googlegemini", color: "8E75FF" },
];

export default function Cta() {
  // Utility function to resolve the icon source URL
  const getIconSrc = (item) => {
    if (item.customSvg) {
      return item.customSvg;
    }
    // Simple Icons CDN format matching your slug and color setup
    return `https://cdn.simpleicons.org/${item.slug}/${item.color || "ffffff"}`;
  };

  return (
    <section className="relative w-full bg-[#05070c] text-white flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden font-sans">
      {/* Top curved ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-white/[0.06] to-transparent rounded-[100%] blur-xl pointer-events-none" />

      {/* BACKGROUND LOOPING ICONS GRID */}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-30 select-none pointer-events-none scale-105">
        {[
          { dir: "animate-marquee", key: "r1" },
          { dir: "animate-marquee-reverse", key: "r2" },
          { dir: "animate-marquee", key: "r3" },
          { dir: "animate-marquee-reverse", key: "r4" },
        ].map((row) => (
          <div key={row.key} className={`flex w-max gap-4 ${row.dir}`}>
            {[...Array(4)]
              .flatMap(() => techStack)
              .map((item, idx) => (
                <div
                  key={`${row.key}-${idx}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md flex items-center justify-center shrink-0"
                >
                  <img
                    src={getIconSrc(item)}
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Dark Vignette / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070c] via-transparent to-[#05070c] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#05070c]/70 to-[#05070c] pointer-events-none" />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center gap-6">
        {/* Central Main Badge / Rocket Icon */}
        <div className="p-3 sm:p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/90 shadow-2xl backdrop-blur-md flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m8.697-3.261l-5.69 5.69"
            />
          </svg>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center max-w-3xl text-white text-glow">
          Ready to build something better?
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-400 text-center max-w-xl text-sm sm:text-base leading-relaxed font-normal">
          Explore modern web experiences, high-performance WordPress
          development, and SEO strategies designed to help your business grow.
        </p>

        {/* Action Button */}
        <a
          href="#contact"
          className="mt-2 px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/90 hover:bg-zinc-800/90 hover:border-zinc-700 text-xs sm:text-sm font-medium text-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-lg group"
        >
          <span>Get Started</span>
          <svg
            className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>

      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
