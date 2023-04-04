Berikut langkah-langkah cara membuat Simple Angular App di Laravel 10:

1. Pastikan kita telah menginstall Laravel 10. Jika belum, jalankan perintah berikut pada terminal:

   ```bash
   composer create-project laravel/laravel my-app
   ```

2. Install Angular CLI dengan menjalankan perintah berikut pada terminal:

   ```bash
   npm install -g @angular/cli
   ```

3. Buat aplikasi Angular baru dengan menjalankan perintah berikut pada terminal:

   ```bash
   ng new frontend --routing --style=sass
   ```

   Perintah ini akan membuat aplikasi Angular baru dengan konfigurasi routing dan menggunakan Sass sebagai preprocessor CSS.
   
   

4. Tambahkan Laravel Mix ke dalam aplikasi Laravel dengan menjalankan perintah :

   ```shell
   npm install laravel-mix --save-dev
   ```

   

5. Konfigurasikan file `webpack.mix.js` untuk menghasilkan file JavaScript dan CSS dari aplikasi Angular. Contoh konfigurasi bisa seperti ini:

   ```js
   const mix = require('laravel-mix');
   
   mix.setPublicPath('public')
      .js('frontend/src/main.ts', 'public/js')
      .sass('frontend/src/styles.scss', 'public/css')
      .webpackConfig({
         resolve: {
            extensions: ['.ts', '.js']
         }
      });
   ```

   Konfigurasi tersebut akan menghasilkan file JavaScript `main.js` dan file CSS `styles.css` di dalam direktori `public`.
   
   

6. Integrasi Angular dengan Laravel. Buatlah route baru di Laravel yang akan menampilkan aplikasi Angular. Buka file `routes/web.php` dan tambahkan kode berikut:

   ```php
   Route::get('/{any}', function () {
      return view('app');
   })->where('any', '.*');
   ```

   Kode ini akan menampilkan view `app.blade.php` yang akan menampilkan aplikasi Angular.

7. Buat file blade baru dengan nama `app.blade.php` di dalam folder `resources/views`. Isi file tersebut dengan kode berikut:

   ```php+HTML
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>My App</title>
      <link rel="stylesheet" href="{{ mix('css/styles.css') }}">
   </head>
   <body>
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <h1>Welcome to My Angular App</h1>
               <hr>
               <app-root></app-root>
            </div>
         </div>
      </div>
      <script src="{{ mix('js/main.js') }}"></script>
   </body>
   </html>
   
   ```

   Kode di atas akan menampilkan komponen root dari aplikasi Angular dan memuat file JavaScript `app.js` yang dihasilkan oleh Angular CLI.

8. Jalankan perintah `npm install` dan `npm run dev` pada terminal untuk memuat file manifest Laravel Mix yang diperlukan. Pastikan bahwa tidak terdapat error yang muncul pada terminal.

   

9. Jalankan aplikasi Laravel dengan menjalankan perintah berikut pada terminal:

   ```bash
   php artisan serve
   ```

10. Buka aplikasi di browser dengan membuka alamat URL `http://localhost:8000`. Aplikasi Angular sekarang sudah terintegrasi dengan Laravel dan dapat diakses melalui URL tersebut.