let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')

mix.setPublicPath('public')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/scss/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.js')
        ]
    })
