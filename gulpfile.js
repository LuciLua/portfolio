// npm install node-sass gulp-sass --save-dev

const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transformacaoCSS() {
    return gulp.src('src/css/scss/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('src/css'))
}
function transformacaoCSSMedia() {
    return gulp.src('src/css/scss/sassMedia/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('estiloMedia.min.css'))
        .pipe(gulp.dest('src/css'))
}

exports.default = series(transformacaoCSS, transformacaoCSSMedia)