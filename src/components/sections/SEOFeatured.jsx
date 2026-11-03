import React from "react";
import gscdata from "../../assets/gsc-data2.webp";

export default function SEOFeatured() {
  const steps = [
    {
      title: "Technical SEO",
      desc: "Deep site architecture optimization, Core Web Vitals tuning, crawl budget management, XML sitemaps, indexation, and clean structured data.",
      highlight: false,
      tag: "Core Focus",
    },
    {
      title: "Off-Page SEO",
      desc: "Proven off-page strategy focusing on strategic guest posting, active forum engagement, Web 2.0 creation, high-authority profiling, and fast Domain Authority (DA) growth for new sites.",
      highlight: false,
      tag: "Core Focus",
    },
    {
      title: "On-Page SEO",
      desc: "Strategic keyword integration, title tags, meta descriptions, content hierarchy structuring, and semantic schema markup.",
      highlight: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans border-b border-white/5 overflow-hidden">
      {/* --- AMBIENT TEAL/GREEN RADIAL BACKGROUND GLOW --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[1000px] h-[450px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* --- TOP: SEARCH CONSOLE SCREENSHOT SHOWCASE WITH BADGES & L-POINTERS --- */}
        <div className="relative w-full max-w-4xl flex justify-center items-center">
          {/* Top Left Badge + Cyan L-Pointer Line */}
          <div className="hidden lg:flex absolute -left-12 top-12 z-20 items-center">
            <div className="bg-[#0b1329]/95 border border-slate-700/60 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md">
              <span className="text-xs font-bold text-white tracking-wide">
                Optimized WordPress Site
              </span>
            </div>
            <div className="w-8 h-10 border-b-2 border-r-2 border-cyan-400/80 rounded-br-lg -ml-1 translate-y-5 pointer-events-none" />
          </div>

          {/* Bottom Left Floating White Badge (+240%) */}
          <div className="hidden lg:flex absolute -left-16 bottom-8 z-20 flex-col bg-white/95 text-slate-900 border border-slate-200 p-3.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md w-44">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold mb-1">
              <span>Organic Traffic</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                +240%
              </span>
            </div>
            <div className="text-xl font-black text-emerald-600 mb-1">
              +240%
            </div>
            <div className="w-full h-3 bg-slate-100 rounded flex items-end gap-0.5 p-0.5">
              <div className="w-1/5 bg-emerald-400 h-[30%] rounded-sm" />
              <div className="w-1/5 bg-emerald-400 h-[50%] rounded-sm" />
              <div className="w-1/5 bg-emerald-500 h-[70%] rounded-sm" />
              <div className="w-1/5 bg-emerald-500 h-[85%] rounded-sm" />
              <div className="w-1/5 bg-emerald-600 h-[100%] rounded-sm" />
            </div>
          </div>

          {/* Top Right Floating White Badge (+150%) */}
          <div className="hidden lg:flex absolute -right-10 top-14 z-20 flex-col bg-white/95 text-slate-900 border border-slate-200 p-3.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md w-44">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold mb-1">
              <span>Top 10 Keywords</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                +150%
              </span>
            </div>
            <div className="text-xl font-black text-emerald-600">+150%</div>
          </div>

          {/* Right Middle Badge + Cyan L-Pointer Line */}
          <div className="hidden lg:flex absolute -right-14 top-1/2 translate-y-4 z-20 items-center">
            <div className="w-8 h-10 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-lg -mr-1 -translate-y-5 pointer-events-none" />
            <div className="bg-[#0b1329]/95 border border-slate-700/60 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md">
              <span className="text-xs font-bold text-white tracking-wide">
                Organic Growth Strategy
              </span>
            </div>
          </div>

          {/* Clean Screenshot Display (Outer border container removed) */}
          <div className="w-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <img
              src={gscdata}
              alt="Google Search Console Real Performance Analytics"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        {/* --- CENTER CONNECTING STEM --- */}
        <div className="w-px h-16 bg-blue-500/30 my-0 relative z-0 hidden lg:block" />

        {/* --- BOTTOM: 2-COLUMN PROCESS GRID --- */}
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative pt-4">
          {/* Left Column: Heading, Progress Bars & Project Button */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wider mb-3">
                3 PARTS OF SEO
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Specialized framework centered on technical architecture and
                authority building for search dominance.
              </p>
            </div>

            {/* Metric Progress Bars */}
            <div className="flex flex-col gap-5 pt-1">
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>Technical SEO (Core)</span>
                </div>
                <div className="w-full bg-[#0b1329] rounded-full h-2 border border-white/5 overflow-hidden">
                  <div className="bg-blue-500 h-full w-[100%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>Off-Page Authority (Core)</span>
                </div>
                <div className="w-full bg-[#0b1329] rounded-full h-2 border border-white/5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[100%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
                  <span>On-Page SEO</span>
                </div>
                <div className="w-full bg-[#0b1329] rounded-full h-2 border border-white/5 overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[100%]" />
                </div>
              </div>
            </div>

            {/* Team Projects Action Button */}
            <div className="pt-2">
              <a
                href="https://yonoreview.com/"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-200 group"
              >
                <span>View Previous Team Projects</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Continuous Center Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-[45.8%] top-0 bottom-0 w-px bg-blue-500/20" />

          {/* Right Column: Timeline Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Timeline Circle Node */}
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#030712] border-2 border-blue-500 flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>

                {step.highlight ? (
                  <div className="bg-[#080d1a] border border-blue-500/30 p-5 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-white uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-bold bg-blue-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {step.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ) : (
                  <div className="py-1">
                    <h4 className="text-base font-bold text-white uppercase tracking-wide mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
