import React, { useState } from "react";
/* 
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
*/

export default function Portfolio() {
  /* 
  const [deviceView, setDeviceView] = useState("desktop");
  const [activeProject, setActiveProject] = useState(showcaseItems[0]);
  */

  return (
    <main className="w-full min-h-[calc(100vh-theme(spacing.32))] bg-[#05070c] text-white relative overflow-hidden font-sans flex flex-col justify-center">
      {/* ONLY SHOWING THE NDA NOTICE SECTION FOR NOW */}
      <section className="relative w-full bg-[#030408] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
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
                  employers, institutional partners, and specialized iGaming
                  platforms, direct live links or repository screenshots of
                  proprietary systems cannot be publicly exhibited here.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-400 font-mono">
                Need technical verification or custom code samples?
              </span>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold text-sm whitespace-nowrap"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
