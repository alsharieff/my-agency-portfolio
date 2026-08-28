import React, { useState } from "react";

import featuredImg from "../../assets/featured.webp";
import pagespeed from "../../assets/pagespeed.webp";
import semantic from "../../assets/semantic.webp";
import metadata from "../../assets/metadata.webp";
import mobilefirst from "../../assets/mobilefirst.webp";
import codetheme from "../../assets/codetheme.webp";

const fallbackMobileImg = mobilefirst;
const speedBgImg = pagespeed;
const codeBgImg = semantic;
const seoBgImg = metadata;

export default function Featured() {
  const [speedTab, setSpeedTab] = useState("mobile");

  return (
    <section className="w-full bg-[#05070c] text-white py-16 px-4 flex justify-center font-sans">
      <div className="w-full max-w-6xl relative grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* ================= CARD 1 ================= */}
        <div className="sticky top-20 z-[10] md:sticky md:top-24 md:z-10 md:col-span-4 rounded-xl border border-zinc-800/80 bg-[#080b11] h-[340px] relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <img
            src={fallbackMobileImg}
            alt="Mobile First Architecture"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
          />
          <div className="relative z-10 flex items-center justify-end">
            <span className="text-[10px] font-mono uppercase text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded backdrop-blur-md">
              Fluid UI
            </span>
          </div>
          <div className="relative z-10 bg-gradient-to-t from-[#080b11] via-[#080b11]/80 to-transparent -mx-6 -mb-6 p-6 pt-10 mt-auto">
            <h3 className="text-sm font-semibold text-white">
              Mobile-First Standard
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Engineered for all screen breakpoints
            </p>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="sticky top-20 z-[20] md:sticky md:top-24 md:z-10 md:col-span-8 rounded-xl border border-zinc-800/80 bg-[#080b11] h-[340px] relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <img
            src={featuredImg}
            alt="Figma conversion flow"
            className="absolute inset-0 w-full h-full object-cover object-right opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
          />
          <div className="relative z-10 max-w-sm bg-gradient-to-r from-[#080b11] via-[#080b11]/90 to-transparent -ml-6 -mb-6 p-6 pt-8 rounded-tr-2xl mt-auto">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wide">
              1:1 Fidelity
            </span>
            <h3 className="text-base font-semibold text-white">
              Figma to WordPress
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Pixel-perfect custom theme conversion
            </p>
          </div>
        </div>

        {/* ================= CARD 3 (MIDDLE ARCHITECTURE) ================= */}
        <div className="sticky top-20 z-[30] md:sticky md:top-24 md:z-20 md:col-span-12 rounded-xl border border-zinc-800/80 bg-[#080b11] h-[340px] relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <img
            src={codetheme}
            alt="VS Code Custom Theme Architecture"
            className="absolute inset-0 w-full h-full object-cover object-left opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none"
          />
          <div className="relative z-10 flex items-center justify-end">
            <span className="text-[10px] font-mono uppercase text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2 py-0.5 rounded backdrop-blur-md">
              PHP Hooks
            </span>
          </div>
          <div className="relative z-10 max-w-md bg-gradient-to-r from-[#080b11] via-[#080b11]/90 to-transparent -ml-6 -mb-6 p-6 pt-8 rounded-tr-2xl mt-auto">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wide">
              Custom Theme Development
            </span>
            <h3 className="text-base font-semibold text-white">
              Dynamic Theme Architecture
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Custom PHP templates, functions.php logic & dynamic ACF blocks
            </p>
          </div>
        </div>

        {/* ================= CARD 4 ================= */}
        <div className="sticky top-20 z-[40] md:sticky md:top-24 md:z-30 md:col-span-4 rounded-xl border border-zinc-800/80 bg-[#080b11] h-[340px] relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <img
            src={speedBgImg}
            alt="Page Speed Analytics"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
          />
          <div className="relative z-10 flex items-baseline justify-between bg-gradient-to-t from-[#080b11] via-[#080b11]/80 to-transparent -mx-6 -mb-6 p-6 pt-6 mt-auto">
            <div>
              <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">
                {speedTab === "mobile" ? "94" : "100"}
              </span>
              <span className="text-xs font-mono text-zinc-500 ml-1">/100</span>
            </div>
            <span className="text-[11px] font-mono text-zinc-300">
              PageSpeed Score
            </span>
          </div>
        </div>

        {/* ================= CARD 5 ================= */}
        <div className="sticky top-20 z-[50] md:sticky md:top-24 md:z-30 md:col-span-4 rounded-xl border border-zinc-800/80 bg-[#080b11] h-[340px] relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <img
            src={codeBgImg}
            alt="Semantic HTML Code"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
          />
          <div className="relative z-10 bg-gradient-to-t from-[#080b11] via-[#080b11]/80 to-transparent -mx-6 -mb-6 p-6 pt-6 mt-auto">
            <h3 className="text-sm font-semibold text-white">Semantic HTML5</h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Clean DOM tree structured for search engines
            </p>
          </div>
        </div>

        {/* ================= CARD 6 ================= */}
        <div className="sticky top-20 z-[60] md:sticky md:top-24 md:z-30 md:col-span-4 rounded-xl border border-zinc-800/80 bg-[#080b11] h-[340px] relative overflow-hidden flex flex-col justify-between p-6 shadow-2xl">
          <img
            src={seoBgImg}
            alt="SEO Standard Standards"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"
          />
          <div className="relative z-10 bg-gradient-to-t from-[#080b11] via-[#080b11]/80 to-transparent -mx-6 -mb-6 p-6 pt-6 mt-auto">
            <h3 className="text-sm font-semibold text-white">
              Asset & Meta Standards
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              WebP compression & OpenGraph pre-configured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
