var gulp = require('gulp')
watch = require('gulp-watch')

gulp.task('default', function() {
    console.log("hurray - you did a thing");
});

gulp.task('html', function() {
    console.log("Imagine a gouch");
}); 

gulp.task('styles', function() {
    console.log("Imagine a gouch sass shit");
}); 

gulp.task('watch', function() {
    
    watch('./app/index.html', function() {
        gulp.src('./app/assets/styles/styles.css')
    });
})