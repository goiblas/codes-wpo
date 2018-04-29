var gulp = require("gulp");
var rollup = require("gulp-rollup");
var rename = require("gulp-rename");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var uglifyEs = require('gulp-uglify-es').default;

gulp.task("js", function () {
    return gulp.src("./src/**/*.js")
            .pipe(rollup({
                format: "umd",
                moduleName: "app",
                entry: "./src/app.js"
            }))
            .pipe(rename("app.es2015.js"))
            .pipe(gulp.dest('./dist')) 
            .pipe(babel())
            .pipe(rename("app.js"))
            .pipe(gulp.dest('./dist'))
});


gulp.task("min-es2015", function () {
    return gulp.src("./src/**/*.js")
            .pipe(rollup({
                format: "umd",
                moduleName: "app",
                entry: "./src/app.js"
            }))
            .pipe(uglifyEs())
            .pipe(rename("app.min.es2015.js"))
            .pipe(gulp.dest('./dist'));
});

gulp.task("min-js", function () {
    return gulp.src("./src/**/*.js")
            .pipe(rollup({
                format: "umd",
                moduleName: "app",
                entry: "./src/app.js"
            }))
            .pipe(babel())
            .pipe(uglify())
            .pipe(rename("app.min.js"))
            .pipe(gulp.dest('./dist'));
});

gulp.task("default", function(){
    return gulp.watch("./src/**/*.js", ["js"]);
})
gulp.task("build", ["min-js", "min-es2015"]);