import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  ArrowRight,
  Layers,
} from "lucide-react";

import ss1 from "../assets/ss1.webp";
import ss2 from "../assets/ss2.webp";
import ss3 from "../assets/ss3.webp";
import ss4 from "../assets/ss4.webp";
import ss5 from "../assets/ss5.webp";
import ss6 from "../assets/ss6.webp";
import ss7 from "../assets/ss7.webp";
import ss8 from "../assets/ss8.webp";

const showcaseItems = [
  {
    id: 1,
    title: "Legal Platform",
    category: "Legal & Corporate",
    desc: "Custom high-converting legal platform built with bespoke post types and fast PHP hooks.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    imageDesktop: ss1,
    imageMobile: ss2,
    serviceUrl: "/services#legal-websites",
  },
  {
    id: 2,
    title: "Fintech Platform",
    category: "Fintech",
    desc: "Modular UI architecture designed for optimal conversion, speed, and mobile responsiveness.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    imageDesktop: ss2,
    imageMobile: ss3,
    serviceUrl: "/services#fintech-platforms",
  },
  {
    id: 3,
    title: "Industrial UI",
    category: "Industrial",
    desc: "Heavy industry catalog layout with lightweight JavaScript routing and clean DOM structure.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    imageDesktop: ss3,
    imageMobile: ss4,
    serviceUrl: "/services#industrial-ui",
  },
  {
    id: 4,
    title: "Healthcare Web",
    category: "Healthcare",
    desc: "Accessible, fast-loading web portal engineered for care services and SEO optimization.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    imageDesktop: ss4,
    imageMobile: ss5,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 5,
    title: "Care Portal",
    category: "Healthcare",
    desc: "Structured client field management & high-performance custom layout.",
    tags: ["WordPress", "ACF", "Custom PHP", "Elementor"],
    imageDesktop: ss5,
    imageMobile: ss6,
    serviceUrl: "/services#healthcare-web",
  },
  {
    id: 6,
    title: "Casino Platform",
    category: "iGaming / Casino",
    desc: "High-traffic casino site optimized for technical SEO, rapid crawlability, and core web vitals.",
    tags: ["WordPress", "SEO", "Custom PHP", "DOM Optimization"],
    imageDesktop: ss6,
    imageMobile: ss7,
    serviceUrl: "/services#casino-dev",
  },
];

export default function Portfolio() {
  const [deviceView, setDeviceView] = useState("desktop");
  const [activeProject, setActiveProject] = useState(showcaseItems[0]);

  return (
    <main className="w-full min-h-screen bg-[#05070c] text-white pt-40 pb-24 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Simplified Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6">
          <h1 className="text-[11px] font-mono tracking-[0.25em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4">
            Selected Work Showcase
          </h1>
        </div>

        {/* SECTION 1: Spotlight Display (Static Non-Scrollable Mockup) */}
        <div className="bg-[#080b11] border border-zinc-800 rounded-3xl p-6 sm:p-12 mb-24 grid lg:grid-cols-12 gap-8 items-center shadow-2xl">
          {/* Mockup Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className={`transition-all duration-500 relative rounded-2xl border border-zinc-700/60 bg-[#030508] overflow-hidden shadow-2xl ${
                deviceView === "desktop"
                  ? "w-full max-w-[620px] h-[380px] sm:h-[440px]"
                  : "w-[240px] sm:w-[280px] h-[480px] sm:h-[540px] border-8 border-zinc-800 rounded-[36px]"
              }`}
            >
              {/* Browser Header Bar */}
              {deviceView === "desktop" && (
                <div className="h-8 bg-zinc-900 border-b border-zinc-800 px-3 flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono text-zinc-500 ml-2">
                    {activeProject.title.toLowerCase().replace(/\s+/g, "")}.com
                  </span>
                </div>
              )}

              {/* Fixed Frame Container (No Internal Scrolling) */}
              <div className="w-full h-[calc(100%-2rem)] overflow-hidden">
                <img
                  src={
                    deviceView === "desktop"
                      ? activeProject.imageDesktop
                      : activeProject.imageMobile
                  }
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Project Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
              <Layers className="w-3.5 h-3.5" />
              <span>{activeProject.category}</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              {activeProject.title}
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeProject.desc}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-700/80 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={activeProject.serviceUrl}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-lg shadow-blue-600/20 group"
              >
                <span>View Full Case Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: Grid Deliverables */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">
            All Project Deliverables
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveProject(item);
                  window.scrollTo({ top: 200, behavior: "smooth" });
                }}
                className={`bg-[#080b11] border rounded-2xl overflow-hidden transition cursor-pointer group flex flex-col justify-between ${
                  activeProject.id === item.id
                    ? "border-blue-500/80 ring-1 ring-blue-500/50"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="relative h-60 overflow-hidden bg-zinc-950">
                  <img
                    src={
                      deviceView === "desktop"
                        ? item.imageDesktop
                        : item.imageMobile
                    }
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-zinc-900/90 border border-zinc-700/60 p-1.5 rounded-lg text-white">
                    {deviceView === "desktop" ? (
                      <Monitor className="w-4 h-4" />
                    ) : (
                      <Smartphone className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-xs line-clamp-2 mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-blue-400 group-hover:underline flex items-center gap-1">
                      Inspect <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
