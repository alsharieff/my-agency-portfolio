import { ArrowUpRight } from "lucide-react";
import { agencyData } from "../data/portfolioData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wider text-white">
          {agencyData.name}
          <span className="text-blue-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#work" className="hover:text-white transition">
            Work
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
        >
          Let's Talk <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
