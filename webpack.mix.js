const {sass, js, options} = require("laravel-mix")

options({processCssUrls: false})
sass('src/css/index.scss', 'dist/app.min.css')
js('src/js/app.js', 'dist/app.min.js').vue()