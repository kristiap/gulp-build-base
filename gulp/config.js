var dest = "./build";
var src = './app';

module.exports = {
    browserSync: {
        server: {
            baseDir: [dest]
        },
        files: [dest + "/**",
            // Exclude Map files
                "!" + dest + "/**.map"
        ]
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/images"
    },
    markup: {
        src: src + "/**/*.html",
        dest: dest
    },
    styles: {
        src: src + "/styles/styles.less",
        dest: dest + "/styles"
    },
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [
            {
                entries: src + '/scripts/app.js',
                dest: dest,
                outputName: 'scripts/app.js'
            }
        ]
    }
};