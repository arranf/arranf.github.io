var gulp = require('gulp'),
    pump = require('pump'),
    sass = require('gulp-sass'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

var config = {
    bower: './bower_components/',
    src: "./assets/src/",
    dist: "./assets/dist/"
}


gulp.task('default', ['js', 'picnic', 'css', 'images', 'fontawesome-css', 'fontawesome-fonts']);

gulp.task('bower', function() {
    bower();
});

gulp.task('stream', function(cb) {
    pump([watch('css/**/*.css', {
                ignoreInitial: true
            }),
            gulp.dest('default')
        ],
        cb);

});

gulp.task('js', function(cb) {
    pump([
            gulp.src(['./bower_components/jquery/dist/jquery.min.js']),
            gulp.dest(config.dist + 'js')
        ],
        cb
    );
});

gulp.task('images', function(cb) {
    pump([gulp.src(config.src + '/images/**/*'),
            gulp.dest(config.dist + '/images')
        ],
        cb);
});

gulp.task('css', function(cb) {
    pump([
            gulp.src(config.src + 'css/app.css'),
            cleanCSS({
                compatibility: 'ie8'
            }),
            rename("docs.min.css"),
            gulp.dest(config.dist + 'css')
        ],
        cb);
});

//Copy FontAwesome
gulp.task('fontawesome-css', function(cb) {
    pump([gulp.src(config.bower + '/font-awesome/css/font-awesome.min.css'),
            gulp.dest(config.dist + 'css')
        ],
        cb);
});

gulp.task('picnic', function(cb) {
    pump([gulp.src(config.bower + 'picnic/src/picnic.scss'),
            sass(),
            rename('picnic.min.css'),
            gulp.dest(config.dist + 'css')

        ],
        cb)
});

gulp.task('fontawesome-fonts', function(cb) {
    pump([gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg,woff2}'),
            gulp.dest(config.dist + 'fonts')

        ],
        cb);
});
