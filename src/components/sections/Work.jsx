import { agencyData } from "../../data/portfolioData";

export default function Work() {
  return (
    <section id="work" className="py-20 border-t border-slate-800/50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-3">
          Selected Projects
        </h2>
        <p className="text-3xl font-bold text-white mb-12">
          Featured Client Work
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {agencyData.projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <span className="text-xs text-blue-400 font-medium">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition mt-1">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
