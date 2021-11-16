// @ts-ignore
const { series, src, dest } = require('gulp');
// @ts-ignore
const sass = require('gulp-dart-sass');
// @ts-ignore
const autoprefixer = require('gulp-autoprefixer');
// @ts-ignore
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyFont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'));
}

exports.build = series(compile, copyFont);
