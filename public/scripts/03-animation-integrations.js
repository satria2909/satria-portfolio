
      // Integrasi library animasi: Lenis (smooth scroll), GSAP +
      // ScrollTrigger (reveal section + parallax glow hero), Motion
      // (animasi masuk hero + hitung-naik statistik). Tiap library
      // dijaga guard-nya sendiri: yang gagal dimuat dilewati, sisanya
      // tetap jalan; prefers-reduced-motion mematikan ketiganya dan
      // halaman kembali ke perilaku bawaan (CSS + IntersectionObserver).
      (function () {
        var reduced = !!(window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        if (reduced) return;

        var hasGsap = typeof window.gsap !== 'undefined';
        var hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';

        // ---------- Lenis: smooth scroll ----------
        var lenis = null;
        if (typeof window.Lenis !== 'undefined') {
          try {
            // syncTouch WAJIB true: tanpa itu Lenis hanya menghaluskan
            // roda mouse (desktop) dan TIDAK berpengaruh sama sekali pada
            // scroll sentuh di HP — di situlah halaman ini paling sering
            // dibuka. Dengan syncTouch, geser sentuh ikut dihaluskan.
            lenis = new Lenis({
              duration: 1.2, smoothWheel: true,
              syncTouch: true, touchMultiplier: 1.1
            });
            window.__lenis = lenis; // dipakai modal detail proyek untuk mengunci scroll latar
            if (hasGsap && hasST) {
              // Resep resmi integrasi Lenis + GSAP: ScrollTrigger ikut
              // diperbarui tiap scroll, dan raf Lenis digerakkan ticker GSAP.
              lenis.on('scroll', window.ScrollTrigger.update);
              gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
              gsap.ticker.lagSmoothing(0);
            } else {
              var rafLenis = function (time) {
                lenis.raf(time);
                requestAnimationFrame(rafLenis);
              };
              requestAnimationFrame(rafLenis);
            }
            // Klik tautan jangkar (#beranda, #proyek, dst.) digeser halus
            // oleh Lenis dengan offset tinggi header sticky.
            document.querySelectorAll('a[href^="#"]').forEach(function (a) {
              a.addEventListener('click', function (e) {
                var hash = a.getAttribute('href');
                if (!hash || hash.length < 2) return;
                var target = document.querySelector(hash);
                if (!target) return;
                e.preventDefault();
                lenis.scrollTo(target, { offset: -76, duration: 1.2 });
                if (window.history && history.pushState) {
                  history.pushState(null, '', hash);
                }
              });
            });
          } catch (err) { lenis = null; }
        }

        // ---------- GSAP + ScrollTrigger: reveal & parallax ----------
        if (window.__gsapReveal) {
          try {
            // Reveal SATU PER SATU: tiap elemen tetap dipicu posisinya
            // sendiri, tetapi diberi jeda bertingkat sesuai urutannya di
            // dalam section-nya — elemen yang masuk layar bersamaan
            // (mis. satu baris kartu proyek) muncul berurutan seperti
            // cascade, bukan serentak.
            document.querySelectorAll('main section').forEach(function (sec) {
              sec.querySelectorAll('.reveal').forEach(function (el, i) {
                gsap.fromTo(el,
                  { autoAlpha: 0, y: 44 },
                  {
                    autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out',
                    delay: Math.min(i * 0.13, 0.65),
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
                  });
              });
            });
            // Glow hero bergerak lebih lambat dari scroll (parallax halus).
            gsap.to('.hero-glow', {
              y: 130, ease: 'none',
              scrollTrigger: {
                trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true
              }
            });
            window.addEventListener('load', function () {
              window.ScrollTrigger.refresh();
            });
            // Pengaman terakhir: elemen .reveal yang sudah berada di dalam
            // layar tetapi masih tertahan di keadaan awal (opacity 0)
            // setelah 3,5 detik dipaksa tampil — konten tidak boleh
            // tertahan invisible bila sebuah trigger gagal jalan.
            setTimeout(function () {
              document.querySelectorAll('.reveal').forEach(function (el) {
                var r = el.getBoundingClientRect();
                if (r.top >= window.innerHeight || r.bottom <= 0) return;
                var cs = window.getComputedStyle(el);
                if (cs.opacity === '0' || cs.visibility === 'hidden') {
                  gsap.set(el, { clearProps: 'opacity,visibility,transform' });
                }
              });
            }, 3500);
          } catch (err) {
            // GSAP gagal di tengah jalan: tampilkan semua .reveal apa adanya.
            document.querySelectorAll('.reveal').forEach(function (el) {
              el.style.opacity = '1';
              el.style.transform = 'none';
              el.style.visibility = 'visible';
            });
          }
        }

        // ---------- Motion: masuk hero + hitung-naik statistik ----------
        if (typeof window.Motion !== 'undefined') {
          try {
            var M = window.Motion;
            document.documentElement.classList.add('motion-on');
            M.animate('.hero .rise',
              { opacity: [0, 1], transform: ['translateY(34px) scale(0.985)', 'translateY(0px) scale(1)'] },
              {
                duration: 0.85,
                delay: M.stagger(0.12, { start: 0.08 }),
                ease: [0.22, 0.8, 0.32, 1]
              });
            // Angka statistik dihitung naik dari 0 ke nilai aslinya;
            // akhiran non-angka (mis. "+") dipertahankan selama hitungan.
            document.querySelectorAll('.hero-stats .stat b').forEach(function (el) {
              var raw = el.textContent.trim();
              var target = parseFloat(raw.replace(',', '.'));
              if (isNaN(target)) return;
              var dec = raw.indexOf(',') >= 0 ? 2 : 0;
              var suffix = raw.replace(/^[0-9,\.]+/, '');
              M.animate(0, target, {
                duration: 1.9, delay: 0.75, ease: 'easeOut',
                onUpdate: function (v) {
                  el.textContent = v.toFixed(dec).replace('.', ',') + suffix;
                },
                onComplete: function () {
                  el.textContent = raw;
                }
              });
            });
          } catch (err) {
            document.documentElement.classList.remove('motion-on');
          }
        }
      })();
    