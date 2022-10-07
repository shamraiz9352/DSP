const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// mix.webpackConfig({
//     resolve: {
//         modules: [
//             'node_modules'
//         ],
//         alias: {
//             slick: 'slick-carousel/slick/slick.js',
//         }
//     }
// });

mix.js('resources/js/vendor.js', 'public/js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    })
    .js('resources/js/landing_vendor.js', 'public/js')
    .js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/seodetail.scss', 'public/css/seodetail')
    .sass('resources/sass/landing.scss', 'public/css')
    .sass('resources/sass/landing-new.scss', 'public/css');
// mix.postCss('resources/css/custom.css', 'public/css');

mix.js('resources/js/admin/app.js', 'public/js/admin')
    .js('resources/js/admin/global.js', 'public/js/admin')
    .vue()
    .sass('resources/sass/admin/app.scss', 'public/css/admin');




// mix.js('resources/js/Customlogodesign/vendor.js', 'public/Customlogodesign/js')
//     .js('resources/js/Customlogodesign/app.js', 'public/Customlogodesign/js')
//     .autoload({
//         jquery: ['$', 'window.jQuery', 'jQuery']
//     })
//     .vue()
//     .js('resources/js/Customlogodesign/global.js', 'public/Customlogodesign/js')
//     .sass('resources/sass/Customlogodesign/app.scss', 'public/Customlogodesign/css');
/**
 * Custom Logo Assets
 * All the assets and vendors loaded in the Custom Logo
 * folder with jquery and all the packages loaded from NPM
 */

mix.js('resources/js/Customlogodesign/vendor.js', 'public/Customlogodesign/js')
    .js('resources/js/Customlogodesign/app.js', 'public/Customlogodesign/js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    })
    .vue()
    .js('resources/js/Customlogodesign/global.js', 'public/Customlogodesign/js')
    .sass('resources/sass/Customlogodesign/app.scss', 'public/Customlogodesign/css');
