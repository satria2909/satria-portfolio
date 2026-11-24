"use client";

import { useEffect } from "react";

const scripts = [
  "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js",
  "https://cdn.jsdelivr.net/npm/motion@11/dist/motion.js",
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js",
  "/scripts/01-gsap-register.js",
  "/scripts/02-portfolio-interactions.js",
  "/scripts/03-animation-integrations.js",
];

export default function LegacyInteractions() {
  useEffect(() => {
    const browserWindow = window as Window & { __portfolioScriptsStarted?: boolean };
    if (browserWindow.__portfolioScriptsStarted) return;
    browserWindow.__portfolioScriptsStarted = true;
    let index = 0;

    const loadNext = () => {
      if (index >= scripts.length) return;
      const script = document.createElement("script");
      script.src = scripts[index++];
      script.async = false;
      script.onload = loadNext;
      script.onerror = loadNext;
      document.body.appendChild(script);
    };

    loadNext();
  }, []);

  return null;
}
