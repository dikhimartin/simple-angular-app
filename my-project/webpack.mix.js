const mix = require('laravel-mix');

mix.setPublicPath('public')
   .js('frontend/src/main.ts', 'public/js')
   .sass('frontend/src/styles.sass', 'public/css')
   .webpackConfig({
      resolve: {
         extensions: ['.ts', '.js']
      }
   });
