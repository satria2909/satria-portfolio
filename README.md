# Portofolio Satria Dava Riansa — Next.js

Portofolio ini sudah dipindahkan ke aplikasi **Next.js App Router, React, TypeScript, dan Tailwind CSS**. Seluruh struktur halaman dirender dari JSX di route Next.js, tidak menggunakan iframe dan tidak memuat dokumen HTML portofolio terpisah.

## Menjalankan secara lokal

Persyaratan: Node.js 20.9 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm start
```

Pemeriksaan TypeScript:

```bash
npm run typecheck
```

## Struktur utama

- `app/page.tsx` — struktur halaman dalam JSX/React.
- `app/layout.tsx` — root layout dan metadata Next.js.
- `app/globals.css` — Tailwind CSS serta design system/CSS referensi agar tampilan tetap setia.
- `app/LegacyInteractions.tsx` — komponen client yang memuat rangkaian modul interaksi setelah halaman ter-render.
- `public/assets/` — gambar dan dokumen PDF yang diekstrak dari data URI sumber.
- `public/scripts/` — modul JavaScript interaksi dan animasi hasil pemisahan dari dokumen sumber.

## Catatan implementasi

- Tidak ada iframe, `dangerouslySetInnerHTML`, atau HTML page terpisah.
- Layout, teks, kartu, section, dan modal merupakan markup JSX pada route Next.js.
- CSS desain asli dipertahankan untuk menjaga kemiripan visual; Tailwind tetap aktif untuk utility styling. Tailwind preflight dinonaktifkan supaya reset bawaan tidak mengubah desain referensi.
- Perilaku khusus dari sumber (fisika kartu ID yang bisa diseret, filter, modal proyek, carousel, detail/preview/unduh PDF, scroll reveal, dan navigasi) dipertahankan melalui modul JavaScript client yang dimuat berurutan. Jadi halaman dan struktur utamanya sudah Next.js/React, tetapi logika interaksi kompleks tersebut belum seluruhnya ditulis ulang menjadi state React.
- GSAP, ScrollTrigger, Lenis, Motion, dan PDF.js dimuat dari CDN jsDelivr. Koneksi internet diperlukan untuk library tersebut; aset gambar/PDF portofolio sendiri sudah lokal di `public/assets/`.

## Penyempurnaan tampilan mobile

- Area Beranda menggunakan alur satu kolom yang lebih lega, dengan teks dan tombol yang menyesuaikan lebar layar serta kartu ID yang dibatasi ukurannya.
- Area Contact berubah menjadi satu kolom pada layar ponsel agar alamat akun dan email tidak terjepit dalam dua kolom sempit. Pada tablet tetap dua kolom, sedangkan desktop mengikuti tiga kolom.
- Viewport mobile ditetapkan secara eksplisit (`device-width`, `initialScale: 1`).
