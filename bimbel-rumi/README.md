# Bimbel RUMI — Frontend Website V2

Website frontend-only untuk Bimbel RUMI (Rumah Ilmu Iman Taqwa).

## Teknologi
- HTML
- Tailwind CSS via CDN
- CSS custom
- Vanilla JavaScript
- Google Fonts

Tidak memakai backend/database.

## Sebelum dipakai
1. Buka `script.js`.
2. Cari:
   `const WHATSAPP_NUMBER = "628XXXXXXXXXX";`
3. Ganti dengan nomor WhatsApp RUMI dalam format internasional tanpa `+`, spasi, atau tanda baca.
4. Setelah deploy, ganti `YOUR-DOMAIN.vercel.app` pada `robots.txt` dan `sitemap.xml` dengan domain website sebenarnya.

## Jalankan lokal
Bisa langsung buka `index.html` di browser. Untuk pengalaman yang lebih stabil, gunakan Live Server di VS Code.

## Deploy gratis ke Vercel
1. Upload folder ini ke GitHub.
2. Di Vercel pilih **New Project**.
3. Import repository GitHub.
4. Karena ini static site, tidak perlu backend.
5. Deploy.

Setiap push ke repository yang terhubung akan memicu deployment baru.

## Google
Setelah website online:
1. Buka Google Search Console.
2. Tambahkan/verifikasi domain atau URL prefix.
3. Submit `https://DOMAIN-KAMU/sitemap.xml`.
4. Gunakan URL Inspection untuk meminta indexing homepage.

Indexing tidak selalu instan dan tidak ada jaminan halaman langsung muncul di hasil pencarian.


## V2 interactive upgrades
- Animated announcement strip
- Active navigation indicator while scrolling
- Floating decorative elements
- Click sparkle micro-interaction
- "Kasih aku semangat!" random motivation interaction
- Why RUMI feature cards
- Improved playful hero composition
- EducationalOrganization JSON-LD structured data
