// K&M Exports — Project files (clear, ready-to-create)
// IMPORTANT: Create each file shown below in your project folder. Do NOT paste this entire document into a single file.

// ==============================
// package.json
// ==============================
{
  "name": "km-exports",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "react-icons": "^4.10.1"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^3.4.3",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35"
  }
}

// ==============================
// public/index.html
// ==============================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="K&M Exports - Premium Kenyan Avocados" />
    <title>K&M Exports</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>

// ==============================
// src/index.jsx  (NOTE: name is .jsx, not .tsx)
// ==============================
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ==============================
// src/App.jsx
// ==============================
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// Replace with your Formspree endpoint or set VITE_FORMSPREE_URL in .env
const FORMSPREE_URL = process.env.VITE_FORMSPREE_URL || "https://formspree.io/f/your_form_id";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("km-dark-mode");
      return saved ? JSON.parse(saved) : true;
    } catch (err) {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("km-dark-mode", JSON.stringify(darkMode));
    } catch (err) {
      // ignore
    }
  }, [darkMode]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        // If Formspree returns non-2xx, you can check response for details
        const text = await res.text();
        console.error("Formspree error:", text);
        alert("Failed to send inquiry. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
    }
  }

  const testimonials = [
    {
      name: "GreenFields Importers",
      location: "Netherlands",
      quote: "Reliable deliveries and excellent quality. K&M has been our trusted partner for the last two seasons."
    },
    {
      name: "FreshCo Distributors",
      location: "UAE",
      quote: "Consistent packing standards and fast communication — shipments always arrive in great condition."
    },
    {
      name: "TropicTrade",
      location: "UK",
      quote: "Professional service and great traceability on each batch. Highly recommended."
    }
  ];

  const themeClasses = darkMode ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900";
  const cardClasses = darkMode ? "bg-slate-800 text-slate-100" : "bg-white text-slate-800";
  const inputClasses = darkMode ? "border-slate-700 bg-slate-900 text-slate-100" : "border-slate-300 bg-white text-slate-900";

  return (
    <div className={`min-h-screen ${themeClasses} antialiased transition-colors duration-300`}>
      <header className={`${darkMode ? "bg-slate-800" : "bg-emerald-100"} shadow-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-300 text-slate-900 font-bold shadow-lg text-lg">
              K&M
            </div>
            <div>
              <h1 className="text-xl font-bold">K&amp;M Exports</h1>
              <p className="text-xs text-emerald-500">Premium Kenyan Avocados — Farm to Market</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 items-center text-sm">
              <a href="#about" className="hover:text-emerald-400">About</a>
              <a href="#products" className="hover:text-emerald-400">Products</a>
              <a href="#logistics" className="hover:text-emerald-400">Shipping</a>
              <a href="#partners" className="hover:text-emerald-400">Partners</a>
              <a href="#contact" className="bg-emerald-500 text-slate-900 px-4 py-2 rounded-lg shadow hover:opacity-90">Contact</a>
            </nav>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="ml-4 px-3 py-2 text-sm rounded-lg border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 transition-colors duration-300">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Premium Kenyan Avocados
              <br />
              <span className="text-emerald-400">Fresh. Traceable. Export-ready.</span>
            </motion.h2>

            <p className="mt-6 text-lg opacity-90">K&amp;M Exports sources the finest avocados from trusted Kenyan growers and delivers them worldwide via sea or air freight. We focus on quality, consistent packing, and transparent logistics so your buyers receive premium produce every time.</p>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="inline-block bg-emerald-500 text-slate-900 px-5 py-3 rounded-lg shadow font-medium">Request Quote</a>
              <a href="#products" className="inline-block border border-emerald-500 text-emerald-400 px-5 py-3 rounded-lg">View Products</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-tr from-emerald-800 to-emerald-600 p-8 flex items-center justify-center">
            <svg width="360" height="240" viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(40,10)">
                <ellipse cx="120" cy="120" rx="100" ry="120" fill="#059669" />
                <ellipse cx="120" cy="120" rx="62" ry="78" fill="#022c22" />
                <circle cx="120" cy="120" r="28" fill="#7c2d12" />
              </g>
            </svg>
          </div>
        </section>

        {/* Partners / Testimonials */}
        <section id="partners" className="mt-10">
          <h3 className="text-2xl font-bold text-emerald-400">Partners & Importer Testimonials</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className={`p-6 rounded-2xl shadow ${cardClasses}`}>
                <p>“{t.quote}”</p>
                <footer className="mt-4 text-sm opacity-80">— {t.name}, {t.location}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`mt-12 p-8 rounded-2xl shadow ${cardClasses}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400">Contact Us</h3>
              <p className="mt-2 opacity-90">Interested in K&amp;M avocados? Send an inquiry using the form or reach us via the contact information below.</p>

              <div className="mt-6 text-sm space-y-2 opacity-90">
                <div><strong>Email:</strong> contact@k&amp;m.co.ke</div>
                <div><strong>Phone:</strong> +254 720 587 515</div>
                <div><strong>Location:</strong> Karen Shopping Centre, Nairobi, Kenya</div>
              </div>

              <div className="mt-6 flex gap-4 text-2xl">
                <a href="https://facebook.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400"><FaFacebookF /></a>
                <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400"><FaInstagram /></a>
                <a href="https://linkedin.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400"><FaLinkedinIn /></a>
                <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400"><FaTwitter /></a>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Office Location</h4>
                <iframe
                  title="K&M Exports Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.812865503304!2d36.72036887497012!3d-1.3157615356507475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05c2e94325ff%3A0x74b5a9f8c7d4c6a9!2sKaren%20Shopping%20Centre!5e0!3m2!1sen!2ske!4v1700000000001!5m2!1sen!2ske"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow"
                />
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input required name="name" value={form.name} onChange={handleChange} className={`mt-1 block w-full rounded-lg border px-3 py-2 ${inputClasses}`} />
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input required name="email" type="email" value={form.email} onChange={handleChange} className={`mt-1 block w-full rounded-lg border px-3 py-2 ${inputClasses}`} />
                </div>

                <div>
                  <label className="block text-sm font-medium">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className={`mt-1 block w-full rounded-lg border px-3 py-2 ${inputClasses}`} />
                </div>

                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea required name="message" rows={5} value={form.message} onChange={handleChange} className={`mt-1 block w-full rounded-lg border px-3 py-2 ${inputClasses}`} />
                </div>

                <div className="flex items-center gap-3">
                  <button type="submit" className="bg-emerald-500 text-slate-900 px-4 py-2 rounded-lg shadow">Send Inquiry</button>
                  {submitted && <span className="text-sm text-emerald-400">Thanks — your inquiry has been sent.</span>}
                </div>

                <p className="text-xs opacity-80">This is a frontend demo. Connect the form to Formspree (or another backend) to receive messages.</p>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-6 text-center text-sm opacity-70">© {new Date().getFullYear()} K&amp;M Exports. All rights reserved.</footer>
      </main>
    </div>
  );
}

// ==============================
// src/styles/main.css
// ==============================
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100%;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

// ==============================
// README (short)
// ==============================
// 1) Create a Vite React project or copy these files into a new folder.
// 2) Run `npm install` to install dependencies.
// 3) Run `npm run dev` to preview locally at http://localhost:5173.
// 4) Set VITE_FORMSPREE_URL in a .env file for production Formspree usage.

// ==============================
// QUICK NOTES / TROUBLESHOOTING
// ==============================
// - If you previously used an `index.tsx` filename, rename it to `index.jsx` (or provide TypeScript typings and use .tsx with a proper tsconfig).
// - Make sure you create separate files rather than pasting everything into a single file — that is the root cause of the "Missing semicolon" syntax error some users saw.
// - If you prefer TypeScript, convert files to .tsx/.ts and add a tsconfig.json and corresponding types.
