import LegacyInteractions from "./LegacyInteractions";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full">
      <header>
<div className="wrap">
<div className="nav-bar">
<a className="brand" href="#beranda" aria-label="Web Portfolio — back to home">
<img className="brand-logo" src="/assets/669faa4adc72f51c.png" alt="" width="292" height="142" />
<span className="brand-text"><span>Web</span><span>Portfolio</span></span>
</a>
<nav className="desktop" aria-label="Main navigation">
<a href="#beranda" data-nav="beranda">Home</a>
<a href="#tentang" data-nav="tentang">About Me</a>
<a href="#proyek" data-nav="proyek">Projects</a>
<a href="#kontak" data-nav="kontak">Contact</a>
</nav>
<button className="menu-btn" id="menuBtn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobilePanel">
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>
</button>
</div>
<div className="mobile-panel" id="mobilePanel">
<a href="#beranda" data-nav="beranda">Home</a>
<a href="#tentang" data-nav="tentang">About Me</a>
<a href="#proyek" data-nav="proyek">Projects</a>
<a href="#kontak" data-nav="kontak">Contact</a>
</div>
</div>
</header><main>

<section className="hero" id="beranda">
<div className="hero-glow"></div>
<div className="wrap hero-inner">
<div className="hero-layout">
<div className="hero-text">
<p className="hero-eyebrow rise rise-1">WEB DEVELOPER</p>
<p className="hero-hello rise rise-2">Halo, Saya</p>
<h1 className="rise rise-2">Satria Dava Riansa</h1>
<p className="hero-role rise rise-3">Fresh Graduate Teknik Informatika</p>
<p className="hero-sub rise rise-4">Fresh graduate S1 Teknik Informatika dari Universitas Semarang dengan keahlian utama pada pengembangan aplikasi web berbasis Laravel. Berpengalaman membangun sistem informasi selama magang di Fraksi Gerindra DPRD Kota Semarang dan menangani dukungan teknis selama magang di IT Talk Computer.</p>
<span className="hero-badge rise rise-4">
<span className="pin"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                Semarang, Jawa Tengah
              </span>
<div className="hero-cta rise rise-5">
<a className="btn btn-primary" href="#proyek">Lihat Proyek
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
<a className="btn btn-ghost" href="/assets/11a33adfe0bf3df7.pdf" download="CV-Satria-Dava-Riansa.pdf">Unduh CV
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg>
</a>
</div>
</div>
<div className="id-wrap" id="idWrap" data-lenis-prevent="">
<div className="id-strap" id="idStrap" aria-hidden="true"></div>
<div className="id-spacer" aria-hidden="true"></div>
<div className="id-hang" id="idHang">
<div className="id-clip" aria-hidden="true"></div>
<figure className="id-card">
<div className="id-head">
<span className="id-label">ID CARD</span>
<span className="id-year"><span className="id-dot" aria-hidden="true"></span>2026</span>
</div>
<div className="id-photo">
<div className="id-photo-frame">
<img src="/assets/0d94d4754b187203.png" alt="Foto formal Satria Dava Riansa mengenakan jas almamater biru Universitas Semarang" width="768" height="1024" />
</div>
<span className="id-corner tl" aria-hidden="true"></span>
<span className="id-corner tr" aria-hidden="true"></span>
<span className="id-corner bl" aria-hidden="true"></span>
<span className="id-corner br" aria-hidden="true"></span>
</div>
<figcaption>
<span className="id-name">Satria Dava Riansa S.Kom.</span>
<span className="id-pill">TEKNIK INFORMATIKA</span>
</figcaption>
</figure>
</div>
</div>
<div className="hero-stats hero-interests rise rise-6">
<p className="interest-heading">Core Stack</p>
<div className="stat"><span className="interest-icon ic-laravel" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"></path></svg></span><span className="interest-meta"><b>Laravel</b></span></div>
<div className="stat"><span className="interest-icon ic-next" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path></svg></span><span className="interest-meta"><b>Next.js</b></span></div>
<div className="stat"><span className="interest-icon ic-tailwind" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path></svg></span><span className="interest-meta"><b>Tailwind CSS</b></span></div>
</div>
</div>
</div>
</section>

<section className="section" id="tentang">
<div className="wrap">
<div className="section-head reveal">
<h2>About Me</h2>
</div>
<div className="about-top">
<div className="panel about-profile reveal">
<p className="about-headline">Build fast. Scale smart.</p>
<p>Perkenalkan, saya Satria Dava Riansa, biasa dipanggil Satria. Saya lulusan S1 Teknik Informatika dari Universitas Semarang, dan saya asli Kota Semarang. Saat ini, kesibukan saya adalah memperdalam skill di bidang web development, dengan keahlian utama pada pengembangan aplikasi web berbasis Laravel. Saya passionate dalam pengembangan frontend, backend, dan machine learning.</p>
<p>Saya berpengalaman membangun sistem informasi selama magang di Fraksi Gerindra DPRD Kota Semarang, dan menangani dukungan teknis selama magang di IT Talk Computer. Penelitian saya tentang deteksi gangguan tidur menggunakan Support Vector Machine dipublikasikan di jurnal JOINS (SINTA 4). Saat ini saya fokus memperdalam pengembangan backend Laravel sambil memperluas keahlian ke Next.js.</p>
<div className="chips profile-chips">
<span className="chip">Computer Engineering Graduate</span>
<span className="chip">Front-End Developer</span>
<span className="chip">Backend Developer</span>
<span className="chip">Machine Learning Enthusiast</span>
</div>
<div className="about-loc-wrap">
<div className="about-loc">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Semarang, Jawa Tengah
                </div>
</div>
</div>
<div className="about-side" id="pendidikan">
<h3 className="about-sub-title reveal">Education</h3>
<article className="card entry reveal">
<div className="row">
<div className="edu-head">
<span className="edu-icon"><img src="/assets/5f469b3cc8f94fb2.png" alt="Logo Universitas Semarang" width="287" height="330" /></span>
<div>
<h3>Universitas Semarang</h3>
<div className="org">S1 Teknik Informatika</div>
</div>
</div>
<span className="period">2022 – 2026</span>
</div>
<p>Lulus dengan IPK 3,97. Penelitian tentang deteksi gangguan tidur menggunakan Support Vector Machine (SVM), dipublikasikan di jurnal JOINS (SINTA 4).</p>
</article>
<article className="card entry reveal">
<div className="row">
<div className="edu-head">
<span className="edu-icon"><img src="/assets/0082fde8e187f3f1.png" alt="Logo SMK N 8 Semarang" width="159" height="155" /></span>
<div>
<h3>SMK N 8 Semarang</h3>
<div className="org">Rekayasa Perangkat Lunak</div>
</div>
</div>
<span className="period">2018 – 2021</span>
</div>
<p>Jurusan Rekayasa Perangkat Lunak — mempelajari dasar pemrograman dan pengembangan aplikasi.</p>
</article>
<div className="about-stats reveal">
<div className="about-stat"><b>3,97</b><span>IPK Kelulusan</span></div>
<div className="about-stat"><b>2</b><span>Pengalaman Magang</span></div>
<div className="about-stat"><b>1</b><span>Publikasi SINTA 4</span></div>
<div className="about-stat"><b>6</b><span>Proyek Portofolio</span></div>
</div>
</div>
</div>
<div className="about-sub" id="pengalaman">
<h3 className="about-sub-title reveal">Experience</h3>
<div className="timeline two">
<article className="card entry reveal">
<div className="row">
<span className="type-chip">Magang</span>
<span className="period">Mar – Jul 2025</span>
</div>
<div>
<h3>IT &amp; Multimedia Intern</h3>
<div className="org">Fraksi Gerindra DPRD Kota Semarang</div>
</div>
<ul>
<li>Proyek utama: mengembangkan Sistem Informasi Fraksi Gerindra DPRD Kota Semarang (web, Laravel) dari perancangan hingga implementasi.</li>
<li>Mendukung kebutuhan teknologi informasi dan multimedia dalam kegiatan operasional organisasi.</li>
<li>Mengelola dan mengarsipkan dokumen serta data organisasi secara terstruktur untuk kebutuhan publikasi dan administrasi.</li>
<li>Membantu troubleshooting perangkat keras sesekali.</li>
</ul>
</article>
<article className="card entry reveal">
<div className="row">
<span className="type-chip">Magang</span>
<span className="period">Agu – Des 2019</span>
</div>
<div>
<h3>Technical Support Intern</h3>
<div className="org">IT Talk Computer</div>
</div>
<ul>
<li>Melakukan instalasi dan konfigurasi sistem operasi serta software dan aplikasi dasar pada perangkat laptop baru sesuai kebutuhan pengguna.</li>
<li>Melakukan pengecekan dan memastikan perangkat siap digunakan sebelum diserahkan kepada customer.</li>
<li>Menjelaskan spesifikasi perangkat laptop dan memberikan panduan dasar penggunaan software kepada customer.</li>
<li>Menangani troubleshooting dasar perangkat keras dan perangkat lunak.</li>
</ul>
</article>
</div>
</div>
<div className="about-sub" id="keahlian">
<div className="sub-head-row">
<h3 className="about-sub-title reveal">Skills</h3>
<div className="skill-filters reveal" role="group" aria-label="Sortir skills berdasarkan kategori">
<button className="skill-filter active" type="button" data-skill-filter="semua">Semua (26)</button>
<button className="skill-filter" type="button" data-skill-filter="dev">Development (12)</button>
<button className="skill-filter" type="button" data-skill-filter="ml">Machine Learning (4)</button>
<button className="skill-filter" type="button" data-skill-filter="tools">Tools (10)</button>
</div>
</div>
<div className="skills">
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-laravel" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Laravel</span><span className="skill-cat">Framework PHP</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-next" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Next.js</span><span className="skill-cat">Framework React</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-tailwind" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Tailwind CSS</span><span className="skill-cat">Framework CSS</span></span>
</div>
<div className="skill reveal" data-skill-cat="ml">
<span className="skill-icon ic-python" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Python</span><span className="skill-cat">Bahasa Pemrograman</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-blade" aria-hidden="true">{"{{ }}"}</span>
<span className="skill-meta"><span className="skill-name">Blade</span><span className="skill-cat">Template Engine · Frontend Laravel</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-react" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.05" focusable="false"><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"></circle><ellipse cx="12" cy="12" rx="10" ry="4.15"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.15" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.15" transform="rotate(120 12 12)"></ellipse></svg></span>
<span className="skill-meta"><span className="skill-name">React</span><span className="skill-cat">Library Frontend</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-ts" aria-hidden="true">TS</span>
<span className="skill-meta"><span className="skill-name">TypeScript</span><span className="skill-cat">Bahasa Pemrograman</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-mysql" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path></svg></span>
<span className="skill-meta"><span className="skill-name">MySQL</span><span className="skill-cat">Basis Data</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-php" aria-hidden="true">php</span>
<span className="skill-meta"><span className="skill-name">PHP</span><span className="skill-cat">Bahasa Pemrograman</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-html" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M1.5 0h21l-1.91 21.563L12 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">HTML</span><span className="skill-cat">Frontend Web</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-css" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M1.5 0h21l-1.91 21.563L12 24l-8.565-2.438L1.5 0zm17.09 4.41L5.41 4.41l.656 7.165h9.358l-.245 2.75-3.178.874-3.182-.87-.196-2.187H6.27l.324 3.62L12 16.242l5.404-1.48.704-7.861H7.903l-.245-2.49h10.931z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">CSS</span><span className="skill-cat">CSS Murni · Styling Web</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-js" aria-hidden="true">JS</span>
<span className="skill-meta"><span className="skill-name">JavaScript</span><span className="skill-cat">Frontend Web</span></span>
</div>
<div className="skill reveal" data-skill-cat="ml">
<span className="skill-icon ic-streamlit" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Streamlit</span><span className="skill-cat">Framework ML</span></span>
</div>
<div className="skill reveal" data-skill-cat="ml">
<span className="skill-icon ic-sklearn" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Scikit-learn</span><span className="skill-cat">Machine Learning</span></span>
</div>
<div className="skill reveal" data-skill-cat="dev">
<span className="skill-icon ic-vite" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Vite</span><span className="skill-cat">Build Tool</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-git" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Git/GitHub</span><span className="skill-cat">Version Control</span></span>
</div>
<div className="skill reveal" data-skill-cat="ml">
<span className="skill-icon ic-colab" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M16.9414 4.9757a7.033 7.033 0 0 0-4.9308 2.0646 7.033 7.033 0 0 0-.1232 9.8068l2.395-2.395a3.6455 3.6455 0 0 1 5.1497-5.1478l2.397-2.3989a7.033 7.033 0 0 0-4.8877-1.9297zM7.07 4.9855a7.033 7.033 0 0 0-4.8878 1.9316l2.3911 2.3911a3.6434 3.6434 0 0 1 5.0227.1271l1.7341-2.9737-.0997-.0802A7.033 7.033 0 0 0 7.07 4.9855zm15.0093 2.1721l-2.3892 2.3911a3.6455 3.6455 0 0 1-5.1497 5.1497l-2.4067 2.4068a7.0362 7.0362 0 0 0 9.9456-9.9476zM1.932 7.1674a7.033 7.033 0 0 0-.002 9.6816l2.397-2.397a3.6434 3.6434 0 0 1-.004-4.8916zm7.664 7.4235c-1.38 1.3816-3.5863 1.411-5.0168.1134l-2.397 2.395c2.4693 2.3328 6.263 2.5753 9.0072.5455l.1368-.1115z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Google Colab</span><span className="skill-cat">Data Science</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-vscode" aria-hidden="true"><svg viewBox="0 0 128 128" fill="currentColor" focusable="false"><path fillRule="evenodd" d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">VS Code</span><span className="skill-cat">Code Editor</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-canva" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Canva</span><span className="skill-cat">Desain Grafis</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-figma" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Figma</span><span className="skill-cat">UI/UX Design</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-drawio" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M19.69 13.419h-2.527l-2.667-4.555a1.292 1.292 0 0 0 1.035-1.28V4.16c0-.725-.576-1.312-1.302-1.312H9.771c-.726 0-1.312.576-1.312 1.301v3.435c0 .619.426 1.152 1.034 1.28l-2.666 4.555H4.309c-.725 0-1.312.576-1.312 1.301v3.435c0 .725.576 1.312 1.302 1.312h4.458c.726 0 1.312-.576 1.312-1.302v-3.434c0-.726-.576-1.312-1.301-1.312h-.437l2.645-4.523h2.059l2.656 4.523h-.438c-.725 0-1.312.576-1.312 1.301v3.435c0 .725.576 1.312 1.302 1.312H19.7c.726 0 1.312-.576 1.312-1.302v-3.434c0-.726-.576-1.312-1.301-1.312zM24 22.976c0 .565-.459 1.024-1.013 1.024H1.024A1.022 1.022 0 0 1 0 22.987V1.024C0 .459.459 0 1.013 0h21.963C23.541 0 24 .459 24 1.013z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Draw.io</span><span className="skill-cat">Diagram &amp; Flowchart</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-postman" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg></span>
<span className="skill-meta"><span className="skill-name">Postman</span><span className="skill-cat">Pengujian API</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-swagger" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" focusable="false"><path d="M8.5 3.5c-1.9 0-2.3 1-2.3 2.7v2.6c0 1.1-.4 2-1.4 3.2 1 1.2 1.4 2.1 1.4 3.2v2.6c0 1.7.4 2.7 2.3 2.7"></path><path d="M15.5 3.5c1.9 0 2.3 1 2.3 2.7v2.6c0 1.1.4 2 1.4 3.2-1 1.2-1.4 2.1-1.4 3.2v2.6c0 1.7-.4 2.7-2.3 2.7"></path><circle cx="9.8" cy="12" r="0.7" fill="currentColor" stroke="none"></circle><circle cx="14.2" cy="12" r="0.7" fill="currentColor" stroke="none"></circle></svg></span>
<span className="skill-meta"><span className="skill-name">Swagger</span><span className="skill-cat">Dokumentasi API</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-word" aria-hidden="true">W</span>
<span className="skill-meta"><span className="skill-name">Microsoft Word</span><span className="skill-cat">Pengolah Kata</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-excel" aria-hidden="true">X</span>
<span className="skill-meta"><span className="skill-name">Microsoft Excel</span><span className="skill-cat">Spreadsheet &amp; Data</span></span>
</div>
<div className="skill reveal" data-skill-cat="tools">
<span className="skill-icon ic-powerpoint" aria-hidden="true">P</span>
<span className="skill-meta"><span className="skill-name">Microsoft PowerPoint</span><span className="skill-cat">Presentasi</span></span>
</div>
</div>
<div className="skills-more" id="skillsMore" hidden={true}>
<button className="skills-more-btn" id="skillsMoreBtn" type="button" aria-expanded="false">
<span id="skillsMoreLabel">Lihat Semua Skills</span>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
<div className="about-sub" id="sertifikasi">
<div className="sub-head-row">
<h3 className="about-sub-title reveal">Certifications &amp; Training</h3>
<div className="cert-filters reveal" role="group" aria-label="Filter sertifikasi dan pelatihan">
<button className="cert-filter active" type="button" data-cert-filter="semua">Semua (11)</button>
<button className="cert-filter" type="button" data-cert-filter="sertifikasi">Sertifikasi (5)</button>
<button className="cert-filter" type="button" data-cert-filter="pelatihan">Pelatihan (6)</button>
</div>
</div>
<div className="cert-grid">
<article className="card cert-card reveal" data-cert-cat="pelatihan">
<button className="cert-preview" type="button" data-cert-detail="dicoding-lit" aria-label="Lihat detail Front-End: Bikin Web Component Lebih Gampang Pakai Lit">
<img src="/assets/02b01a472ef3b25b.jpg" alt="Pratinjau halaman pertama sertifikat kehadiran DevCoach 145 Dicoding Event" width="900" height="637" loading="lazy" />
</button>
<h3>Front-End: Bikin Web Component Lebih Gampang Pakai Lit</h3>
<div className="cert-org">Dicoding Event</div>
<p className="cert-desc">Sertifikat kehadiran DevCoach 145 Dicoding Event: Front-End — Bikin Web Component Lebih Gampang Pakai Lit.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="dicoding-lit">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="dicoding-lit">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="pelatihan">
<button className="cert-preview" type="button" data-cert-detail="ml-api" aria-label="Lihat detail Developing Machine Learning Model to API">
<img src="/assets/fe300d48ea2ca0a5.jpg" alt="Pratinjau halaman pertama sertifikat pelatihan Developing Machine Learning Model to API" width="900" height="637" loading="lazy" />
</button>
<h3>Developing Machine Learning Model to API</h3>
<div className="cert-org">FTIK Universitas Semarang (SIPKOL)</div>
<p className="cert-desc">Pelatihan dari FTIK Universitas Semarang (SIPKOL), 2026.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="ml-api">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="ml-api">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="sertifikasi">
<button className="cert-preview" type="button" data-cert-detail="sinatti-pemakalah" aria-label="Lihat detail SINATTI 2025 — Pemakalah">
<img src="/assets/52b52702e7c7ee6f.jpg" alt="Pratinjau halaman pertama sertifikat SINATTI 2025 — Pemakalah" width="900" height="637" loading="lazy" />
</button>
<h3>SINATTI 2025 — Pemakalah</h3>
<div className="cert-org">FTIK — Universitas Semarang</div>
<p className="cert-desc">Pemakalah pada Seminar Nasional Teknologi Informasi (SINATTI) 2025 — mempresentasikan paper tentang sistem Fraksi Gerindra DPRD Kota Semarang.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="sinatti-pemakalah">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="sinatti-pemakalah">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="sertifikasi">
<button className="cert-preview" type="button" data-cert-detail="sinatti-author" aria-label="Lihat detail SINATTI 2025 — Author">
<img src="/assets/ed8a78ef6a4de796.jpg" alt="Pratinjau halaman pertama sertifikat SINATTI 2025 — Author" width="900" height="637" loading="lazy" />
</button>
<h3>SINATTI 2025 — Author</h3>
<div className="cert-org">FTIK — Universitas Semarang</div>
<p className="cert-desc">Author paper tentang sistem Fraksi Gerindra DPRD Kota Semarang, ditulis bersama Khoirudin dan Astrid Novita Putri.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="sinatti-author">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="sinatti-author">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="sertifikasi">
<button className="cert-preview" type="button" data-cert-detail="toefl-diagnostic" aria-label="Lihat detail TOEFL Diagnostic Test">
<img src="/assets/d1e405a44323f14f.jpg" alt="Pratinjau halaman pertama sertifikat TOEFL Diagnostic Test" width="900" height="636" loading="lazy" />
</button>
<h3>TOEFL Diagnostic Test</h3>
<div className="cert-org">Bina Bahasa Jaya — Universitas Semarang</div>
<p className="cert-desc">Tes diagnostik kemampuan bahasa Inggris yang diselenggarakan oleh Bina Bahasa Jaya, Universitas Semarang.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="toefl-diagnostic">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="toefl-diagnostic">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="sertifikasi">
<button className="cert-preview" type="button" data-cert-detail="toefl-prediction" aria-label="Lihat detail TOEFL Prediction Test">
<img src="/assets/1dbd3d13f453fe8f.jpg" alt="Pratinjau halaman pertama surat pemberitahuan TOEFL Prediction Test" width="900" height="636" loading="lazy" />
</button>
<h3>TOEFL Prediction Test</h3>
<div className="cert-org">Bina Bahasa Jaya — Universitas Semarang</div>
<p className="cert-desc">Tes prediksi kemampuan bahasa Inggris yang diselenggarakan oleh Bina Bahasa Jaya, Universitas Semarang.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="toefl-prediction">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="toefl-prediction">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="pelatihan">
<button className="cert-preview" type="button" data-cert-detail="business-english" aria-label="Lihat detail Business English Course">
<img src="/assets/9eb5092b640218e9.jpg" alt="Pratinjau halaman pertama sertifikat Business English Course" width="900" height="1274" loading="lazy" />
</button>
<h3>Business English Course</h3>
<div className="cert-org">Bina Bahasa Jaya — Universitas Semarang</div>
<p className="cert-desc">Kursus Bahasa Inggris Bisnis selama 32 jam pada 2–16 Agustus 2023. Sertifikat diterbitkan pada 1 September 2023.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="business-english">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="business-english">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="pelatihan">
<button className="cert-preview" type="button" data-cert-detail="entrepreneurship" aria-label="Lihat detail Entrepreneurship">
<img src="/assets/0687638e753842dc.jpg" alt="Pratinjau halaman pertama sertifikat Entrepreneurship" width="900" height="636" loading="lazy" />
</button>
<h3>Entrepreneurship</h3>
<div className="cert-org">Semarang Young Entrepreneur Festival 2022</div>
<p className="cert-desc">Peserta Pelatihan Soft Skills tingkat nasional pada Semarang Young Entrepreneur Festival 2022.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="entrepreneurship">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="entrepreneurship">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="pelatihan">
<button className="cert-preview" type="button" data-cert-detail="leadership" aria-label="Lihat detail Leadership">
<img src="/assets/56054f234dc46ede.jpg" alt="Pratinjau halaman pertama sertifikat Leadership" width="900" height="636" loading="lazy" />
</button>
<h3>Leadership</h3>
<div className="cert-org">Semarang Young Entrepreneur Festival 2022</div>
<p className="cert-desc">Peserta Pelatihan Soft Skills tingkat nasional pada Semarang Young Entrepreneur Festival 2022.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="leadership">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="leadership">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="pelatihan">
<button className="cert-preview" type="button" data-cert-detail="public-speaking" aria-label="Lihat detail Public Speaking">
<img src="/assets/d41077a253b5e75b.jpg" alt="Pratinjau halaman pertama sertifikat Public Speaking" width="900" height="636" loading="lazy" />
</button>
<h3>Public Speaking</h3>
<div className="cert-org">Semarang Young Entrepreneur Festival 2022</div>
<p className="cert-desc">Peserta Pelatihan Soft Skills tingkat nasional pada Semarang Young Entrepreneur Festival 2022.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="public-speaking">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="public-speaking">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
<article className="card cert-card reveal" data-cert-cat="sertifikasi">
<button className="cert-preview" type="button" data-cert-detail="milenials-summit" aria-label="Lihat detail Milenials Entrepreneur Summit">
<img src="/assets/ccb3f0053a70de56.jpg" alt="Pratinjau halaman pertama Certificate of Appreciation Milenials Entrepreneur Summit" width="900" height="1274" loading="lazy" />
</button>
<h3>Milenials Entrepreneur Summit</h3>
<div className="cert-org">Semarang Young Entrepreneur Festival 2022</div>
<p className="cert-desc">Certificate of Appreciation — Milenials Entrepreneur Summit Singapore and Malaysia 2022.</p>
<div className="card-actions">
<button className="btn-detail" type="button" data-cert-detail="milenials-summit">Detail
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="btn-pdf" type="button" data-cert-pdf="milenials-summit">Buka PDF
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="section" id="proyek">
<div className="wrap">
<div className="section-head reveal">
<h2>Projects</h2>
</div>
<div className="project-filters reveal" role="group" aria-label="Sortir proyek berdasarkan kategori">
<button className="project-filter active" type="button" data-project-filter="semua">Semua (6)</button>
<button className="project-filter" type="button" data-project-filter="web">Web (3)</button>
<button className="project-filter" type="button" data-project-filter="ml">Machine Learning (1)</button>
<button className="project-filter" type="button" data-project-filter="game">Game &amp; Animasi (2)</button>
</div>
<div className="bento">
<article className="card reveal" data-project="tidur" data-project-cat="ml">
<div className="card-preview">
<img src="/assets/435e22716e81c478.png" alt="Tangkapan layar Beranda aplikasi Deteksi Tidur — judul “Tidur Nyenyak, Hidup Lebih Sehat.” dan kartu statistik akurasi SVM 99,83%" width="1914" height="915" loading="lazy" />
</div>
<h3>Sistem Deteksi Gangguan Tidur</h3>
<p>Aplikasi web deteksi gangguan tidur berbasis Support Vector Machine (SVM), dibangun dengan Streamlit. Penelitian ini dipublikasikan di JOINS (SINTA 4) dengan judul “Deteksi Gangguan Tidur Menggunakan Support Vector Machine pada Aplikasi Web Streamlit”. Tampilan website sudah dikembangkan lebih lanjut sehingga berbeda dari yang ada di artikel, dan responsif di tampilan mobile maupun desktop.</p>
<div className="chips">
<span className="chip">Support Vector Machine</span>
<span className="chip">Streamlit</span>
<span className="chip">Machine Learning</span>
<span className="chip">Python</span>
<span className="chip">Google Colab</span>
<span className="chip">Kaggle</span>
</div>
<div className="card-actions">
<button className="btn-detail" type="button" data-detail="tidur">Detail
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="card-icon-link" href="https://deteksigangguantidur.streamlit.app/" target="_blank" rel="noopener" aria-label="Kunjungi Situs — Sistem Deteksi Gangguan Tidur" title="Kunjungi Situs">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
</div>
</article>
<article className="card reveal" data-project="gerindra" data-project-cat="web">
<div className="card-preview">
<img src="/assets/0aa56cf08726bc8b.jpg" alt="Tangkapan layar halaman Galeri Kegiatan pada Sistem Informasi Fraksi Gerindra DPRD Kota Semarang" width="1280" height="720" loading="lazy" />
</div>
<h3>Sistem Informasi dan Layanan Aspirasi Fraksi Gerindra Kota Semarang</h3>
<p>Proyek utama selama magang sebagai IT &amp; Multimedia Intern (Maret–Juli 2025). Aplikasi web ini memuat profil anggota fraksi, layanan pengajuan dan pengelolaan aspirasi masyarakat, serta sistem prioritas aspirasi menggunakan metode VIKOR (SPK) untuk menentukan aspirasi yang paling layak ditindaklanjuti. Dilengkapi fitur upload berita dan galeri kegiatan untuk publikasi dan dokumentasi organisasi.</p>
<div className="chips">
<span className="chip">Laravel</span>
<span className="chip">MySQL</span>
<span className="chip">SPK VIKOR</span>
<span className="chip">PHP</span>
<span className="chip">HTML</span>
<span className="chip">CSS</span>
<span className="chip">JavaScript</span>
<span className="chip">Vite</span>
</div>
<div className="card-actions">
<button className="btn-detail" type="button" data-detail="gerindra">Detail
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="card-icon-link" href="https://fraksigerindra-semarang.freedev.app" target="_blank" rel="noopener" aria-label="Kunjungi Situs — Sistem Informasi dan Layanan Aspirasi Fraksi Gerindra Kota Semarang" title="Kunjungi Situs">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
</div>
</article>
<article className="card reveal" data-project="gotravel" data-project-cat="web">
<div className="card-preview">
<img src="/assets/a2162c21df53f8ea.jpg" alt="Tangkapan layar hero halaman utama GoTravel dengan judul Wonderfull Indonesia" width="1280" height="720" loading="lazy" />
</div>
<h3>Website Pemesanan Tiket Travel (GoTravel) + Integrasi Payment Gateway Midtrans</h3>
<p>Website pemesanan tiket travel berbasis Laravel dengan sistem booking paket wisata dan integrasi payment gateway Midtrans Sandbox (Snap) — pembayaran via kartu kredit, transfer bank, e-wallet, dan QRIS. Dilengkapi panel admin untuk mengelola paket, booking, dan konten. Midtrans dapat diubah ke mode production agar bisa menerima callback status pembayaran; demo ini masih memakai sandbox, sehingga callback status tidak diterima dan status pembayaran tetap Unpaid di database.</p>
<div className="chips">
<span className="chip">Laravel</span>
<span className="chip">MySQL</span>
<span className="chip">Midtrans</span>
<span className="chip">PHP</span>
<span className="chip">HTML</span>
<span className="chip">CSS</span>
<span className="chip">JavaScript</span>
<span className="chip">Vite</span>
</div>
<div className="card-actions">
<button className="btn-detail" type="button" data-detail="gotravel">Detail
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="card-icon-link" href="https://gotravel.freedev.app" target="_blank" rel="noopener" aria-label="Kunjungi Situs — GoTravel" title="Kunjungi Situs">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
</div>
</article>
<article className="card reveal" data-project="portofolio" data-project-cat="web">
<div className="card-preview">
<img src="/assets/1dec2e9cab476621.jpg" alt="Tangkapan layar hero website portofolio Satria Dava Riansa" width="1280" height="598" loading="lazy" />
</div>
<h3>Portofolio Pribadi (Proyek Ini)</h3>
<p>Website portofolio satu halaman ini, dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS sebagai bagian dari proses belajar Next.js.</p>
<div className="chips">
<span className="chip">Next.js</span>
<span className="chip">TypeScript</span>
<span className="chip">Tailwind CSS</span>
</div>
<div className="card-actions">
<button className="btn-detail" type="button" data-detail="portofolio">Detail
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="card-icon-link" href="#beranda" aria-label="Sedang Anda lihat — kembali ke Beranda" title="Sedang Anda lihat">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
</div>
</article>
<article className="card reveal" data-project="trash" data-project-cat="game">
<div className="card-preview">
<img src="/assets/62e894ce5689a7a7.png" alt="Menu utama game Trash Cleaner dengan pilihan Play Game, Difficulty, Setting, dan Quit" width="1919" height="1079" loading="lazy" />
</div>
<h3>Trash Cleaner — Game 3D Bertema Lingkungan</h3>
<p>Game desktop 3D third-person berbasis Unity (C#) yang dibuat sebagai tugas bertema masalah lingkungan. Pemain berjalan menyusuri jalan kota untuk memungut sampah yang berserakan (botol, kaleng, kertas) ke dalam kantong sampah sebelum waktu habis, dengan sistem nyawa (hati) dan pilihan tingkat kesulitan. Dibuat keseluruhan oleh saya; latar dan model memakai aset gratis.</p>
<div className="chips">
<span className="chip">Unity</span>
<span className="chip">C#</span>
<span className="chip">Game 3D</span>
</div>
<div className="card-actions">
<button className="btn-detail" type="button" data-detail="trash">Detail
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="card-icon-link" href="https://github.com/satria2909/trash_cleaner" target="_blank" rel="noopener" data-modal-label="GitHub" data-modal-icon="github" aria-label="GitHub — Trash Cleaner — Game 3D Bertema Lingkungan" title="GitHub">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
</div>
</article>
<article className="card reveal" data-project="blender" data-project-cat="game">
<div className="card-preview">
<img src="/assets/a9fd61957b1b8a58.jpg" alt="Thumbnail video animasi 3D Blender — dua mobil berpapasan di jalan kota pada malam hari" width="640" height="320" loading="lazy" />
</div>
<h3>Animasi 3D Sinematik — Mobil di Jalan Kota</h3>
<p>Animasi 3D singkat (31 detik) dibuat dengan Blender: dua mobil berpapasan di jalan kota pada malam hari, dengan pergerakan kamera sinematik dan suara mesin mobil.</p>
<div className="chips">
<span className="chip">Blender</span>
<span className="chip">Animasi 3D</span>
<span className="chip">Sinematik</span>
</div>
<div className="card-actions">
<button className="btn-detail" type="button" data-detail="blender">Detail
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="card-icon-link" href="https://youtu.be/y4WQCL0QUH0" target="_blank" rel="noopener" data-modal-label="Tonton Video" data-modal-icon="play" aria-label="Tonton Video — Animasi 3D Sinematik — Mobil di Jalan Kota" title="Tonton Video">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M8 7h9v9"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="section" id="kontak" style={{paddingBottom: "0.5rem"}}>
<div className="wrap">
<div className="contact-card reveal">
<h2>Contact</h2>
<p>Hubungi saya melalui kanal berikut:</p>
<div className="contact-grid">
<a className="contact-item" href="https://github.com/satria2909" target="_blank" rel="noopener">
<span className="icon ic-github"><svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></span>
<span className="meta"><span className="channel">GitHub</span><span className="detail">github.com/satria2909</span></span>
</a>
<a className="contact-item" href="https://wa.me/6282199370439" target="_blank" rel="noopener">
<span className="icon ic-whatsapp"><svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg></span>
<span className="meta"><span className="channel">WhatsApp</span><span className="detail">082199370439</span></span>
</a>
<a className="contact-item" href="https://www.linkedin.com/in/satria-dava-riansa-457640439" target="_blank" rel="noopener">
<span className="icon ic-linkedin"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></span>
<span className="meta"><span className="channel">LinkedIn</span><span className="detail">linkedin.com/in/satria-dava-riansa-457640439</span></span>
</a>
<a className="contact-item" href="mailto:satriadava29@gmail.com">
<span className="icon ic-gmail"><svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg></span>
<span className="meta"><span className="channel">Email</span><span className="detail">satriadava29@gmail.com</span></span>
</a>
<a className="contact-item" href="https://t.me/+6282199370439" target="_blank" rel="noopener">
<span className="icon ic-telegram"><svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg></span>
<span className="meta"><span className="channel">Telegram</span><span className="detail">082199370439</span></span>
</a>
<a className="contact-item" href="https://instagram.com/strdvrns_" target="_blank" rel="noopener">
<span className="icon ic-instagram"><svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg></span>
<span className="meta"><span className="channel">Instagram</span><span className="detail">@strdvrns_</span></span>
</a>
</div>
</div>
</div>
</section>
</main><div className="modal-overlay" id="projectModal" hidden={true}>
<div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle" data-lenis-prevent="">
<div className="modal-head">
<span className="modal-counter" id="modalCounter">1 / 3</span>
<button className="modal-x" id="modalCloseX" type="button" aria-label="Tutup detail proyek">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="modal-body">
<div className="modal-media">
<div className="m-viewport" id="modalViewport">
<div className="m-track" id="modalTrack"></div>
</div>
<div className="m-nav">
<button className="m-nav-btn" id="modalPrev" type="button">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
                Prev
              </button>
<div className="m-dots" id="modalDots"></div>
<button className="m-nav-btn" id="modalNext" type="button">
                Next
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="modal-info">
<h3 id="modalTitle"></h3>
<p id="modalDesc"></p>
<div className="chips" id="modalChips"></div>
<div className="modal-links" id="modalLinks"></div>
</div>
</div>
<div className="modal-foot">
<button className="modal-close-btn" id="modalClose" type="button">Close</button>
</div>
</div>
</div><div className="modal-overlay" id="certModal" hidden={true}>
<div className="modal-panel cert-modal-panel" role="dialog" aria-modal="true" aria-labelledby="certModalTitle" data-lenis-prevent="">
<div className="modal-head">
<span className="modal-counter" id="certModalCat"></span>
<button className="modal-x" id="certModalCloseX" type="button" aria-label="Tutup detail sertifikat">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="cert-modal-body">
<div className="modal-info">
<h3 id="certModalTitle"></h3>
<div className="cert-modal-meta" id="certModalMeta"></div>
<p className="cert-total" id="certModalTotal" hidden={true}></p>
<div className="score-chips" id="certModalScores"></div>
<p id="certModalDesc"></p>
<p className="cert-note" id="certModalNote" hidden={true}></p>
</div>
<div>
<div className="cert-pdf-view" id="certPdfView" hidden={true}>
<p className="cert-pdf-status" id="certPdfStatus" role="status">Memuat PDF…</p>
<div className="cert-pdf-pages" id="certPdfPages"></div>
<div className="cert-pdf-fallback" id="certPdfFallback" hidden={true}>
<p>PDF tidak dapat ditampilkan di dalam halaman ini. Gunakan tombol “Buka PDF di tab baru” atau “Unduh PDF” di bawah untuk melihatnya.</p>
</div>
</div>
<div className="cert-pdf-missing" id="certModalMissing" hidden={true}>PDF sertifikat ini belum dikirim.</div>
<div className="modal-links" id="certModalLinkWrap" hidden={true}>
<button className="modal-link-btn modal-link-btn--primary" id="certModalOpen" type="button">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span>Buka PDF di tab baru</span>
</button>
<a className="modal-link-btn" id="certModalDownload" href="#" download="">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg>
<span>Unduh PDF</span>
</a>
</div>
</div>
</div>
<div className="modal-foot">
<button className="modal-close-btn" id="certModalClose" type="button">Close</button>
</div>
</div>
</div><div className="modal-overlay pdf-overlay" id="pdfViewer" hidden={true}>
<div className="modal-panel pdf-panel" role="dialog" aria-modal="true" aria-labelledby="pdfViewerTitle" data-lenis-prevent="">
<div className="modal-head">
<span className="modal-counter" id="pdfViewerMeta">PDF</span>
<button className="modal-x" id="pdfViewerCloseX" type="button" aria-label="Tutup penampil PDF">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="pdf-view-body">
<h3 id="pdfViewerTitle"></h3>
<div className="cert-pdf-view pdf-view-scroll" id="pdfViewBox">
<p className="cert-pdf-status" id="pdfViewStatus" role="status">Memuat PDF…</p>
<div className="cert-pdf-pages" id="pdfViewPages"></div>
<div className="cert-pdf-fallback" id="pdfViewFallback" hidden={true}>
<p>PDF tidak dapat ditampilkan di dalam halaman ini. Gunakan tombol “Unduh PDF” di bawah untuk mengunduh dan membukanya di aplikasi PDF Anda.</p>
</div>
</div>
</div>
<div className="modal-foot pdf-foot">
<a className="modal-link-btn" id="pdfViewerDownload" href="#" download="">
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg>
<span>Unduh PDF</span>
</a>
<button className="modal-close-btn" id="pdfViewerClose" type="button">Close</button>
</div>
</div>
</div><footer>
<div className="wrap foot">
<span>© Satria Dava Riansa — Dibangun dengan Next.js, TypeScript, dan Tailwind CSS.</span>
<a href="https://github.com/satria2909" target="_blank" rel="noopener">
<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          github.com/satria2909
        </a>
</div>
</footer>
      <LegacyInteractions />
    </div>
  );
}
