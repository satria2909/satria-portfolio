
      // Bendera untuk skrip utama: reveal .reveal diambil alih GSAP hanya
      // bila GSAP + ScrollTrigger benar-benar termuat dan pengguna tidak
      // meminta reduced motion.
      window.__gsapReveal = false;
      try {
        if (window.gsap && window.ScrollTrigger &&
            !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
          gsap.registerPlugin(ScrollTrigger);
          window.__gsapReveal = true;
        }
      } catch (e) { window.__gsapReveal = false; }
    