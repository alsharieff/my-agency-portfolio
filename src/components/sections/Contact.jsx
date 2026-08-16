import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-800/50 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-blue-400 uppercase mb-3">
            Contact Us
          </h2>
          <p className="text-3xl font-bold text-white mb-6">
            Let's build something dynamic together.
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Have a project in mind or want to partner with us? Send us a message
            and we'll reply within 24 hours.
          </p>
          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>alsharieffk@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Las Piñas City, Philippines</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 bg-slate-900/40 p-8 rounded-2xl border border-slate-800"
        >
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
