import React from "react";
import {
  Play,
  ArrowRight,
  Compass,
  Code2,
  CheckCircle2,
  RefreshCw,
  Gauge,
  Rocket,
  Sparkles,
} from "lucide-react";
import stepprocess from "../../assets/stepprocess.webp";

export default function Process() {
  const steps = [
    {
      stepLabel: "STEP - 01",
      title: "Discovery & Architecture",
      description:
        "Requirements gathering, wireframing & Figma review, and clear project scope definition.",
      icon: Compass,
      detailText: "Scope & Architecture Lock",
    },
    {
      stepLabel: "STEP - 02",
      title: "Development & Custom Coding",
      description:
        "Custom WordPress PHP template setup with modular ACF and Native meta boxes field blocks.",
      icon: Code2,
      progress: "85%",
    },
    {
      stepLabel: "STEP - 03",
      title: "Quality Assurance & Testing",
      description:
        "Cross-browser testing, broken link resolution, form submission checks, and responsive DOM checks.",
      icon: CheckCircle2,
      detailText: "Zero Console Errors",
    },
    {
      stepLabel: "STEP - 04",
      title: "Client Feedback & Iterations",
      description:
        "Collaborative review sessions, content tweaks, custom field adjustments, and design refinements.",
      icon: RefreshCw,
      detailText: "Client Approval Lock",
    },
    {
      stepLabel: "STEP - 05",
      title: "Performance & Technical SEO",
      description:
        "Mobile first optimizations, PageSpeed audit (90+), WebP image compression, and schema markup.",
      icon: Gauge,
      progress: "95%",
    },
    {
      stepLabel: "STEP - 06",
      title: "Deployment & Launch",
      description:
        "DNS migration, SSL configuration, Google Search Console indexing setup, and production deployment.",
      icon: Rocket,
      detailText: "100% Live Site Ready",
    },
    {
      stepLabel: "STEP - 07",
      title: "Post Launch Maintenance",
      description:
        "Ongoing uptime monitoring, security updates, regular database backups, and feature requests.",
      icon: Sparkles,
      detailText: "Continuous Growth & Care",
    },
  ];

  return (
    <section className="w-full bg-[#05070c] text-white py-20 px-4 md:px-8 flex justify-center font-sans">
      <div className="w-full max-w-6xl bg-[#080b11] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
          {/* LEFT COLUMN: Sticky Header & Video Media Box */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:sticky lg:top-20 self-start">
            <div>
              {/* Badge - Always visible, aligned with the first sticky card */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-[11px] font-mono uppercase tracking-wider text-blue-400">
                <span>HOW IT WORKS</span>
                <span className="text-blue-400">☺</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
                Our 7 Step
                <br />
                Process
              </h2>

              {/* Subtext */}
              <p className="text-xs md:text-sm text-zinc-400 mt-4 leading-relaxed max-w-md">
                A thorough engineering approach from initial architecture to QA
                testing, launch, and continuous post-launch optimization.
              </p>

              {/* Action Button */}
              {/* <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>

            {/* Video / Photo Preview Card */}
            <div className="mt-10 relative rounded-2xl overflow-hidden">
              <img
                src={stepprocess}
                alt="Process Showcase"
                className="w-full h-60 md:h-64 object-cover contrast-105 opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                {/* <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 hover:border-blue-500 transition-colors">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-none">
                      Play Information
                    </h4>
                    <span className="text-xs text-zinc-400 mt-1 block">
                      4 min 30 sec
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 7 Overlapping Sticky Stacking Cards */}
          <div className="lg:col-span-6 relative pl-0 lg:pl-4 space-y-6 pb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              // Card top offset matches the header sticky top position (20) plus height offset
              const stickyTopOffset = 80 + index * 20;
              const zIndex = 10 + index;

              return (
                <div
                  key={index}
                  style={{
                    position: "sticky",
                    top: `${stickyTopOffset}px`,
                    zIndex: zIndex,
                  }}
                  className="w-full bg-[#121620] border border-zinc-800/90 rounded-2xl p-6 shadow-2xl transition-all duration-300 backdrop-blur-xl hover:border-blue-500/50"
                >
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400">
                      {step.stepLabel}
                    </span>
                    <div className="w-7 h-7 rounded-full border border-blue-500/40 bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Bottom Feature Bar */}
                  {step.progress ? (
                    <div className="w-full bg-zinc-800/60 rounded-full h-2 overflow-hidden mt-2">
                      <div
                        className="bg-blue-500 h-full rounded-full transition-all duration-500"
                        style={{ width: step.progress }}
                      />
                    </div>
                  ) : (
                    <div className="pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-zinc-500 text-xs">
                      <div className="flex items-center gap-1.5">
                        <IconComponent className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-zinc-400 text-[11px]">
                          {step.detailText}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
