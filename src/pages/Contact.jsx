import {
  Mail,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "WordPress Dev",
    "Technical SEO",
    "Custom Theme",
    "Figma to Code",
    "Plugin Integration",
    "Other",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service],
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Get In Touch
          </h1>
          <p className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Let's build something dynamic together.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            Have a project in mind, need technical SEO optimization, or want a
            custom WordPress architecture? Drop a message below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                    Email Direct
                  </h3>
                  <a
                    href="mailto:alsharieffk@gmail.com"
                    className="text-white font-medium hover:text-blue-400 transition"
                  >
                    alsharieffk@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                    Location
                  </h3>
                  <p className="text-white font-medium">
                    Las Piñas City, Philippines
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                    Response Window
                  </h3>
                  <p className="text-white font-medium">Within 24 Hours</p>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800/50 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-slate-300 font-medium">
                Available for new custom project inquiries
              </span>
            </div>
          </div>

          {/* Right Column: Maximize Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-slate-900/40 p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-6"
            >
              {/* Service Selection Tags */}
              <div>
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  I'm interested in...
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-xs font-medium px-4 py-2 rounded-lg border transition-all ${
                          isSelected
                            ? "bg-blue-600/20 border-blue-500 text-blue-400"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mark Bautista"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="mark@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">
                  Project Details
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your site requirements, timeline, or SEO goals..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
