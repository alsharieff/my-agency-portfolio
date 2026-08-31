import React from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Cpu,
  Sparkles,
} from "lucide-react";

import profileImg from "../assets/profile-hero.webp";

const coreCapabilities = [
  {
    category: "WordPress Engineering",
    items: [
      "Custom PHP Hooks",
      "ACF & Custom Post Types",
      "Figma-to-Elementor 1:1",
    ],
  },
  {
    category: "Technical SEO & Speed",
    items: [
      "DOM Optimization",
      "Core Web Vitals",
      "Schema & Technical Crawlability",
    ],
  },
];

const timelineData = [
  {
    type: "experience",
    icon: Briefcase,
    role: "SEO Specialist",
    company: "Digital Growth & Optimization",
    period: "Jan 2024 - Present",
    datetime: "2024-01",
    desc: "Bridging web development and technical SEO to build high-performance casino platforms optimized for organic search visibility, speed, and architecture.",
  },
  {
    type: "experience",
    icon: Briefcase,
    role: "Web Developer",
    company: "Custom Themes & Engineering",
    period: "Active",
    datetime: "2023",
    desc: "Building lightweight, custom WordPress themes from scratch with clean PHP hooks and structured DOM components, alongside pixel-perfect 1:1 Figma-to-Elementor conversions.",
  },
  {
    type: "experience",
    icon: Briefcase,
    role: "Property Consultant",
    company: "Client Relations & Advisory",
    period: "4+ Years",
    datetime: "2020",
    desc: "Managing high-value client investments, market evaluations, and tactical negotiation pipelines.",
  },
  {
    type: "education",
    icon: GraduationCap,
    role: "BS in Information Technology",
    company: "ABE International Business College | AMA",
    period: "Class 2025",
    datetime: "2025",
    desc: "Focused on web architecture, web development, and software engineering principles.",
  },
  {
    type: "education",
    icon: GraduationCap,
    role: "Zuitt Coding Bootcamp",
    company: "Full-Stack Web Development",
    period: "Certified",
    datetime: "2023",
    desc: "Intensive training in modern JavaScript, API integration, and front-end design standards.",
  },
];

export default function About() {
  return (
    <main className="w-full min-h-screen bg-[#05070c] text-white pt-28 pb-24 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Decorative Dynamic Background Accents */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[180px] pointer-events-none rounded-full"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Hero Header */}
        <header className="border-b border-zinc-800/80 pb-12 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <h1>Developer Profile & Background</h1>
          </div>
        </header>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Sidebar (Profile & Stats Spotlight) */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            {/* Main Avatar Card */}
            <article className="bg-[#080b11] border border-zinc-800/80 rounded-3xl p-4 sm:p-6 relative overflow-hidden shadow-2xl">
              {/* IMAGE RESPONSIVENESS: 
                  - Visible on Mobile (default block)
                  - Hidden on Tablet (sm:hidden)
                  - Visible on Desktop (lg:block) 
              */}
              <figure className="hidden block sm:hidden lg:block relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/60 mb-6">
                <img
                  src={profileImg}
                  alt="Web Developer and SEO Specialist Profile Picture"
                  title="Web Developer Profile"
                  loading="eager"
                  width="400"
                  height="400"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-90"
                />
              </figure>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-3 text-center">
                  <span className="block text-xl font-bold font-mono text-white">
                    Web Developer
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    WYN DIGITAL
                  </span>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-3 text-center">
                  <span className="block text-xl font-bold font-mono text-blue-400">
                    SEO Specialist
                  </span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    FORGETECH DIGITAL
                  </span>
                </div>
              </div>
            </article>

            {/* Technical Core Capabilities Section */}
            <section
              aria-labelledby="capabilities-heading"
              className="bg-[#080b11] border border-zinc-800/80 rounded-3xl p-6 space-y-4"
            >
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Cpu className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <h2
                  id="capabilities-heading"
                  className="text-sm font-bold text-white"
                >
                  Technical Capabilities
                </h2>
              </div>

              <div className="space-y-4">
                {coreCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="space-y-2">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wide block">
                      {cap.category}
                    </span>
                    <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                      {cap.items.map((item, iIdx) => (
                        <li
                          key={iIdx}
                          className="text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* RIGHT COLUMN: Chronological Timeline */}
          <section
            aria-labelledby="roadmap-heading"
            className="lg:col-span-7 space-y-8"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800">
              <Terminal className="w-5 h-5 text-blue-400" aria-hidden="true" />
              <h2
                id="roadmap-heading"
                className="text-xl font-bold text-white tracking-wide"
              >
                Experience & Academic Roadmap
              </h2>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-zinc-800">
              {timelineData.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <article key={idx} className="relative group">
                    {/* Node Dot */}
                    <div
                      aria-hidden="true"
                      className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-[#05070c] border border-zinc-700 flex items-center justify-center text-blue-400 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all"
                    >
                      <IconComponent className="w-3 h-3" />
                    </div>

                    {/* Content Card */}
                    <div className="bg-[#080b11] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <time
                          dateTime={item.datetime}
                          className="text-xs font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20"
                        >
                          {item.period}
                        </time>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-xs text-zinc-400 mb-3 font-medium">
                        {item.company}
                      </p>

                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Additional Certifications Box */}
            <article className="bg-[#080b11] border border-zinc-800/80 rounded-2xl p-6 mt-8 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                <Award className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  Continuous Upskilling & Certifications
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Active participant in technical summits, SEO workshops, and
                  academic tech seminars to maintain modern web standards.
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
