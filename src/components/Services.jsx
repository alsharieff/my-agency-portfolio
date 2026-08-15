import { agencyData } from "../data/portfolioData";

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-slate-800/50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-3">
          Capabilities
        </h2>
        <p className="text-3xl font-bold text-white mb-12">What We Do Best</p>

        <div className="grid md:grid-cols-3 gap-8">
          {agencyData.services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition"
            >
              <span className="text-xs font-mono text-slate-500 block mb-4">
                {service.id}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
