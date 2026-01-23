// Project Structure:
// ├── public/
// │   ├── index.html
// │   ├── favicon.ico
// ├── src/
// │   ├── App.jsx
// │   ├── index.jsx
// │   ├── assets/
// │   │   ├── logo.svg
// │   ├── styles/
// │   │   ├── main.css
// ├── package.json
// ├── README.md

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
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^10.16.4",
    "react-icons": "^5.2.0"
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
// src/index.jsx
// ==============================
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ==============================
// src/styles/main.css
// ==============================
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
}

// ==============================
// Hosting Instructions
// ==============================
// --- Deploy to Vercel ---
// 1. Push your code to GitHub.
// 2. Visit https://vercel.com and sign in with GitHub.
// 3. Click “New Project” → Import your repository.
// 4. Vercel automatically detects Vite and sets build commands:
//    - Build Command: npm run build
//    - Output Directory: dist
// 5. Click “Deploy” and your live URL will be ready.

// --- Deploy to Netlify ---
// 1. Push your project to GitHub.
// 2. Go to https://app.netlify.com → New site from Git.
// 3. Connect your GitHub repo.
// 4. Set build command: npm run build
//    Publish directory: dist
// 5. Click “Deploy site”.

// --- Optional Steps ---
// - Add your custom domain (e.g. kmexports.co.ke) under Domain settings.
// - Enable HTTPS (Vercel and Netlify do this automatically).
// - Add environment variables (e.g. FORMSPREE_URL) in project settings.
// - Use analytics & monitoring (Vercel Analytics, Netlify Insights).

// ==============================
// src/App.jsx
// ==============================
// (Paste your main React component here — same as current content)
