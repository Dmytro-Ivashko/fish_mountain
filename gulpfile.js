const gulp = require("gulp");
const sass = require("gulp-sass");
const cssbeautify = require('gulp-cssbeautify');

function style() {
    return gulp.src("./style/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cssbeautify())
        .pipe(gulp.dest("./style"))
}


function watch() {
    gulp.watch("./style/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;