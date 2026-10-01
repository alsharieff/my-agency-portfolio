export default function Services() {
  const services = [
    {
      number: "01",
      icon: "</>",
      title: "Web Development",
      description:
        "Modern, responsive and easy-to-manage websites built with the right technology for your goals.",
      features: [
        "WordPress development",
        "Custom website development",
        "Figma to WordPress",
        "Responsive & mobile-friendly design",
        "Elementor development",
        "Custom theme development",
        "Plugins",
      ],
    },
    {
      number: "02",
      icon: "⌕",
      title: "SEO Optimization",
      description:
        "Improve your search rankings and get more organic traffic with proven SEO strategies and best practices.",
      features: [
        "Technical SEO",
        "On-page SEO",
        "Off-page SEO",
        "Metadata",
        "Internal linking",
        "Google Search Console setup",
        "Rank monitoring",
      ],
    },
    {
      number: "03",
      icon: "◉",
      title: "Performance Optimization",
      description:
        "Make your website faster, lighter and more efficient for a better user experience and higher rankings.",
      features: [
        "Core Web Vitals improvement",
        "PageSpeed optimization",
        "Image optimization",
        "Mobile performance",
        "Lightweight implementation",
        "WordPress cleanup",
      ],
    },
  ];

  const process = [
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

  const benefits = [
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
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background glow */}

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* Hero text */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              My Services
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white">
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
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-blue-500 text-white"
              >
                Get in Touch
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* <a
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-slate-600 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                View Projects
              </a> */}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden min-h-[390px] lg:block">
            {/* Laptop */}
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

            {/* Mobile */}
            <div className="absolute bottom-4 right-5 w-28 rounded-2xl border border-slate-600 bg-slate-900 p-1 shadow-xl">
              <div className="rounded-xl bg-[#0b1a2c] p-3">
                <div className="h-2 w-10 rounded bg-blue-500" />
                <div className="mt-3 h-16 rounded bg-slate-800" />
                <div className="mt-2 h-2 w-14 rounded bg-slate-700" />
              </div>
            </div>

            {/* Ranking badge */}
            <div className="absolute right-0 top-0 rounded-xl border border-slate-700 bg-[#0b1a2c]/90 px-5 py-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-blue-400">G</span>
                <div>
                  <p className="text-[10px] text-slate-400">
                    Search visibility
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Higher Rankings
                  </p>
                </div>
              </div>
            </div>

            {/* Performance badge */}
            <div className="absolute bottom-20 right-0 rounded-xl border border-slate-700 bg-[#0b1a2c]/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-[10px] text-slate-400">Performance</p>
              <p className="text-2xl font-bold text-green-400">90+</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE SERVICES
      ====================================================== */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              What I Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
              Core Services
            </h2>

            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Everything you need to build, optimize and grow your online
              presence. Focused on performance, user experience and search
              visibility.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
                    {service.icon}
                  </div>

                  <span className="text-sm font-semibold text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 font-bold text-blue-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WEB DEVELOPMENT
      ====================================================== */}
      <section className="overflow-hidden bg-[#071321] py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              01 —
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl text-white">
              Web Development
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              I build modern, responsive websites that are fast, user-friendly
              and easy to manage. Whether it&apos;s a WordPress site or a custom
              build, I make sure it fits your needs and supports your business
              goals.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {services[0].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <span className="text-blue-400 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-400 text-white"
            >
              Let&apos;s Talk
              <span>→</span>
            </a> */}
          </div>

          {/* Website mockup */}
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

      {/* =====================================================
          SEO
      ====================================================== */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* SEO visual */}
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

              {/* Fake graph */}
              <div className="mt-10 flex h-48 items-end gap-3 border-b border-l border-slate-200 px-4">
                {[25, 40, 35, 60, 52, 80, 70, 110, 95, 145].map(
                  (height, index) => (
                    <div
                      key={index}
                      style={{ height: `${height}px` }}
                      className="flex-1 rounded-t bg-blue-500/80"
                    />
                  ),
                )}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Technical SEO",
                  "On-page SEO",
                  "Schema Markup",
                  "Search Console",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-slate-50 p-3 text-xs font-medium text-slate-700"
                  >
                    <span className="text-green-500 font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              02 —
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900">
              SEO Optimization
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              Make your website easier to find. I apply SEO best practices to
              improve visibility, attract organic traffic, and support long-term
              growth.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {services[1].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="text-blue-600 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Discuss SEO
              <span>→</span>
            </a> */}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
      ====================================================== */}
      <section className="overflow-hidden bg-[#071321] py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              03 —
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl text-white">
              Performance Optimization
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
              A fast website isn&apos;t just better for users — it also ranks
              higher. I optimize your site&apos;s performance to improve Core
              Web Vitals, loading speed and overall user experience.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {services[2].features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <span className="text-blue-400 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-400 text-white"
            >
              Improve My Website
              <span>→</span>
            </a> */}
          </div>

          {/* Performance visual */}
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

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-slate-50 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              My Process
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-slate-900">
              How I Work
            </h2>

            <p className="mt-4 max-w-2xl text-base text-slate-600">
              A simple and clear process to make sure we&apos;re always on the
              same page and get the best results for your project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((step) => (
              <div key={step.number} className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold">
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

      {/* =====================================================
          WHY WORK WITH ME
      ====================================================== */}
      <section className="bg-white py-24 text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Me
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900">
              Why Work With Me
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              I may be a solo developer, but I treat every project like
              it&apos;s my own. You get quality work, clear communication and a
              partner who cares about your success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
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

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#071321] py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.18),transparent_40%)]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-white">
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
