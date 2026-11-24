
      (function () {
        // Menu mobile
        var btn = document.getElementById('menuBtn');
        var panel = document.getElementById('mobilePanel');
        btn.addEventListener('click', function () {
          var open = panel.classList.toggle('open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          btn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        });
        panel.addEventListener('click', function (e) {
          if (e.target.closest('a')) {
            panel.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Open navigation menu');
          }
        });

        // Animasi muncul saat scroll. Bila GSAP + ScrollTrigger termuat,
        // reveal ditangani skrip integrasi library di bawah; selain itu
        // pakai IntersectionObserver seperti sebelumnya.
        var revealEls = document.querySelectorAll('.reveal');
        if (window.__gsapReveal) {
          // Ditangani GSAP + ScrollTrigger — tidak ada yang dilakukan di sini.
        } else if ('IntersectionObserver' in window) {
          // Fallback tanpa GSAP: elemen TIDAK disembunyikan lebih dulu.
          // Observer memakai rootMargin positif di sisi bawah, jadi kelas
          // .in (pemicu animasi) ditambahkan sedikit SEBELUM elemen masuk
          // layar — animasinya terlihat penuh, elemen muncul SATU PER
          // SATU lewat jeda --rd sesuai urutannya di dalam section, dan
          // konten tidak pernah tertahan invisible bila observer gagal.
          var perSection = {};
          revealEls.forEach(function (el) {
            var sec = el.closest('section');
            var key = sec ? (sec.id || 'lainnya') : 'lainnya';
            var n = perSection[key] || 0;
            perSection[key] = n + 1;
            el.style.setProperty('--rd', Math.min(n * 0.13, 0.65).toFixed(2) + 's');
          });
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
            });
          }, { threshold: 0.05, rootMargin: '0px 0px 14% 0px' });
          revealEls.forEach(function (el) { io.observe(el); });
        } else {
          revealEls.forEach(function (el) { el.classList.add('in'); });
        }

        // Tandai menu aktif sesuai posisi scroll
        var links = document.querySelectorAll('[data-nav]');
        var sections = ['beranda', 'tentang', 'proyek', 'kontak']
          .map(function (id) { return document.getElementById(id); })
          .filter(Boolean);
        function setActive(id) {
          links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-nav') === id); });
        }
        if ('IntersectionObserver' in window && sections.length) {
          var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
          }, { rootMargin: '-40% 0px -55% 0px' });
          sections.forEach(function (s) { spy.observe(s); });
        }
        setActive('beranda');

        // ID card lanyard: seretan 2D bebas (gaya komponen Lanyard
        // React Bits) — BUKAN pendulum sudut saja.
        //
        // Kenapa diganti: model pendulum lama hanya punya satu derajat
        // kebebasan (sudut θ terhadap poros jauh di atas), sehingga
        // (1) tarikan vertikal hampir tidak menggerakkan kartu — busur
        // berjari-jari ±1000px nyaris horizontal, jadi kartu "cuma bisa
        // kanan-kiri, tidak bisa ditarik ke bawah"; dan
        // (2) arahnya terbalik dari mouse: titik di bawah poros yang
        // diputar rotate(θ) positif (searah jarum jam) justru bergerak
        // ke KIRI, sedangkan pointerAngle menghasilkan θ positif saat
        // mouse bergerak ke kanan.
        //
        // Model baru: posisi kartu adalah offset 2D (x, y) dari posisi
        // diamnya dan mengikuti pointer 1:1 lewat offset genggaman
        // (titik yang dipegang tetap di bawah kursor, tanpa lompat dan
        // tanpa arah terbalik — kanan = kanan, bawah = bawah).
        // - Tali digambar ulang tiap frame dari vektor yang sama:
        //   garis lurus dari jangkar A (di atas klip) ke tengah klip
        //   saat ini C = diam + (x, y). Panjang tali = |A→C| (memanjang
        //   saat ditarik ke bawah) dan sudutnya = arah A→C, dengan
        //   tanda rotasi yang benar untuk koordinat layar (rotate(φ),
        //   φ = atan2(−dx, dy)), jadi tali selalu menyambung ke klip.
        // - Kemiringan kartu mengikuti sudut tali yang sama (kartu
        //   menggantung searah talinya) + sedikit rotateY dari kecepatan
        //   horizontal.
        // - Lepas: pegas 2D (x'' = −K·x − DAMP·x', sama untuk y)
        //   mengayunkan kartu balik ke posisi diam dengan kecepatan
        //   lemparan dari seretan, lalu berhenti tegak di tengah.
        // - Masuk halaman: kartu mulai 300px di atas posisi diam dengan
        //   sedikit geser horizontal, lalu pegas yang sama menjatuhkan
        //   dan mengayunkannya sampai diam.
        // prefers-reduced-motion: animasi masuk dilewati; seretan pointer
        // tetap aktif karena digerakkan langsung oleh pengguna sendiri.
        var idWrap = document.getElementById('idWrap');
        var idStrap = document.getElementById('idStrap');
        var idHang = document.getElementById('idHang');
        var idClip = idHang ? idHang.querySelector('.id-clip') : null;
        if (idWrap && idStrap && idHang && idClip) {
          var DEG = 180 / Math.PI;
          var K = 90;          // kekakuan pegas balik (1/dtk^2)
          var DAMP = 7;        // redaman pegas: beberapa ayunan lalu berhenti
          var MAX_V = 2600;    // batas kecepatan lemparan (px/dtk)

          var clipX0 = 0, clipY0 = 0;   // tengah klip saat diam, relatif .id-wrap
          var anchorX = 0, anchorY = 0; // jangkar tali A, relatif .id-wrap
          var x = 0, y = 0, vx = 0, vy = 0, tiltY = 0;
          var mode = 'rest'; // 'rest' | 'drag' | 'free'
          var rafId = null, lastFrame = 0;
          var reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

          function clampNum(v, min, max) { return Math.max(min, Math.min(max, v)); }

          // Batas seretan: cukup jauh ke bawah (permintaan utama), cukup
          // jauh ke samping, dan sedikit ke atas.
          function dragLimits() {
            var w = idWrap.getBoundingClientRect().width || 320;
            return {
              x: Math.max(150, w * 0.9),
              up: 110,
              down: 300
            };
          }

          // Ukur posisi diam klip relatif terhadap .id-wrap, lalu pasang
          // jangkar lurus di atasnya. Di desktop tali direntangkan penuh
          // (±1,05× tinggi viewport) sampai di atas navbar; di HP tali
          // digambar lebih pendek (±120px di atas kolom kartu) agar tidak
          // menimpa teks hero — ujung tali tetap pada garis jangkar→klip.
          function measure() {
            idHang.style.transform = '';
            idStrap.style.transform = '';
            var wr = idWrap.getBoundingClientRect();
            var cr = idClip.getBoundingClientRect();
            clipX0 = cr.left + cr.width / 2 - wr.left;
            clipY0 = cr.top + cr.height / 2 - wr.top;
            var L = Math.max(720, Math.round(window.innerHeight * 1.05));
            if (window.innerWidth < 900) L = Math.min(L, clipY0 + 120);
            anchorX = clipX0;
            anchorY = clipY0 - L;
            idStrap.style.left = (anchorX - 32) + 'px';
            idStrap.style.top = anchorY + 'px';
            render();
          }

          function render() {
            // Vektor jangkar → klip saat ini: satu-satunya sumber geometri
            // untuk tali DAN kemiringan kartu.
            var cx = clipX0 + x, cy = clipY0 + y;
            var dx = cx - anchorX, dy = cy - anchorY;
            var len = Math.max(24, Math.sqrt(dx * dx + dy * dy));
            // Tanda rotasi yang benar di koordinat layar (y ke bawah):
            // rotate(φ) memetakan arah bawah (0,1) ke (−sinφ, cosφ),
            // jadi φ = atan2(−dx, dy) membuat tali menunjuk tepat ke klip.
            var phi = Math.atan2(-dx, dy) * DEG;
            idStrap.style.height = len + 'px';
            idStrap.style.transform = 'rotate(' + phi.toFixed(2) + 'deg)';
            // Kemiringan 3D halus mengikuti kecepatan horizontal
            var targetTilt = clampNum(-vx * 0.012, -14, 14);
            tiltY += (targetTilt - tiltY) * 0.18;
            if (mode === 'rest' && Math.abs(tiltY) < 0.05) tiltY = 0;
            idHang.style.transform =
              'translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px)' +
              ' rotate(' + phi.toFixed(2) + 'deg)' +
              ' rotateY(' + tiltY.toFixed(2) + 'deg)';
          }

          function physics(dt) {
            vx = clampNum(vx + (-K * x - DAMP * vx) * dt, -MAX_V, MAX_V);
            vy = clampNum(vy + (-K * y - DAMP * vy) * dt, -MAX_V, MAX_V);
            x += vx * dt;
            y += vy * dt;
            if (mode === 'free' &&
                Math.abs(x) < 0.6 && Math.abs(y) < 0.6 &&
                Math.abs(vx) < 6 && Math.abs(vy) < 6) {
              x = 0; y = 0; vx = 0; vy = 0; mode = 'rest';
            }
          }

          function step(now) {
            rafId = null;
            var dt = Math.min(0.033, lastFrame ? (now - lastFrame) / 1000 : 0.016);
            lastFrame = now;
            if (mode === 'free') physics(dt);
            render();
            if (mode === 'free' || mode === 'drag') {
              rafId = requestAnimationFrame(step);
            } else {
              lastFrame = 0;
            }
          }
          function kick() {
            if (rafId === null) { lastFrame = 0; rafId = requestAnimationFrame(step); }
          }

          // --- Seret 2D: kartu mengikuti pointer 1:1 (offset genggaman) ---
          var dragId = null, grabDX = 0, grabDY = 0, lastPX = 0, lastPY = 0, lastMoveT = 0;
          function pointerInWrap(e) {
            var r = idWrap.getBoundingClientRect();
            return { px: e.clientX - r.left, py: e.clientY - r.top };
          }
          idWrap.addEventListener('dragstart', function (e) { e.preventDefault(); });
          idWrap.addEventListener('pointerdown', function (e) {
            var p = pointerInWrap(e);
            dragId = e.pointerId;
            mode = 'drag';
            // Titik genggaman relatif terhadap tengah klip saat ini:
            // dipertahankan selama seretan, jadi kartu tidak melompat
            // dan bergerak persis searah pointer (kanan/bawah = sama).
            grabDX = p.px - (clipX0 + x);
            grabDY = p.py - (clipY0 + y);
            vx = 0; vy = 0;
            lastPX = p.px; lastPY = p.py; lastMoveT = performance.now();
            try { idWrap.setPointerCapture(e.pointerId); } catch (err) {}
            idWrap.classList.add('dragging');
            if (e.pointerType === 'mouse') e.preventDefault(); // cegah seleksi teks / seret gambar
            kick();
          });
          idWrap.addEventListener('pointermove', function (e) {
            if (mode !== 'drag' || e.pointerId !== dragId) return;
            var p = pointerInWrap(e);
            var now = performance.now();
            var lim = dragLimits();
            var nx = clampNum(p.px - grabDX - clipX0, -lim.x, lim.x);
            var ny = clampNum(p.py - grabDY - clipY0, -lim.up, lim.down);
            var dt = (now - lastMoveT) / 1000;
            if (dt > 0.001) {
              // Kecepatan pointer (dari posisi mentah, bukan yang di-clamp)
              // diteruskan sebagai kecepatan lemparan saat dilepas.
              vx = clampNum(vx * 0.55 + ((p.px - lastPX) / dt) * 0.45, -MAX_V, MAX_V);
              vy = clampNum(vy * 0.55 + ((p.py - lastPY) / dt) * 0.45, -MAX_V, MAX_V);
            }
            x = nx; y = ny;
            lastPX = p.px; lastPY = p.py; lastMoveT = now;
            render();
          });
          function endDrag(e) {
            if (mode !== 'drag' || (e.pointerId !== undefined && e.pointerId !== dragId)) return;
            dragId = null;
            if (performance.now() - lastMoveT > 90) { vx *= 0.35; vy *= 0.35; } // sempat ditahan diam: jangan ikut melempar
            mode = 'free';
            idWrap.classList.remove('dragging');
            kick();
          }
          idWrap.addEventListener('pointerup', endDrag);
          idWrap.addEventListener('pointercancel', endDrag);

          // --- Ukur awal + animasi masuk: jatuh dari atas, berayun, berhenti ---
          measure();
          if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () { if (mode !== 'drag') measure(); });
          }
          if (!reduced) {
            x = 56; y = -300; vx = -140; vy = 0;
            mode = 'free';
            render();
            kick();
          }
          var resizeTimer = null;
          window.addEventListener('resize', function () {
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () { if (mode !== 'drag') measure(); }, 150);
          });
        }

        // Modal detail proyek: kartu hanya menampilkan 1 foto (slide
        // pertama); carousel lengkap — semua slide + placeholder —
        // hidup di dalam modal dan dibuka lewat tombol "Detail".
        // Judul, deskripsi, dan chip dibaca dari kartu itu sendiri agar
        // isinya selalu sama; daftar slide lengkap ada di PROJECT_SLIDES.
        var PROJECT_SLIDES = {
          tidur: [
            { img: '/assets/435e22716e81c478.png', alt: 'Tangkapan layar Beranda aplikasi Deteksi Tidur — judul “Tidur Nyenyak, Hidup Lebih Sehat.” dan kartu statistik akurasi SVM 99,83%', w: 1914, h: 915 },
            { img: '/assets/9be7c1a69b19e9b7.png', alt: 'Tangkapan layar Formulir Prediksi Tidur aplikasi Deteksi Tidur — isian data diri serta tinggi dan berat badan untuk perhitungan BMI', w: 1919, h: 916 },
            { img: '/assets/b0c8a4e7a1d12f4b.png', alt: 'Tangkapan layar Hasil Prediksi aplikasi Deteksi Tidur dengan hasil deteksi Normal, BMI 22.49, dan tingkat probabilitas tiap kelas', w: 1919, h: 915 }
          ],
          gerindra: [
            { img: '/assets/0aa56cf08726bc8b.jpg', alt: 'Tangkapan layar halaman Galeri Kegiatan pada Sistem Informasi Fraksi Gerindra DPRD Kota Semarang', w: 1280, h: 720 },
            { img: '/assets/499f7d924e16b3a9.jpg', alt: 'Tangkapan layar halaman Beranda Sistem Informasi Fraksi Gerindra DPRD Kota Semarang — sambutan “Selamat Datang” dengan foto Ketua Fraksi Nunung Sriyanto', w: 1903, h: 915 },
            { img: '/assets/46352cfa18a4f3b0.jpg', alt: 'Tangkapan layar halaman admin Hasil Perhitungan VIKOR (SPK Aspirasi) pada Sistem Informasi Fraksi Gerindra DPRD Kota Semarang', w: 1280, h: 720 }
          ],
          gotravel: [
            { img: '/assets/a2162c21df53f8ea.jpg', alt: 'Tangkapan layar hero halaman utama GoTravel dengan judul Wonderfull Indonesia', w: 1280, h: 720 },
            { img: '/assets/bbb2f94622ab0b95.jpg', alt: 'Tangkapan layar halaman checkout GoTravel dengan tombol Pay Now dan keterangan Secured by Midtrans', w: 1280, h: 610 },
            { img: '/assets/a89b2be7830f79ba.png', alt: 'Tangkapan layar popup pembayaran Midtrans Snap pada checkout GoTravel — total Rp300.000 dengan pilihan kartu, GoPay QRIS, virtual account, dan ShopeePay QRIS', w: 1914, h: 914 }
          ],
          portofolio: [
            { img: '/assets/1dec2e9cab476621.jpg', alt: 'Tangkapan layar hero website portofolio Satria Dava Riansa', w: 1280, h: 598 },
            { img: '/assets/09340ab72648da65.png', alt: 'Tangkapan layar bagian About Me website portofolio Satria Dava Riansa — kartu profil “Build Fast. Scale Smart.” dan daftar Education', w: 1811, h: 839 },
            { img: '/assets/a38944bc0aa38232.png', alt: 'Tangkapan layar bagian Projects website portofolio Satria Dava Riansa — tiga kartu proyek: Sistem Deteksi Gangguan Tidur, Sistem Informasi dan Layanan Aspirasi Fraksi Gerindra, dan Website Pemesanan Tiket Travel GoTravel', w: 1810, h: 838 }
          ],
          trash: [
            { img: '/assets/62e894ce5689a7a7.png', alt: 'Menu utama game Trash Cleaner dengan pilihan Play Game, Difficulty, Setting, dan Quit', w: 1919, h: 1079 },
            { img: '/assets/0c8e56b5c8131fcc.png', alt: 'Gameplay Trash Cleaner — karakter berjalan di jalan kota memungut sampah yang berserakan, dengan timer 04:52, penghitung kantong sampah, dan tiga hati nyawa', w: 1919, h: 1079 },
            { img: '/assets/52373ea071a553e3.png', alt: 'Gameplay Trash Cleaner — karakter di tengah jalan kota dengan skor kantong sampah 40, timer 04:23, dan sisa satu hati nyawa', w: 1919, h: 1079 }
          ],
          blender: [
            { img: '/assets/a9fd61957b1b8a58.jpg', alt: 'Thumbnail video animasi 3D Blender — dua mobil berpapasan di jalan kota pada malam hari', w: 640, h: 320 }
          ]
        };
        // Tombol unduh utama di modal, tampil PALING PERTAMA sebelum
        // tautan kartu dan tautan tambahan (Trash Cleaner: zip build
        // game dari GitHub Release v1.0.0).
        var PROJECT_DOWNLOAD_LINKS = {
          trash: { href: 'https://github.com/satria2909/trash_cleaner/releases/download/v1.0.0/Trash.Cleaner.EXE.zip', label: 'Unduh Game', icon: 'download' }
        };
        // Tautan tambahan yang hanya tampil di dalam modal, bukan di kartu.
        var PROJECT_EXTRA_LINKS = {
          tidur: [
            { href: 'https://publikasi.dinus.ac.id/joins/article/view/16125', label: 'Publikasi JOINS', icon: 'book' }
          ],
          trash: [
            { href: 'https://youtu.be/PvTgXkReVmk', label: 'Video Gameplay', icon: 'play' }
          ]
        };
        var LINK_ICONS = {
          external: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
          book: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
          github: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
          play: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
          download: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>'
        };
        var projectModal = document.getElementById('projectModal');
        if (projectModal) {
          var mTrack = document.getElementById('modalTrack');
          var mDots = document.getElementById('modalDots');
          var mCounter = document.getElementById('modalCounter');
          var mTitle = document.getElementById('modalTitle');
          var mDesc = document.getElementById('modalDesc');
          var mChips = document.getElementById('modalChips');
          var mLinks = document.getElementById('modalLinks');
          var mViewport = document.getElementById('modalViewport');
          var mCount = 0;
          var mIdx = 0;
          var mTimer = null;
          var lastFocus = null;

          function mRender() {
            mTrack.style.transform = 'translateX(' + (-mIdx * 100) + '%)';
            mCounter.textContent = (mIdx + 1) + ' / ' + mCount;
            Array.prototype.forEach.call(mDots.children, function (d, i) {
              d.classList.toggle('active', i === mIdx);
              if (i === mIdx) { d.setAttribute('aria-current', 'true'); }
              else { d.removeAttribute('aria-current'); }
            });
          }
          function mStopAuto() {
            if (mTimer !== null) { clearInterval(mTimer); mTimer = null; }
          }
          function mStartAuto() {
            mStopAuto();
            if (mCount > 1) {
              mTimer = setInterval(function () { mGo(mIdx + 1); }, 3000);
            }
          }
          function mGo(n) {
            if (mCount === 0) return;
            mIdx = ((n % mCount) + mCount) % mCount;
            mRender();
            mStartAuto(); // reset timer setiap slide berpindah
          }
          function buildSlides(list) {
            mTrack.innerHTML = '';
            mDots.innerHTML = '';
            list.forEach(function (s, i) {
              var slide = document.createElement('div');
              if (s.img) {
                slide.className = 'm-slide';
                var img = document.createElement('img');
                img.src = s.img;
                img.alt = s.alt || '';
                if (s.w) img.width = s.w;
                if (s.h) img.height = s.h;
                slide.appendChild(img);
              } else {
                slide.className = 'm-slide slide-placeholder';
                slide.innerHTML = '<div class="ph-box"><span class="ph-plus" aria-hidden="true">+</span><span class="ph-text"></span></div>';
                slide.querySelector('.ph-text').textContent = s.ph || '';
              }
              mTrack.appendChild(slide);
              var dot = document.createElement('button');
              dot.type = 'button';
              dot.className = 'm-dot';
              dot.setAttribute('aria-label', 'Ke foto ' + (i + 1));
              dot.addEventListener('click', function () { mGo(i); });
              mDots.appendChild(dot);
            });
            mCount = list.length;
            mIdx = 0;
            mRender();
          }
          function openProjectModal(card) {
            var id = card.getAttribute('data-project');
            var h3 = card.querySelector('h3');
            var p = card.querySelector('p');
            var chips = card.querySelector('.chips');
            mTitle.textContent = h3 ? h3.textContent : '';
            mDesc.textContent = p ? p.textContent : '';
            mChips.innerHTML = chips ? chips.innerHTML : '';
            mLinks.innerHTML = '';
            var dl = PROJECT_DOWNLOAD_LINKS[id];
            if (dl) {
              var dlBtn = document.createElement('a');
              dlBtn.className = 'modal-link-btn modal-link-btn--primary';
              dlBtn.href = dl.href;
              // Unduhan lintas domain (GitHub Release): atribut download
              // diabaikan browser untuk URL beda origin, jadi klik malah
              // menavigasi iframe halaman ini ke github.com dan unduhan
              // terblokir di dalam tampilan aplikasi (error). Buka di tab
              // baru sebagai gantinya — GitHub mengirim file dengan
              // Content-Disposition: attachment, jadi di tab baru file
              // langsung terunduh, sama seperti tautan eksternal lain.
              dlBtn.target = '_blank';
              dlBtn.rel = 'noopener';
              dlBtn.setAttribute('aria-label', dl.label + ' — ' + (mTitle.textContent || ''));
              dlBtn.title = dl.label;
              dlBtn.innerHTML = (LINK_ICONS[dl.icon] || LINK_ICONS.download) + '<span>' + dl.label + '</span>';
              mLinks.appendChild(dlBtn);
            }
            card.querySelectorAll('.card-icon-link').forEach(function (a) {
              var clone = a.cloneNode(true);
              var href = clone.getAttribute('href') || '';
              var icon = clone.innerHTML;
              if (href.charAt(0) === '#') {
                // Tautan jangkar (Portofolio Pribadi → Beranda): bukan
                // live demo, jadi teksnya memakai label aslinya.
                var anchorLabel = clone.getAttribute('title') || 'Beranda';
                clone.className = 'modal-link-btn';
                clone.setAttribute('aria-label', (clone.getAttribute('aria-label') || anchorLabel));
                clone.title = anchorLabel;
                clone.innerHTML = icon + '<span>' + anchorLabel + '</span>';
              } else if (clone.getAttribute('data-modal-label')) {
                // Tautan kartu dengan label modal khusus (mis. GitHub
                // untuk Trash Cleaner — bukan situs live, jadi tidak
                // dilabeli "Live Demo").
                var mLabel = clone.getAttribute('data-modal-label');
                var mIcon = clone.getAttribute('data-modal-icon') || 'external';
                clone.className = 'modal-link-btn modal-link-btn--primary';
                clone.setAttribute('aria-label', mLabel + ' — ' + (mTitle.textContent || ''));
                clone.title = mLabel;
                clone.innerHTML = (LINK_ICONS[mIcon] || LINK_ICONS.external) + '<span>' + mLabel + '</span>';
                clone.removeAttribute('data-modal-label');
                clone.removeAttribute('data-modal-icon');
              } else {
                clone.className = 'modal-link-btn modal-link-btn--primary';
                clone.setAttribute('aria-label', 'Live Demo — ' + (mTitle.textContent || ''));
                clone.title = 'Live Demo';
                clone.innerHTML = (LINK_ICONS.external) + '<span>Live Demo</span>';
              }
              mLinks.appendChild(clone);
            });
            (PROJECT_EXTRA_LINKS[id] || []).forEach(function (l) {
              var a = document.createElement('a');
              a.className = 'modal-link-btn';
              a.href = l.href;
              a.target = '_blank';
              a.rel = 'noopener';
              a.setAttribute('aria-label', l.label);
              a.title = l.label;
              a.innerHTML = (LINK_ICONS[l.icon] || LINK_ICONS.external) + '<span>' + l.label + '</span>';
              mLinks.appendChild(a);
            });
            buildSlides(PROJECT_SLIDES[id] || []);
            lastFocus = document.activeElement;
            projectModal.hidden = false;
            document.body.style.overflow = 'hidden';
            if (window.__lenis) { try { window.__lenis.stop(); } catch (e) {} }
            mStartAuto();
            var closeBtn = document.getElementById('modalClose');
            if (closeBtn) closeBtn.focus();
          }
          function closeProjectModal() {
            mStopAuto();
            projectModal.hidden = true;
            document.body.style.overflow = '';
            if (window.__lenis) { try { window.__lenis.start(); } catch (e) {} }
            if (lastFocus && lastFocus.focus) lastFocus.focus();
          }
          document.querySelectorAll('[data-detail]').forEach(function (b) {
            b.addEventListener('click', function () {
              var card = b.closest('[data-project]');
              if (card) openProjectModal(card);
            });
          });
          document.getElementById('modalPrev').addEventListener('click', function () { mGo(mIdx - 1); });
          document.getElementById('modalNext').addEventListener('click', function () { mGo(mIdx + 1); });
          document.getElementById('modalClose').addEventListener('click', closeProjectModal);
          document.getElementById('modalCloseX').addEventListener('click', closeProjectModal);
          projectModal.addEventListener('click', function (e) {
            if (e.target === projectModal) closeProjectModal();
          });
          document.addEventListener('keydown', function (e) {
            if (projectModal.hidden) return;
            if (e.key === 'Escape') closeProjectModal();
            else if (e.key === 'ArrowLeft') mGo(mIdx - 1);
            else if (e.key === 'ArrowRight') mGo(mIdx + 1);
          });
          // Tautan jangkar di dalam modal (mis. Portofolio → #beranda):
          // tutup modal dulu, lalu biarkan navigasi jangkar berjalan.
          mLinks.addEventListener('click', function (e) {
            var a = e.target.closest('a');
            if (a && (a.getAttribute('href') || '').charAt(0) === '#') closeProjectModal();
          });
          // Swipe sentuh pada carousel modal: geser horizontal >= 50px
          // pindah slide; geser vertikal tetap menggulir isi modal.
          // Auto-slide dijeda selama jari menyentuh, jalan lagi sesudahnya.
          var mStartX = null, mStartY = null;
          mViewport.addEventListener('touchstart', function (e) {
            mStopAuto();
            if (e.touches.length === 1) {
              mStartX = e.touches[0].clientX;
              mStartY = e.touches[0].clientY;
            } else { mStartX = null; mStartY = null; }
          }, { passive: true });
          mViewport.addEventListener('touchend', function (e) {
            if (mStartX === null || !e.changedTouches.length) { mStartAuto(); return; }
            var dx = e.changedTouches[0].clientX - mStartX;
            var dy = e.changedTouches[0].clientY - mStartY;
            mStartX = null; mStartY = null;
            if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy)) {
              mGo(dx < 0 ? mIdx + 1 : mIdx - 1); // mGo() sekaligus memulai lagi timer
            } else {
              mStartAuto();
            }
          }, { passive: true });
          mViewport.addEventListener('touchcancel', function () { mStartX = null; mStartY = null; mStartAuto(); }, { passive: true });
        }

        // Filter Proyek: Semua / Web / Machine Learning / Game & Animasi.
        var projectBtns = document.querySelectorAll('[data-project-filter]');
        var projectCards = document.querySelectorAll('[data-project-cat]');
        projectBtns.forEach(function (b) {
          b.addEventListener('click', function () {
            var f = b.getAttribute('data-project-filter');
            projectBtns.forEach(function (x) { x.classList.toggle('active', x === b); });
            projectCards.forEach(function (c) {
              c.classList.toggle('hide', f !== 'semua' && c.getAttribute('data-project-cat') !== f);
            });
          });
        });

        // Filter Sertifikasi & Pelatihan: Semua / Sertifikasi / Pelatihan.
        var certBtns = document.querySelectorAll('[data-cert-filter]');
        var certCards = document.querySelectorAll('[data-cert-cat]');
        certBtns.forEach(function (b) {
          b.addEventListener('click', function () {
            var f = b.getAttribute('data-cert-filter');
            certBtns.forEach(function (x) { x.classList.toggle('active', x === b); });
            certCards.forEach(function (c) {
              c.classList.toggle('hide', f !== 'semua' && c.getAttribute('data-cert-cat') !== f);
            });
          });
        });

        // Modal detail sertifikat: kartu hanya menampilkan judul,
        // penyelenggara, dan deskripsi singkat — kategori, tanggal,
        // skor/nilai, dan catatan hanya tampil di modal ini, bersama
        // PDF sertifikat yang bisa dilihat langsung.
        var CERT_DATA = {
          'toefl-diagnostic': {
            cat: 'Sertifikasi', period: '1 Feb 2023',
            total: 'Skor total <b>500</b>',
            chips: ['Listening <b>39</b>', 'Structure <b>54</b>', 'Reading <b>57</b>'],
            note: 'Tes kampus Bina Bahasa Jaya, bukan sertifikat resmi ETS.',
            pdf: '/assets/e9d68577c9912df9.pdf'
          },
          'toefl-prediction': {
            cat: 'Sertifikasi', period: '27 Mar 2023',
            total: 'Skor total <b>430</b>',
            chips: ['Listening <b>46</b>', 'Structure <b>36</b>', 'Reading <b>47</b>'],
            note: 'Surat pemberitahuan tes prediksi kampus, bukan sertifikat.',
            pdf: '/assets/c6aee193028f5b6a.pdf'
          },
          'business-english': {
            cat: 'Pelatihan', period: 'Agu 2023',
            total: 'Nilai <b>A</b> (85–100)',
            chips: ['Durasi <b>32 jam</b>', '2–16 Agu 2023'],
            note: 'Pelatihan penyelesaian kursus dari Bina Bahasa Jaya.',
            pdf: '/assets/d3d6fc0cfc2bcdc0.pdf'
          },
          'dicoding-lit': {
            cat: 'Pelatihan', period: '2 Apr 2024',
            total: null, chips: null,
            note: 'Sertifikat kehadiran acara DevCoach 145 di Bandung, bukan sertifikat penyelesaian kursus.',
            pdf: '/assets/e6e6005c33860820.pdf'
          },
          'ml-api': {
            cat: 'Pelatihan', period: '2026',
            total: null,
            chips: ['Pelatihan <b>6–9 Jul 2026</b>'],
            note: null,
            pdf: '/assets/99a2d33806197765.pdf'
          },
          'sinatti-pemakalah': {
            cat: 'Sertifikasi', period: '30 Jul 2025',
            total: null,
            chips: ['Peran <b>Pemakalah</b>'],
            note: null,
            desc: 'Pemakalah pada Seminar Nasional Teknologi Informasi (SINATTI) 2025 — mempresentasikan paper “Rancang Bangun Sistem Aplikasi Fraksi Gerindra DPRD Kota Semarang Berbasis Web dalam Prioritas Penanganan Aspirasi”.',
            pdf: '/assets/bee59686bec9d325.pdf'
          },
          'sinatti-author': {
            cat: 'Sertifikasi', period: '30 Jul 2025',
            total: null,
            chips: ['Peran <b>Author</b>', '<b>3</b> penulis'],
            note: null,
            desc: 'Author paper “Rancang Bangun Sistem Aplikasi Fraksi Gerindra DPRD Kota Semarang Berbasis Web dalam Prioritas Penanganan Aspirasi”, ditulis bersama Khoirudin dan Astrid Novita Putri (3 penulis).',
            pdf: '/assets/ffc39fab1c50fcfc.pdf'
          },
          'entrepreneurship': {
            cat: 'Pelatihan', period: '17 Des 2022',
            total: null,
            chips: ['Peserta <b>Pelatihan Soft Skills</b>', 'Tingkat <b>Nasional</b>'],
            note: null,
            pdf: '/assets/bac1ae1baf5794ca.pdf'
          },
          'leadership': {
            cat: 'Pelatihan', period: '17 Des 2022',
            total: null,
            chips: ['Peserta <b>Pelatihan Soft Skills</b>', 'Tingkat <b>Nasional</b>'],
            note: null,
            pdf: '/assets/bab7e42d7f673e49.pdf'
          },
          'public-speaking': {
            cat: 'Pelatihan', period: '17 Des 2022',
            total: null,
            chips: ['Peserta <b>Pelatihan Soft Skills</b>', 'Tingkat <b>Nasional</b>'],
            note: null,
            pdf: '/assets/fedf7bf90ff4b9bc.pdf'
          },
          'milenials-summit': {
            cat: 'Sertifikasi', period: '2022',
            total: null,
            chips: ['<b>Certificate of Appreciation</b>'],
            note: null,
            pdf: '/assets/f05dc0860d0bc74c.pdf'
          }
        };
        var certModal = document.getElementById('certModal');
        if (certModal) {
          var cCat = document.getElementById('certModalCat');
          var cTitle = document.getElementById('certModalTitle');
          var cMeta = document.getElementById('certModalMeta');
          var cTotal = document.getElementById('certModalTotal');
          var cScores = document.getElementById('certModalScores');
          var cDesc = document.getElementById('certModalDesc');
          var cNote = document.getElementById('certModalNote');
          var cPdfView = document.getElementById('certPdfView');
          var cPdfStatus = document.getElementById('certPdfStatus');
          var cPdfPages = document.getElementById('certPdfPages');
          var cPdfFallback = document.getElementById('certPdfFallback');
          var cMissing = document.getElementById('certModalMissing');
          var cLinkWrap = document.getElementById('certModalLinkWrap');
          var cOpen = document.getElementById('certModalOpen');
          var cDownload = document.getElementById('certModalDownload');
          var certLastFocus = null;

          // Viewer PDF memakai PDF.js: halaman PDF digambar ke canvas,
          // karena viewer bawaan browser (iframe) tidak tampil di modal.
          // Token render membatalkan gambar yang tertinggal saat modal
          // ditutup / kartu lain dibuka sebelum PDF selesai dimuat.
          if (window.pdfjsLib) {
            try {
              window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
            } catch (e) {}
          }
          var certRenderToken = 0;
          function showCertPdfFallback() {
            cPdfStatus.hidden = true;
            cPdfPages.innerHTML = '';
            cPdfFallback.hidden = false;
          }
          function renderCertPdf(url) {
            var token = ++certRenderToken;
            cPdfPages.innerHTML = '';
            cPdfFallback.hidden = true;
            cPdfStatus.hidden = false;
            cPdfStatus.textContent = 'Memuat PDF…';
            if (!window.pdfjsLib) { showCertPdfFallback(); return; }
            window.pdfjsLib.getDocument({ url: url }).promise.then(function (pdf) {
              if (token !== certRenderToken) return;
              var maxWidth = Math.min(cPdfPages.clientWidth || 840, 880);
              var dpr = Math.min(window.devicePixelRatio || 1, 2);
              var chain = Promise.resolve();
              var renderPage = function (n) {
                return pdf.getPage(n).then(function (page) {
                  if (token !== certRenderToken) return;
                  var base = page.getViewport({ scale: 1 });
                  var viewport = page.getViewport({ scale: (maxWidth / base.width) * dpr });
                  var canvas = document.createElement('canvas');
                  canvas.className = 'cert-pdf-page';
                  canvas.width = Math.floor(viewport.width);
                  canvas.height = Math.floor(viewport.height);
                  canvas.setAttribute('role', 'img');
                  canvas.setAttribute('aria-label', 'Halaman ' + n + ' dari ' + pdf.numPages + ' — PDF sertifikat');
                  cPdfPages.appendChild(canvas);
                  return page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
                });
              };
              for (var n = 1; n <= pdf.numPages; n++) {
                (function (pageNum) {
                  chain = chain.then(function () { return renderPage(pageNum); });
                })(n);
              }
              return chain.then(function () {
                if (token !== certRenderToken) return;
                cPdfStatus.hidden = true;
              });
            }).catch(function () {
              if (token !== certRenderToken) return;
              showCertPdfFallback();
            });
          }
          function clearCertPdf() {
            certRenderToken++;
            cPdfPages.innerHTML = '';
            cPdfFallback.hidden = true;
          }

          function openCertModal(btn) {
            var card = btn.closest('[data-cert-cat]');
            var d = CERT_DATA[btn.getAttribute('data-cert-detail')] || {};
            var h3 = card ? card.querySelector('h3') : null;
            var org = card ? card.querySelector('.cert-org') : null;
            var desc = card ? card.querySelector('.cert-desc') : null;
            cTitle.textContent = h3 ? h3.textContent : '';
            cCat.textContent = (d.cat || '') + (d.period ? ' · ' + d.period : '');
            cMeta.textContent = org ? org.textContent : '';
            if (d.total) { cTotal.innerHTML = d.total; cTotal.hidden = false; }
            else { cTotal.innerHTML = ''; cTotal.hidden = true; }
            cScores.innerHTML = (d.chips || []).map(function (c) {
              return '<span class="score-chip">' + c + '</span>';
            }).join('');
            cDesc.textContent = d.desc || (desc ? desc.textContent : '');
            if (d.note) { cNote.textContent = d.note; cNote.hidden = false; }
            else { cNote.textContent = ''; cNote.hidden = true; }
            if (d.pdf) {
              cPdfView.hidden = false;
              cMissing.hidden = true;
              // PDF aktif disimpan untuk tombol "Buka PDF di tab baru"
              // di modal Detail ini.
              window.__currentCertPdf = d.pdf;
              cDownload.href = d.pdf;
              cLinkWrap.hidden = false;
              renderCertPdf(d.pdf);
            } else {
              clearCertPdf();
              cPdfView.hidden = true;
              cMissing.hidden = false;
              window.__currentCertPdf = null;
              cDownload.removeAttribute('href');
              cLinkWrap.hidden = true;
            }
            certLastFocus = document.activeElement;
            certModal.hidden = false;
            document.body.style.overflow = 'hidden';
            if (window.__lenis) { try { window.__lenis.stop(); } catch (e) {} }
            var closeBtn = document.getElementById('certModalClose');
            if (closeBtn) closeBtn.focus();
          }
          function closeCertModal() {
            certModal.hidden = true;
            clearCertPdf(); // batalkan & bersihkan gambar PDF saat ditutup
            cPdfView.hidden = true;
            document.body.style.overflow = '';
            if (window.__lenis) { try { window.__lenis.start(); } catch (e) {} }
            if (certLastFocus && certLastFocus.focus) certLastFocus.focus();
          }
          document.querySelectorAll('[data-cert-detail]').forEach(function (b) {
            b.addEventListener('click', function () { openCertModal(b); });
          });
          document.getElementById('certModalClose').addEventListener('click', closeCertModal);
          document.getElementById('certModalCloseX').addEventListener('click', closeCertModal);
          certModal.addEventListener('click', function (e) {
            if (e.target === certModal) closeCertModal();
          });
          document.addEventListener('keydown', function (e) {
            if (certModal.hidden) return;
            if (window.__pdfViewerOpen) return; // Escape menutup penampil PDF dulu
            if (e.key === 'Escape') closeCertModal();
          });
        }

        // Membuka PDF sertifikat di TAB BARU browser: tombol "Buka PDF"
        // di kartu sertifikat dan "Buka PDF di tab baru" di modal Detail.
        // Cara lama (membuka tautan relatif aset dari dalam bingkai
        // aplikasi) hanya menghasilkan tab about:blank kosong, jadi di
        // sini tab baru dibuka lebih dulu secara sinkron di dalam handler
        // klik (agar tidak diblokir popup blocker), lalu file PDF di-fetch
        // dan tab diarahkan ke URL blob-nya. Karena bertipe
        // application/pdf, tab menampilkan penampil PDF bawaan browser —
        // lengkap dengan tombol unduh di penampil tersebut. Bila fetch
        // gagal, tab diarahkan ke URL absolut aset; bila tab baru tetap
        // diblokir, PDF ditampilkan di penampil layar penuh dalam halaman
        // di bawah ini sebagai cadangan. Tombol "Unduh PDF" tidak berubah.
        var pdfViewer = document.getElementById('pdfViewer');
        if (pdfViewer) {
          var pvTitle = document.getElementById('pdfViewerTitle');
          var pvMeta = document.getElementById('pdfViewerMeta');
          var pvStatus = document.getElementById('pdfViewStatus');
          var pvPages = document.getElementById('pdfViewPages');
          var pvFallback = document.getElementById('pdfViewFallback');
          var pvDownload = document.getElementById('pdfViewerDownload');
          var pvLastFocus = null;
          var pdfViewToken = 0;
          window.__pdfViewerOpen = false;
          function showPvFallback() {
            pvStatus.hidden = true;
            pvPages.innerHTML = '';
            pvFallback.hidden = false;
          }
          function renderPdfFull(url) {
            var token = ++pdfViewToken;
            pvPages.innerHTML = '';
            pvFallback.hidden = true;
            pvStatus.hidden = false;
            pvStatus.textContent = 'Memuat PDF…';
            if (!window.pdfjsLib) { showPvFallback(); return; }
            window.pdfjsLib.getDocument({ url: url }).promise.then(function (pdf) {
              if (token !== pdfViewToken) return;
              pvMeta.textContent = 'PDF · ' + pdf.numPages + ' halaman';
              var maxWidth = Math.min(pvPages.clientWidth || 960, 1040);
              var dpr = Math.min(window.devicePixelRatio || 1, 2);
              var chain = Promise.resolve();
              var renderPage = function (n) {
                return pdf.getPage(n).then(function (page) {
                  if (token !== pdfViewToken) return;
                  var base = page.getViewport({ scale: 1 });
                  var viewport = page.getViewport({ scale: (maxWidth / base.width) * dpr });
                  var canvas = document.createElement('canvas');
                  canvas.className = 'cert-pdf-page';
                  canvas.width = Math.floor(viewport.width);
                  canvas.height = Math.floor(viewport.height);
                  canvas.setAttribute('role', 'img');
                  canvas.setAttribute('aria-label', 'Halaman ' + n + ' dari ' + pdf.numPages + ' — PDF sertifikat');
                  pvPages.appendChild(canvas);
                  return page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
                });
              };
              for (var n = 1; n <= pdf.numPages; n++) {
                (function (pageNum) {
                  chain = chain.then(function () { return renderPage(pageNum); });
                })(n);
              }
              return chain.then(function () {
                if (token !== pdfViewToken) return;
                pvStatus.hidden = true;
              });
            }).catch(function () {
              if (token !== pdfViewToken) return;
              showPvFallback();
            });
          }
          function openPdfViewer(url, title) {
            if (!url) return;
            pvTitle.textContent = title || 'Dokumen PDF';
            pvMeta.textContent = 'PDF';
            pvDownload.href = url;
            pvLastFocus = document.activeElement;
            pdfViewer.hidden = false;
            window.__pdfViewerOpen = true;
            document.body.style.overflow = 'hidden';
            if (window.__lenis) { try { window.__lenis.stop(); } catch (e) {} }
            renderPdfFull(url);
            var closeBtn = document.getElementById('pdfViewerClose');
            if (closeBtn) closeBtn.focus();
          }
          function openPdfInNewTab(url, title) {
            if (!url) return;
            var win = null;
            try { win = window.open('', '_blank'); } catch (e) { win = null; }
            function toAbsolute(u) {
              var a = document.createElement('a');
              a.href = u;
              return a.href;
            }
            fetch(url).then(function (res) {
              if (!res.ok) throw new Error('HTTP ' + res.status);
              return res.blob();
            }).then(function (blob) {
              var pdfBlob = (blob && blob.type === 'application/pdf')
                ? blob
                : new Blob([blob], { type: 'application/pdf' });
              var blobUrl = URL.createObjectURL(pdfBlob);
              // URL blob sengaja tidak di-revoke selama sesi ini: tab
              // baru harus tetap bisa mengunduh PDF dari penampil PDF
              // browser kapan pun selama tab itu terbuka.
              if (win && !win.closed) {
                win.location.href = blobUrl;
              } else {
                var w2 = null;
                try { w2 = window.open(blobUrl, '_blank'); } catch (e) { w2 = null; }
                if (!w2) openPdfViewer(url, title);
              }
            }).catch(function () {
              var abs = toAbsolute(url);
              if (win && !win.closed) {
                win.location.href = abs;
              } else {
                var w3 = null;
                try { w3 = window.open(abs, '_blank'); } catch (e) { w3 = null; }
                if (!w3) openPdfViewer(url, title);
              }
            });
          }
          function closePdfViewer() {
            pdfViewer.hidden = true;
            window.__pdfViewerOpen = false;
            pdfViewToken++; // batalkan gambar PDF yang belum selesai
            pvPages.innerHTML = '';
            pvFallback.hidden = true;
            // Bila modal Detail masih terbuka di belakang, halaman tetap
            // terkunci; selain itu kembalikan scroll seperti semula.
            var certEl = document.getElementById('certModal');
            var projEl = document.getElementById('projectModal');
            var modalStillOpen = (certEl && !certEl.hidden) || (projEl && !projEl.hidden);
            if (!modalStillOpen) {
              document.body.style.overflow = '';
              if (window.__lenis) { try { window.__lenis.start(); } catch (e) {} }
            }
            if (pvLastFocus && pvLastFocus.focus) pvLastFocus.focus();
          }
          document.querySelectorAll('[data-cert-pdf]').forEach(function (b) {
            b.addEventListener('click', function () {
              var d = CERT_DATA[b.getAttribute('data-cert-pdf')] || {};
              var card = b.closest('[data-cert-cat]');
              var h3 = card ? card.querySelector('h3') : null;
              openPdfInNewTab(d.pdf, h3 ? h3.textContent : '');
            });
          });
          var certOpenBtn = document.getElementById('certModalOpen');
          if (certOpenBtn) {
            certOpenBtn.addEventListener('click', function () {
              var t = document.getElementById('certModalTitle');
              openPdfInNewTab(window.__currentCertPdf, t ? t.textContent : '');
            });
          }
          document.getElementById('pdfViewerClose').addEventListener('click', closePdfViewer);
          document.getElementById('pdfViewerCloseX').addEventListener('click', closePdfViewer);
          pdfViewer.addEventListener('click', function (e) {
            if (e.target === pdfViewer) closePdfViewer();
          });
          document.addEventListener('keydown', function (e) {
            if (!pdfViewer.hidden && e.key === 'Escape') closePdfViewer();
          });
        }

        // Skills: sortir per kategori (Semua / Development / Machine
        // Learning / Tools) + hanya 8 skill pertama yang tampil; sisanya
        // dibuka lewat tombol "Lihat Semua Skills". Mengganti kategori
        // mengembalikan tampilan ke 8 pertama dari kategori itu.
        var skillBtns = document.querySelectorAll('[data-skill-filter]');
        var skillCards = Array.prototype.slice.call(document.querySelectorAll('[data-skill-cat]'));
        var skillsMore = document.getElementById('skillsMore');
        var skillsMoreBtn = document.getElementById('skillsMoreBtn');
        var skillsMoreLabel = document.getElementById('skillsMoreLabel');
        var SKILL_LIMIT = 8;
        var skillFilter = 'semua';
        var skillExpanded = false;
        function applySkills() {
          var matching = skillCards.filter(function (c) {
            return skillFilter === 'semua' || c.getAttribute('data-skill-cat') === skillFilter;
          });
          var shown = skillExpanded ? matching : matching.slice(0, SKILL_LIMIT);
          skillCards.forEach(function (c) {
            c.classList.toggle('hide', shown.indexOf(c) === -1);
          });
          if (!skillsMore || !skillsMoreBtn) return;
          var hiddenCount = matching.length - shown.length;
          if (hiddenCount > 0) {
            skillsMore.hidden = false;
            skillsMoreBtn.setAttribute('aria-expanded', 'false');
            if (skillsMoreLabel) skillsMoreLabel.textContent = 'Lihat Semua Skills (' + hiddenCount + ' lainnya)';
          } else if (skillExpanded && matching.length > SKILL_LIMIT) {
            skillsMore.hidden = false;
            skillsMoreBtn.setAttribute('aria-expanded', 'true');
            if (skillsMoreLabel) skillsMoreLabel.textContent = 'Tampilkan Lebih Sedikit';
          } else {
            skillsMore.hidden = true;
          }
          // Tata letak berubah (kartu tampil/sembunyi): segarkan posisi
          // trigger animasi scroll untuk section di bawahnya.
          if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        }
        skillBtns.forEach(function (b) {
          b.addEventListener('click', function () {
            skillFilter = b.getAttribute('data-skill-filter');
            skillExpanded = false;
            skillBtns.forEach(function (x) { x.classList.toggle('active', x === b); });
            applySkills();
          });
        });
        if (skillsMoreBtn) {
          skillsMoreBtn.addEventListener('click', function () {
            skillExpanded = !skillExpanded;
            applySkills();
          });
        }
        applySkills();
      })();
    