import React from "react";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import UrlSrvice from "../../assets/service-url.webp";

export default function FeaturedServices() {
  const service = {
    badge: "01 // Featured Service",
    title: "Forgetech URL Services",
    subtitle: "In-House SEO & Web Utility Platform",
    description:
      "An enterprise-grade, privacy-centric web utility designed to clean, filter, and normalize high-volume URL lists instantly without transmitting data to external servers.",
    capabilities: [
      "Bulk URL Sanitization & De-duplication",
      "Automated UTM & Tracking Parameter Stripping",
      "Flexible Regex & String Keyword Filtering",
      "Trailing Slash & Protocol Normalization",
      "Multi-Format Batch Conversion",
      "Custom Compression & Quality Control",
      "Batch Drag-and-Drop File Uploads",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "GitHub", "Vercel"],
    liveUrl: "https://forgetech-url-service-dev-sharl.vercel.app/",
    // 2. Assign the imported module variable here (NOT a string)
    image: UrlSrvice,
  };

  return (
    <section className="relative w-full bg-[#030408] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans border-b border-white/5">
      {/* Minimal Red Accent Glow (Subtle Right Background Bleed) */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[450px] bg-red-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto flex flex-col relative z-10">
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              {service.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
              Web Utilities{" "}
              <span className="font-extrabold text-white">& Services</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-xs">
            Custom web service for high-speed client-side operations.
          </p>
        </div>

        {/* Minimalist Split Showcase Card */}
        <div className="w-full bg-[#07090e] border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left Column: Clean Typography & Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              {/* App Status Indicator */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  Active Utility • v1.0
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
                {service.title}
              </h3>

              <p className="text-xs font-mono text-zinc-400 mb-6">
                {service.subtitle}
              </p>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              {/* Minimal Checklist */}
              <ul className="flex flex-col gap-2.5 mb-8">
                {service.capabilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-zinc-400"
                  >
                    <Check className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Tags & Action Button */}
            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
              <div className="flex flex-wrap gap-1.5">
                {service.tech.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={service.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors group/btn mt-2"
              >
                <span>Launch Application</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean App Showcase Frame */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="w-full flex-1 bg-[#030408] border border-white/10 rounded-xl overflow-hidden relative flex flex-col min-h-[260px] sm:min-h-[340px]">
              {/* Minimalist Browser Bar */}
              <div className="bg-[#0a0d14] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                  <Lock className="w-2.5 h-2.5 text-zinc-400" />
                  <span>forgetech-url-services.app</span>
                </div>
                <div className="w-6" />
              </div>

              {/* App Screenshot Container */}
              <div className="w-full flex-1 relative overflow-hidden bg-zinc-950 flex items-center justify-center">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="p-8 text-center text-zinc-600 font-mono text-xs">
                    [ Application Interface Preview ]
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
