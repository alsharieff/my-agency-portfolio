import React from "react";

// Your Original Asset Import
import profileImg from "../../assets/profile.png";

// Your Expertise Items mapped into clean service tags
const serviceTags = [
  "Figma to WordPress",
  "Mobile Responsive",
  "Custom Theme Build",
  "Building Plugins",
  "SEO & Meta Optimization",
  "90%+ PageSpeed Score",
];

export default function FeaturedInvertedCurveLayout() {
  return (
    <section className="relative w-full bg-[#030408] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[450px] bg-indigo-600/10 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mb-12 sm:mb-20">
          {/* <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-800/40 px-3.5 py-1 rounded-full backdrop-blur-md">
            Featured Expertise
          </span> */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-3 sm:mb-4 uppercase">
            Built with Precision & High Performance
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Delivering clean architecture, blazing-fast speeds, and flawless
            user experiences from design to production.
          </p>
        </div>

        {/* Central Image Container & Responsive Overlapping Floating Cards */}
        <div className="relative w-full max-w-5xl mx-auto my-4 sm:my-8">
          {/* Main Image Container: Utilizes custom border radii to create the organic indented corner curves */}
          <div className="w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-zinc-900 relative shadow-2xl overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 z-0">
            <img
              src={profileImg}
              alt="Profile Hero"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* FLOATING CARD 1: Top Left (Dark Card) - Positioned over the top-left custom corner curve */}
          <div className="relative sm:absolute -top-6 sm:top-6 left-0 sm:left-[-1.5rem] mb-3 sm:mb-0 bg-[#0b0f19] text-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl w-full sm:w-72 z-20 flex flex-col gap-1 border border-white/10 backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              90%+
            </span>
            <p className="text-[11px] sm:text-xs text-zinc-400 leading-snug">
              Optimized codebase for top-tier PageSpeed scores.
            </p>
          </div>

          {/* FLOATING CARD 2: Top Right (White Card) */}
          <div className="relative sm:absolute top-2 sm:top-6 right-0 sm:right-[-1rem] mb-3 sm:mb-0 bg-white text-zinc-900 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-3 w-full sm:w-56 z-20 border border-zinc-100">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900">
                SEO
              </span>
              <span className="text-[10px] text-zinc-500">
                Schema & Metadata Ready
              </span>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold ml-auto">
              ★
            </div>
          </div>

          {/* FLOATING CARD 3: Bottom Left (White Card) */}
          <div className="relative sm:absolute bottom-auto sm:bottom-8 left-0 sm:left-[-2rem] my-3 sm:my-0 bg-white text-zinc-900 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl w-full sm:w-64 z-20 flex flex-col gap-1 border border-zinc-100">
            <span className="text-lg sm:text-xl font-black tracking-tight text-zinc-900">
              Figma to WordPress
            </span>
            <p className="text-[11px] sm:text-xs text-zinc-500 leading-snug">
              Pixel-perfect conversion of complex design files.
            </p>
          </div>

          {/* FLOATING CARD 4: Bottom Right (Service Tags Capsule Box) - Positioned over the bottom-right indented curve */}
          <div className="relative sm:absolute bottom-auto sm:bottom-6 right-0 sm:right-[-1.5rem] mt-3 sm:mt-0 bg-[#0b0f19]/95 backdrop-blur-md border border-white/10 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md z-20">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start sm:justify-end">
              {serviceTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] sm:text-[11px] font-medium bg-zinc-900 border border-white/10 text-zinc-300 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-inner"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
