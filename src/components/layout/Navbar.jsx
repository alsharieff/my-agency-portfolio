import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#090D16]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-[#center] justify-between">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Local Image Logo */}
          <img
            src={logo}
            alt="DevSharl Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link to="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Icons & Hero-Matched CTA Button */}
        <div className="flex items-center gap-5">
          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3 border-r border-white/10 pr-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent transition-all"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent transition-all"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent transition-all"
            >
              <FaTelegramPlane size={14} />
            </a>
          </div>

          {/* Hero-Matched "Let's Talk" Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Talk</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
