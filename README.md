# STKI Frontend

Proyek ini adalah tampilan frontend website berita menggunakan framework React.js. Repository ini berisi semua kode yang diperlukan untuk menjalankan frontend.

## Cara install

1. Clone repository

2. Install dependency

   ```sh
   npm install
   ```

3. Buat file `.env` berdasarkan `.env.example` dan sesuaikan jika diperlukan

   ```
   cp .env.example .env
   ```
4. Atur URL backend di file .env, contoh `VITE_API_URL=http://url-backend.com`      

5. Jalankan aplikasi

    ```
    npm run dev
    ```

6. Program akan dijalankan secara lokal, misal pada http://localhost:5173/

## Fitur

Pengguna dapat melihat kategori berita, mengambil data dari backend API server. Pengguna juga dapat mencari kata kunci tertentu yang cocok dengan judul berita. Data berita dipisahkan dalam bentuk pagination, 1 halaman terdiri dari 12 berita.

## Struktur Proyek

Struktur folder mengikuti standar aplikasi yang dibuat dengan Vite + React

```
stki-frontend
├── public              # Data publik yang bisa diakses pengguna
├── src                 # Source code aplikasi
├── .env                # Environment variable
├── index.html          # Halaman utama aplikasi
├── package.json        # Daftar dependency proyek
└── README.md           # Dokumentasi proyek
```
