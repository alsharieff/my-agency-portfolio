import { agencyData } from "../../data/portfolioData";
export default function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>
          © {new Date().getFullYear()} {agencyData.name}. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/share/19dGSBWJzQ/?mibextid=wwXIfr"
            className="hover:text-slate-300 transition"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/al-sharieff-kallun-09b829142?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            className="hover:text-slate-300 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/sharl07"
            className="hover:text-slate-300 transition"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
