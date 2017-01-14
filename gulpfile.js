var gulp = require('gulp');
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');





gulp.task('default', function() {
	console.log("Horay - you created a gulp task.");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your HTML here.");
});






