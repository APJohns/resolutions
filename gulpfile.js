const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");

gulp.task("autoprefixer", function() {
  return gulp
    .src("./src/css/*.css")
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./src/css"));
});
gulp.task("sass", function() {
  return gulp
    .src("./src/css/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"));
});

gulp.task("watch", ["sass", "autoprefixer"], function() {
  gulp.watch("./css/*.scss", ["sass"]);
  gulp.watch("./css/*.css", ["autoprefixer"]);
});
