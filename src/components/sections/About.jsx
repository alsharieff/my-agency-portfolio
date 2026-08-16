import React from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Building2,
  Globe,
  Code2,
} from "lucide-react";

// Replace with your actual photo path
import profileImg from "../../assets/profile-hero.webp";

export default function About() {
  return (
    <section className="relative w-full bg-[#05070c] text-white flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl flex flex-col items-center justify-center relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center gap-3 mb-12 sm:mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold">
            Background & Expertise
          </h2>
          <p className="text-zinc-400 text-center max-w-xl text-sm sm:text-base leading-relaxed font-normal">
            Bridging technical execution with business growth through
            specialized WordPress development, SEO strategies, and client
            consulting.
          </p>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT COLUMN: Work Experience */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-md bg-zinc-800/80 flex items-center justify-center text-blue-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                Work Experience
              </h3>
            </div>

            {/* Exp Card 1 */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200 p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    SEO Specialist
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Digital Growth & Optimization
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  2+ Years
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Driving organic visibility, keyword strategy, and technical
                search engine performance metrics.
              </p>
            </div>

            {/* Exp Card 2 */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200 p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    WordPress Developer
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Custom Themes & Engineering
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  Present
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Building custom 1:1 Figma conversions, modular DOM components,
                and lightweight themes.
              </p>
            </div>

            {/* Exp Card 3 */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200 p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Property Consultant
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Client Relations & Advisory
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  4+ Years
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Managing high-value client investments, market evaluations, and
                tactical negotiation pipelines.
              </p>
            </div>
          </div>

          {/* CENTER COLUMN: Profile Image Showcase */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-4 lg:my-0">
            <div className="w-full h-full min-h-[420px] rounded-2xl border border-zinc-800/80 bg-zinc-950/90 overflow-hidden relative group p-2 flex flex-col justify-center items-center shadow-2xl">
              {/* Inner Decorative Border Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-800/60">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-transparent to-transparent opacity-80" />

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-200">
                      Available for Hire
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    BSIT 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Education & Certifications */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-md bg-zinc-800/80 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                Education & Credentials
              </h3>
            </div>

            {/* Edu Card 1: Degree */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200 p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    BS in Information Technology
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Higher Education Graduate
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 shrink-0">
                  Class 2025
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Focused on web architecture, database management, and software
                engineering principles.
              </p>
            </div>

            {/* Edu Card 2: Bootcamps & Training */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200 p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Zuitt Coding Bootcamp
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Full-Stack Web Development
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  Certified
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Intensive training in modern JavaScript, API integration, and
                front-end design standards.
              </p>
            </div>

            {/* Edu Card 3: Seminars & Active Learning */}
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200 p-5 flex flex-col justify-between flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Seminars & Certifications
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Continuous Upskilling
                  </p>
                </div>
                <div className="p-1 rounded bg-zinc-800 text-blue-400">
                  <Award className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                Active participant in technical summits, SEO workshops, and
                academic tech seminars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
