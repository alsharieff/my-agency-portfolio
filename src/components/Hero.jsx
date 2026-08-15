import React from "react";
import { Globe } from "lucide-react";

// Fallback image URL
const fallbackProfile =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80";

// Safely load all assets from src/assets/ dynamically
const assetModules = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
});

const getAsset = (fileName, fallback = null) => {
  const path = `../assets/${fileName}`;
  return assetModules[path] || fallback;
};

// Define assets cleanly
const profilePic = getAsset("profile.png", fallbackProfile);
const acfLogo = getAsset("acf.svg");
const screamingfrog = getAsset("frog.svg");
const gsc = getAsset("gsc.svg");
const css = getAsset("css.svg");
const chatgpt = getAsset("chatgpt.svg");
const ahref = getAsset("ahref.svg");

export default function Hero() {
  // Helper to render tech logos via Simple Icons CDN
  const TechLogo = ({ slug, color }) => (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color || "ffffff"}`}
      alt={slug}
      className="w-4 h-4 object-contain"
      loading="lazy"
    />
  );

  // TOP ROW: Core WordPress Development & Frontend Stack
  const row1Stack = [
    {
      name: "WordPress",
      handle: "@cms",
      desc: "Custom theme setup & core system optimization",
      slug: "wordpress",
      color: "21759B",
    },
    {
      name: "PHP for WP",
      handle: "@backend",
      desc: "Custom hooks, actions, filters & lightweight function logic",
      slug: "php",
      color: "777BB4",
    },
    {
      name: "ACF",
      handle: "@fields",
      desc: "Custom post types & structured client field management",
      customSvg: acfLogo,
      slug: "wordpress",
      color: "38BDF8",
    },
    {
      name: "Elementor",
      handle: "@builder",
      desc: "Clean page layout implementation with minimal DOM bloat",
      slug: "elementor",
      color: "92003B",
    },
    {
      name: "HTML5",
      handle: "@markup",
      desc: "Clean DOM structure, semantic tags & SEO-friendly hierarchy",
      slug: "html5",
      color: "E34F26",
    },
    {
      name: "CSS3",
      handle: "@styling",
      desc: "Custom layouts, animations, Flexbox, Grid & responsive design",
      customSvg: css,
      slug: "css3",
      color: "1572B6",
    },
    {
      name: "Tailwind CSS",
      handle: "@utility",
      desc: "Utility-first custom styling for fast UI execution",
      slug: "tailwindcss",
      color: "06B6D4",
    },
    {
      name: "Bootstrap",
      handle: "@framework",
      desc: "Grid system & mobile-first responsive layouts",
      slug: "bootstrap",
      color: "7952B3",
    },
    {
      name: "JavaScript",
      handle: "@script",
      desc: "DOM manipulation & interactive UI scripts",
      slug: "javascript",
      color: "F7DF1E",
    },
  ];

  // BOTTOM ROW: SEO, Version Control & AI Stack
  const row2Stack = [
    {
      name: "Google Search Console",
      handle: "@gsc",
      desc: "Indexing, XML sitemaps & crawl error resolution",
      customSvg: gsc,
      slug: "google",
      color: "4285F4",
    },
    {
      name: "Screaming Frog",
      handle: "@audit",
      desc: "Technical SEO audits, redirect mapping & canonical checks",
      customSvg: screamingfrog,
      slug: "frog",
      color: "4DAB9A",
    },
    {
      name: "Ahrefs",
      handle: "@seo-tool",
      desc: "Site architecture analysis & target keyword research",
      customSvg: ahref,
      slug: "ahrefs",
      color: "FF5A00",
    },
    {
      name: "GitHub",
      handle: "@version",
      desc: "Version control & seamless theme codebase backups",
      slug: "github",
      color: "ffffff",
    },
    {
      name: "ChatGPT",
      handle: "@ai-copilot",
      desc: "AI assistance for rapid regex, schema JSON-LD & logic debugging",
      customSvg: chatgpt,
      slug: "openai",
      color: "10A37F",
    },
    {
      name: "Gemini",
      handle: "@ai-model",
      desc: "Code optimization & SEO content structure planning",
      slug: "googlegemini",
      color: "8E75FF",
    },
  ];

  // Duplicate arrays for infinite marquee loop
  const topRow = [...row1Stack, ...row1Stack];
  const bottomRow = [...row2Stack, ...row2Stack];

  return (
    <section className="relative min-h-screen w-full bg-[#05070c] text-white flex flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden font-sans">
      {/* Globe, Name & Photo Hero Container */}
      <div className="relative mb-6 flex items-center justify-center w-full max-w-6xl min-h-[300px]">
        {/* LEFT SIDE: Name "ALSHARIEFF" */}
        <div className="hidden md:flex flex-col items-end absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 text-right z-10 pointer-events-none">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-1">
            Portfolio
          </span>
          <h1 className="text-3xl lg:text-5xl font-black tracking-wider text-white uppercase text-glow">
            ALSHARIEFF
          </h1>
          <span className="text-xs text-zinc-500 font-mono tracking-widest mt-1">
            DEVELOPER & SEO SPECIALIST
          </span>
        </div>

        {/* CENTER: Globe & Orbit Graphic Area */}
        <div className="relative flex flex-col items-center justify-center z-10">
          <div className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -z-10 pointer-events-none" />
          <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-zinc-800/80 animate-pulse pointer-events-none" />
          <div className="absolute w-72 h-28 sm:w-96 sm:h-40 rounded-[100%] border border-blue-500/20 transform -rotate-12 pointer-events-none" />

          {/* Inner Globe Container */}
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-zinc-800 bg-zinc-950/90 flex items-center justify-center shadow-2xl shadow-blue-500/10 relative overflow-hidden my-6">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
            <Globe className="w-20 h-20 sm:w-24 sm:h-24 text-zinc-600 stroke-[1] animate-pulse" />
          </div>

          {/* Center Pill Badge */}
          <div className="z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-xs font-medium text-zinc-300 shadow-xl backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>WordPress & Technical SEO Architecture</span>
          </div>
        </div>

        {/* RIGHT SIDE: Portrait Photo */}
        <div className="hidden md:block absolute -right-4 lg:right-6 top-1/2 -translate-y-1/2 w-44 lg:w-56 pointer-events-none z-10">
          <div className="relative w-full h-full">
            {profilePic && (
              <img
                src={profilePic}
                alt="Alsharieff"
                className="w-full h-auto object-cover opacity-80 contrast-110 drop-shadow-[0_0_20px_rgba(59,130,246,0.15)] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center max-w-3xl mt-2 text-white text-glow px-2">
        WordPress Built for Speed & Search Rankings
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-zinc-400 text-center max-w-xl text-sm sm:text-base leading-relaxed font-normal px-4">
        Custom, fast WordPress sites structured specifically for SEO—combining
        clean PHP hooks, optimized site hierarchy, and modern tools to boost
        rankings.
      </p>

      {/* Dual Marquee Ticker Section */}
      <div className="relative w-full max-w-7xl mt-14 overflow-hidden py-4">
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#05070c] via-[#05070c]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#05070c] via-[#05070c]/80 to-transparent z-20 pointer-events-none" />

        {/* TOP ROW: Moving Left */}
        <div className="flex mb-4 overflow-hidden">
          <div className="animate-marquee-left gap-4 pr-4">
            {topRow.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center min-w-[280px] max-w-[320px] p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-md bg-zinc-800/80 flex items-center justify-center">
                    {item.customSvg ? (
                      <img
                        src={item.customSvg}
                        alt={item.name}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <TechLogo slug={item.slug} color={item.color} />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono ml-auto">
                    {item.handle}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Moving Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right gap-4 pr-4">
            {bottomRow.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center min-w-[280px] max-w-[320px] p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-zinc-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-md bg-zinc-800/80 flex items-center justify-center">
                    {item.customSvg ? (
                      <img
                        src={item.customSvg}
                        alt={item.name}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <TechLogo slug={item.slug} color={item.color} />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono ml-auto">
                    {item.handle}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
