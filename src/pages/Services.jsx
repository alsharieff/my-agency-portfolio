export default function Services() {
  const coreServices = [
    {
      number: "01",
      icon: "⚙",
      title: "Technical SEO",
      description:
        "Diagnose and eliminate backend crawling and indexation barriers to ensure search engine bots correctly evaluate your site.",
      features: [
        "Full technical site audit",
        "Crawlability & indexability fixes",
        "XML Sitemap & Robots.txt setup",
        "Canonical tags & URL structure",
        "404 error & redirect handling",
      ],
    },
    {
      number: "02",
      icon: "🔗",
      title: "Off-Page SEO",
      description:
        "Build domain authority and trusted off-site signals across key web placements to strengthen search ranking potential.",
      features: [
        "Forum link placement",
        "Web 2.0 network setup",
        "Profile creation & optimization",
        "Guest posting outreach",
        "Niche brand mentions",
      ],
    },
    {
      number: "03",
      icon: "✎",
      title: "On-Page SEO",
      description:
        "Optimize metadata, content hierarchy, internal links, and page structures for search intent and clear crawl signals.",
      features: [
        "Meta title & description optimization",
        "Heading structure hierarchy (H1-H6)",
        "Strategic internal linking architecture",
        "Image Alt text optimization",
        "FAQ schema & content optimization",
      ],
    },
    {
      number: "04",
      icon: "</>",
      title: "Web Development",
      description:
        "Transform designs into fast, clean, and responsive WordPress sites optimized natively for both users and search engines.",
      features: [
        "Figma design to WordPress",
        "Elementor & Custom theme setup",
        "Responsive & mobile-first design",
        "Lightweight plugin integration",
        "FAQ section & schema setup",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      text: "Discuss your goals, needs and vision.",
      icon: "💬",
    },
    {
      number: "02",
      title: "Strategy",
      text: "Plan the best approach for your project.",
      icon: "✦",
    },
    {
      number: "03",
      title: "Development",
      text: "Build and bring your website to life.",
      icon: "</>",
    },
    {
      number: "04",
      title: "SEO Setup",
      text: "Optimize for search and performance.",
      icon: "⌕",
    },
    {
      number: "05",
      title: "Testing",
      text: "Ensure everything works perfectly.",
      icon: "✓",
    },
    {
      number: "06",
      title: "Launch",
      text: "Go live and start growing.",
      icon: "↗",
    },
  ];

  const benefitsList = [
    {
      title: "SEO-First Development",
      text: "Build with search visibility and SEO best practices in mind.",
      icon: "⌕",
    },
    {
      title: "Lightweight Websites",
      text: "Better load times and a faster browsing experience.",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      text: "Websites that look great on all devices.",
      icon: "▣",
    },
    {
      title: "Clean & Maintainable Code",
      text: "Easy to manage, maintain and scale.",
      icon: "</>",
    },
    {
      title: "Performance Focused",
      text: "Better user experience and improved website performance.",
      icon: "◉",
    },
    {
      title: "WordPress Expertise",
      text: "Build, customize and optimize WordPress websites.",
      icon: "W",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070c] text-white">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              My Services
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build. Optimize.{" "}
              <span className="block text-blue-500">Grow.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Web development and SEO services for fast, responsive and
              search-friendly websites.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
              I help businesses build a strong online presence and turn their
              websites into valuable assets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Get in Touch
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[390px] lg:block">
            <div className="absolute left-5 top-14 w-[430px] rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-900/20">
              <div className="rounded-lg border border-slate-700 bg-[#0b1a2c]">
                <div className="flex items-center gap-1 border-b border-slate-700 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="p-8">
                  <div className="mb-4 h-2 w-20 rounded bg-blue-500" />
                  <div className="h-6 w-60 rounded bg-slate-700" />
                  <div className="mt-3 h-3 w-48 rounded bg-slate-800" />
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded bg-slate-800" />
                    <div className="h-16 rounded bg-slate-800" />
                    <div className="h-16 rounded bg-slate-800" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-5 w-28 rounded-2xl border border-slate-600 bg-slate-900 p-1 shadow-xl">
              <div className="rounded-xl bg-[#0b1a2c] p-3">
                <div className="h-2 w-10 rounded bg-blue-500" />
                <div className="mt-3 h-16 rounded bg-slate-800" />
                <div className="mt-2 h-2 w-14 rounded bg-slate-700" />
              </div>
            </div>

            <div className="absolute right-0 top-0 rounded-xl border border-slate-700 bg-[#0b1a2c]/90 px-5 py-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-blue-400">G</span>
                <div>
                  <p className="text-[10px] text-slate-400">
                    Search visibility
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Google Rankings
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-0 rounded-xl border border-slate-700 bg-[#0b1a2c]/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-[10px] text-slate-400">Performance</p>
              <p className="text-2xl font-bold text-green-400">90+</p>
            </div>
          </div>
        </div>
      </section>
      {/* 2. CORE SERVICES (Fixed Uniform Paragraph-to-Bullet Gap) */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 lg:text-sm">
              What I Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Core Services
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600 lg:text-lg">
              Focused search engine optimization and web development solutions
              designed to fix technical barriers, strengthen domain authority,
              optimize content, and deliver high-performing websites.
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <div
                key={service.number}
                className="flex flex-col rounded-2xl border-2 border-slate-800 bg-white p-7 shadow-sm lg:p-8"
              >
                {/* Header & Description */}
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-blue-50 text-xl font-bold text-blue-600 lg:h-14 lg:w-14 lg:text-2xl">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 lg:text-sm">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 lg:text-base lg:leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Bullet List Section - Directly follows description without huge gap */}
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700 lg:text-base"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      s{/* 3. SEO PERFORMANCE & SPEED DATA */}
      <section className="overflow-hidden bg-[#071321] py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              01 — Performance
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              SEO Performance & Speed
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Make your website faster, lighter and more efficient for a better
              user experience and higher search rankings.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Core Web Vitals improvement",
                "PageSpeed optimization",
                "Image optimization",
                "Mobile performance",
                "Lightweight implementation",
                "WordPress cleanup",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <span className="font-bold text-blue-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
              <div className="text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-green-400/80">
                  <div>
                    <p className="text-5xl font-bold text-white">90+</p>
                    <p className="mt-1 text-xs text-slate-400">Performance</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-4">
                {[
                  ["First Contentful Paint", "0.8s"],
                  ["Largest Contentful Paint", "1.2s"],
                  ["Total Blocking Time", "0ms"],
                  ["Cumulative Layout Shift", "0.02"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
                  >
                    <span className="text-sm text-slate-300">{label}</span>
                    <span className="font-semibold text-green-400">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. TECHNICAL SEO AUDIT */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Crawlability Status
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    Optimal Indexation
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600">
                  PASSING
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {coreServices[0].features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 text-xs font-medium text-slate-700"
                  >
                    <span className="font-bold text-green-500">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              02 — Technical
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Technical SEO Audit
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Identify and repair code-level bottlenecks that prevent Google
              bots from indexing your pages properly.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {coreServices[0].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="font-bold text-blue-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* 5. OFF-PAGE SEO */}
      <section className="overflow-hidden bg-[#071321] py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              03 — Authority
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Off-Page SEO
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Strengthen off-site signals and domain authority across trusted
              networks and relevant niche placements.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {coreServices[1].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <span className="font-bold text-blue-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Off-Site Growth
                  </p>
                  <p className="mt-1 text-3xl font-bold text-white">
                    Brand Signals
                  </p>
                </div>
                <div className="rounded-lg bg-blue-500/20 px-3 py-2 text-sm font-bold text-blue-400">
                  ↗ Domain Reach
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {coreServices[1].features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-slate-800/60 p-3.5 text-xs text-slate-300"
                  >
                    <span className="font-bold text-blue-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6. ON-PAGE SEO */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Organic Traffic
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    +128%
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 px-3 py-2 text-sm font-bold text-green-600">
                  ↗
                </div>
              </div>
              <div className="mt-10 flex h-40 items-end gap-3 border-b border-l border-slate-200 px-4">
                {[25, 40, 35, 60, 52, 80, 70, 110, 95, 145].map(
                  (height, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${height}px` }}
                      className="flex-1 rounded-t bg-blue-500/80"
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              04 — Content Strategy
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              On-Page SEO
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Align on-page content structures and technical metadata with
              target user search intent.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {coreServices[2].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="font-bold text-blue-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* 7. WEB DEVELOPMENT */}
      <section className="overflow-hidden bg-[#071321] py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              05 — Architecture
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Web Development
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              Modern, responsive and easy-to-manage websites built with search
              engine optimization engineered natively into the site structure.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {coreServices[3].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <span className="font-bold text-blue-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-blue-950/40">
              <div className="overflow-hidden rounded-xl border border-slate-700 bg-[#0b1a2c]">
                <div className="flex items-center gap-1 border-b border-slate-700 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="p-8">
                  <div className="mb-12 flex justify-between">
                    <div className="h-3 w-20 rounded bg-blue-500" />
                    <div className="flex gap-3">
                      <div className="h-2 w-8 rounded bg-slate-700" />
                      <div className="h-2 w-8 rounded bg-slate-700" />
                      <div className="h-2 w-8 rounded bg-slate-700" />
                    </div>
                  </div>
                  <div className="max-w-sm">
                    <div className="h-8 w-64 rounded bg-slate-600" />
                    <div className="mt-3 h-8 w-48 rounded bg-slate-700" />
                    <div className="mt-6 h-3 w-72 rounded bg-slate-800" />
                    <div className="mt-2 h-3 w-60 rounded bg-slate-800" />
                    <div className="mt-7 h-10 w-28 rounded-full bg-blue-600" />
                  </div>
                  <div className="mt-12 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-slate-800" />
                    <div className="h-20 rounded-lg bg-slate-800" />
                    <div className="h-20 rounded-lg bg-slate-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 8. PROCESS & WHY CHOOSE ME */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              My Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              How I Work
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              A simple and clear process to make sure we&apos;re always on the
              same page and get the best results for your project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Why Work With Me
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              I treat every project like it&apos;s my own. You get quality work,
              clear communication, and a partner who cares about your success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefitsList.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 font-semibold text-blue-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#071321] py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.18),transparent_40%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Let&apos;s build a fast, modern and SEO-friendly website that
              helps your business grow.
            </p>
          </div>
          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Get in Touch
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
