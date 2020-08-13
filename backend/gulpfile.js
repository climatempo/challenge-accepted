const gulp = require("gulp");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", () => {
  return gulp.src("build").pipe(clean());
});

gulp.task("compile", () => {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("build"));
});

gulp.task("default", gulp.series("clean", "compile"));
