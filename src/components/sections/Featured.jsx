import React from "react";

// Asset Imports
import profileImg from "../../assets/profile.png";
import figmaToWordpress from "../../assets/figma-to-wordpress.webp";
import mobileResponsive from "../../assets/mobile-responsive.webp";
import customThemeBuilds from "../../assets/custom-theme-builds.webp";
import buildingPlugins from "../../assets/building-plugins.webp";
import seoMetaOptimizations from "../../assets/seo-meta-optimizations.webp";
import pagespeedScores from "../../assets/pagespeed-score.webp";

const featuredItems = [
  {
    id: 1,
    title: "Figma to WordPress",
    description:
      "Pixel-perfect conversion of complex design files into custom WordPress sites.",
    image: figmaToWordpress,
    glow: "bg-purple-600/15",
  },
  {
    id: 2,
    title: "Mobile Responsive",
    description:
      "Ensuring optimal layout, touch-interactivity, and flawless performance on all devices.",
    image: mobileResponsive,
    glow: "bg-blue-600/15",
  },
  {
    id: 3,
    title: "Custom Theme Build",
    description:
      "Engineered from scratch using optimal PHP, ACF, and modern styling frameworks.",
    image: customThemeBuilds,
    glow: "bg-indigo-600/15",
  },
  {
    id: 4,
    title: "Building Plugins",
    description:
      "Tailored plugin development to add unique, secure, and lightweight functionalities.",
    image: buildingPlugins,
    glow: "bg-cyan-600/15",
  },
  {
    id: 5,
    title: "SEO & Meta Optimization",
    description:
      "Built-in SEO structure, schema markup, and optimal metadata for higher search visibility.",
    image: seoMetaOptimizations,
    glow: "bg-violet-600/15",
  },
  {
    id: 6,
    title: "90%+ PageSpeed Score",
    description:
      "Lightweight codebase, optimized assets, and caching for blazing-fast load times.",
    image: pagespeedScores,
    glow: "bg-emerald-600/15",
  },
];

const col1Items = [featuredItems[0], featuredItems[1], featuredItems[2]];
const col2Items = [featuredItems[3], featuredItems[4], featuredItems[5]];

export default function Featured() {
  return (
    <section className="w-full bg-[#030408] text-white py-12 md:py-16 px-4 md:px-8 flex justify-center font-sans relative md:overflow-hidden">
      {/* Keyframes for Continuous Marquee Animation (Tablet & Desktop only) */}
      <style>{`
        @keyframes marqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        @keyframes marqueeUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @media (min-width: 768px) {
          .animate-marquee-down {
            animation: marqueeDown 24s linear infinite;
          }
          .animate-marquee-up {
            animation: marqueeUp 24s linear infinite;
          }
        }
      `}</style>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-10 w-[300px] md:w-[500px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] md:w-[500px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch relative z-10">
        {/* ================= LEFT COLUMN: PROFILE HERO ================= */}
        <div className="md:col-span-5 relative overflow-hidden rounded-3xl bg-black shadow-2xl h-[320px] sm:h-[400px] md:h-auto min-h-[320px] md:min-h-[640px] flex">
          <img
            src={profileImg}
            alt="Profile Hero"
            className="w-full h-full object-cover object-center rounded-3xl"
          />
        </div>

        {/* ================= RIGHT COLUMN: HEADER + CARDS ================= */}
        <div className="md:col-span-7 flex flex-col justify-between gap-6 md:gap-8">
          {/* TOP ROW: HEADING & TEXT */}
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-800/40 px-3.5 py-1 rounded-full backdrop-blur-md">
              Featured Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Built with Precision & High Performance
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed mt-1">
              Specialized web engineering techniques designed for ultra-fast
              performance, perfect mobile responsiveness, and scalable
              architectures.
            </p>
          </div>

          {/* BOTTOM ROW: STACKED OVERLAP ON MOBILE / MARQUEE ON DESKTOP */}
          <div className="marquee-container relative w-full h-auto md:h-[520px] md:overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md p-3 sm:p-4">
            {/* Smooth Edge Fades (Tablet & Desktop Only) */}
            <div className="hidden md:block absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030408] to-transparent z-20 pointer-events-none" />
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030408] to-transparent z-20 pointer-events-none" />

            {/* MOBILE LAYOUT: Sticky Overlapping Stack */}
            <div className="flex flex-col gap-4 md:hidden pb-12">
              {featuredItems.map((item, idx) => (
                <Card
                  key={`mobile-card-${item.id}`}
                  item={item}
                  index={idx}
                  isMobile={true}
                />
              ))}
            </div>

            {/* DESKTOP LAYOUT: Dual Column Animated Marquee */}
            <div className="hidden md:grid grid-cols-2 gap-4 h-full">
              {/* COLUMN 1 */}
              <div className="relative overflow-hidden h-full">
                <div className="flex flex-col gap-4 animate-marquee-down">
                  {col1Items.map((item, idx) => (
                    <Card
                      key={`col1-orig-${idx}`}
                      item={item}
                      index={idx}
                      isMobile={false}
                    />
                  ))}
                  {col1Items.map((item, idx) => (
                    <Card
                      key={`col1-dup-${idx}`}
                      item={item}
                      index={idx}
                      isMobile={false}
                    />
                  ))}
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="relative overflow-hidden h-full">
                <div className="flex flex-col gap-4 animate-marquee-up">
                  {col2Items.map((item, idx) => (
                    <Card
                      key={`col2-orig-${idx}`}
                      item={item}
                      index={idx + 3}
                      isMobile={false}
                    />
                  ))}
                  {col2Items.map((item, idx) => (
                    <Card
                      key={`col2-dup-${idx}`}
                      item={item}
                      index={idx + 3}
                      isMobile={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Card Component with Scoped Mobile Sticky Overlap Effect
function Card({ item, index, isMobile }) {
  // Mobile sticky top offset (starts sticking closer to top on mobile screens)
  const mobileTopOffset = 24 + index * 20;
  const mobileZIndex = 10 + index;

  return (
    <div
      style={
        isMobile
          ? {
              top: `${mobileTopOffset}px`,
              zIndex: mobileZIndex,
            }
          : {}
      }
      className={`
        ${isMobile ? "sticky" : "relative"}
        overflow-hidden rounded-2xl bg-black p-4 sm:p-5 
        shadow-2xl flex flex-col justify-between min-h-[240px] sm:min-h-[260px] md:min-h-[290px] 
        group transition-all duration-300 backdrop-blur-md
      `}
    >
      <div
        className={`absolute top-2 right-2 w-32 h-32 sm:w-36 sm:h-36 ${item.glow} rounded-full blur-2xl pointer-events-none`}
      />

      {/* Image Container */}
      <div className="relative z-10 flex items-center justify-center h-28 sm:h-36 md:h-44 w-full mb-3 overflow-hidden rounded-xl bg-black/80 p-2">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
          {item.title}
        </h3>
        <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
