var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    
    browserSync.init({
        //console.log("Imagine Browser Sync is doing its thing here!!!!!");
        //notify: false; // Prevents a box showing on upper right of browser notifying us of "Injected: styles.css" 
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function() {
        //gulp.start('html');
        browserSync.reload();
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        //gulp.start('styles');
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});


  /*gulp.task('watch', function() {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function() {
		gulp.start('html'); // Dummy text
		browserSync.reload();
	});
	
	watch('./app/assets/styles/** /*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});
*/
