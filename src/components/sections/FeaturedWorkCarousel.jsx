import React from "react";
import ss1 from "../../assets/ss1.webp";
import ss2 from "../../assets/ss2.webp";
import ss3 from "../../assets/ss3.webp";
import ss4 from "../../assets/ss4.webp";
import ss5 from "../../assets/ss5.webp";
import ndalock from "../../assets/nda-lock.webp";

export default function FeaturedWorkCarousel() {
  const slides = [
    { id: 1, img: ss1, title: "Protected Work Sample 1" },
    { id: 2, img: ss2, title: "Protected Work Sample 2" },
    { id: 3, img: ss3, title: "Protected Work Sample 3" },
    { id: 4, img: ss4, title: "Protected Work Sample 4" },
    { id: 5, img: ss5, title: "Protected Work Sample 5" },
  ];

  // Duplicate slides array to create seamless infinite loop
  const marqueeSlides = [...slides, ...slides];

  return (
    <section className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans border-t border-b border-white/5">
      {/* Ambient Lighting Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[400px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[700px] h-[300px]" />

      {/* Embedded Continuous Infinite Marquee Animation Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        {/* --- TOP: NDA SECTION GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Holographic Shield Graphic */}
          <div className="hidden lg:flex lg:col-span-3 justify-center items-center">
            <img
              src={ndalock}
              alt="NDA Protection Shield Left"
              className="w-56 h-auto object-contain"
            />
          </div>

          {/* Center Content Section */}
          <div className="lg:col-span-6 flex flex-col items-center text-center">
            {/* Section Badge */}
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">
              NDA Website Build
            </span>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-8 uppercase leading-tight max-w-2xl">
              ENTERPRISE WORK PROTECTED BY STRICT NON-DISCLOSURE AGREEMENTS
            </h2>

            {/* Confidentiality Card */}
            <div className="w-full bg-[#080d1a]/80 border border-blue-500/20 p-6 sm:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl text-left flex flex-col justify-between gap-6">
              <div className="flex items-start gap-4">
                {/* Card Header Icon */}
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide mb-2 uppercase">
                    CONFIDENTIALITY GUARANTEED
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Out of professional integrity and respect for former
                    corporate employers and institutional partners, direct live
                    links or proprietary platform code cannot be publicly
                    exhibited here under signed non-disclosure agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Holographic Shield Graphic */}
          <div className="hidden lg:flex lg:col-span-3 justify-center items-center">
            <img
              src={ndalock}
              alt="NDA Protection Shield Right"
              className="w-56 h-auto object-contain"
            />
          </div>
        </div>

        {/* --- BOTTOM: CONTINUOUS INFINITE RUNNING CAROUSEL --- */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden">
          <div className="animate-marquee flex gap-4 items-stretch">
            {marqueeSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="w-72 sm:w-80 h-56 sm:h-64 flex-shrink-0 relative overflow-hidden rounded-2xl border border-white/10 bg-[#030712] p-3 flex items-center justify-center"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
