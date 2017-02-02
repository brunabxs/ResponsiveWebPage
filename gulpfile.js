'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var dependencies = require('gulp-html-dependencies');
var deploy_dir = 'deploy'

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('deploy:bower', function() {
    return gulp.src('./public/index.html')
        .pipe(dependencies({
            dest: deploy_dir,
            prefix: '/vendor',
        }))
        .pipe(gulp.dest(deploy_dir));
});

gulp.task('deploy', ['sass', 'deploy:bower'], function() {
    return gulp.src(['./public/**/*', '!./public/index.html'])
        .pipe(gulp.dest(deploy_dir));
});