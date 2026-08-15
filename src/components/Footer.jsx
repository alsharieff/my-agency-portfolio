import { agencyData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>
          © {new Date().getFullYear()} {agencyData.name}. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-300 transition">
            Twitter / X
          </a>
          <a href="#" className="hover:text-slate-300 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-slate-300 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
