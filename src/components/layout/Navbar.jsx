import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close offcanvas drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scrolling when offcanvas menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll to top / hero section on logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#090D16]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo with Scroll-To-Top Handler */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src={logo}
              alt="DevSharl Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons, CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-5">
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

            {/* Desktop / Tablet "Let's Talk" Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
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

            {/* Modern Animated Toggle Button (Mobile Only) */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 focus:outline-none transition-colors"
            >
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 transform ${
                  isOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 transform ${
                  isOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-over Mobile Offcanvas Drawer */}
      <aside
        className={`fixed top-0 right-0 z-40 w-[80%] max-w-sm h-full bg-[#090D16]/95 border-l border-white/10 backdrop-blur-2xl p-6 pt-24 md:hidden flex flex-col justify-between transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">
            Navigation
          </span>

          {/* Offcanvas Navigation Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-gray-200 hover:text-white hover:translate-x-1 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Offcanvas Bottom Footer: CTA & Social Icons */}
        <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
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

          {/* Social Icons for Mobile */}
          <div className="flex items-center justify-around pt-2 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent transition-all"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent transition-all"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 border border-transparent transition-all"
            >
              <FaTelegramPlane size={16} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;