import React from "react";
import ss1 from "../../assets/ss1.webp";
import ss2 from "../../assets/ss2.webp";
import ss3 from "../../assets/ss3.webp";
import ss4 from "../../assets/ss4.webp";
import ss5 from "../../assets/ss5.webp";
import ss6 from "../../assets/ss6.webp";
import ss7 from "../../assets/ss7.webp";
import ss8 from "../../assets/ss8.webp";

// Replace these image paths with your actual site screenshots
const showcaseItems = [
  {
    id: 1,
    title: "kgwlaw",
    image: ss1,
    serviceUrl: "/services#legal-websites",
  },
  {
    id: 2,
    title: "eholdings",
    image: ss2,
    serviceUrl: "/services#fintech-platforms",
  },
  {
    id: 3,
    title: "premiertanks",
    image: ss3,
    serviceUrl: "/services#industrial-ui",
  },
  {
    id: 4,
    title: "caringaustralia",
    image: ss4,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 5,
    title: "caringaustralia",
    image: ss5,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 6,
    title: "caringaustralia",
    image: ss6,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 7,
    title: "caringaustralia",
    image: ss7,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 8,
    title: "caringaustralia",
    image: ss8,
    serviceUrl: "/services#healthcare-web",
  },
];

// Duplicating array ensures a seamless infinite scroll loop
const tickerList = [...showcaseItems, ...showcaseItems];

export default function FeaturedWorkCarousel() {
  return (
    <section className="relative w-full bg-[#05070c] text-white flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Strict Standard Inner Container */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center relative z-10">
        {/* Sub-Header */}
        <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Recent Deliverables
        </h2>

        {/* Carousel Outer Bounds (Confined inside max-w-6xl) */}
        <div className="w-full relative overflow-hidden group rounded-2xl">
          {/* Edge Fade Gradients inside container */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#151d31] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#151d31] to-transparent z-20 pointer-events-none" />

          {/* Marquee Motion Track */}
          <div className="flex gap-6 sm:gap-8 w-max animate-infinite-scroll group-hover:[animation-play-state:paused] py-2">
            {tickerList.map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.serviceUrl}
                className="w-[300px] sm:w-[380px] h-[520px] sm:h-[650px] rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-3 flex flex-col shrink-0 overflow-hidden group/card hover:border-zinc-700 transition-colors duration-300 shadow-2xl relative"
              >
                {/* Browser Top Shell Bar */}
                <div className="h-8 bg-zinc-900/90 border-b border-zinc-800/80 px-3 flex items-center justify-between shrink-0 rounded-t-xl">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[150px]">
                    {item.title}.com
                  </span>
                  <div className="w-4" />
                </div>

                {/* Main Screenshot Window */}
                <div className="relative w-full flex-1 overflow-hidden bg-zinc-900 rounded-b-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover/card:translate-y-[-60%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Scroll Keyframes */}
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
