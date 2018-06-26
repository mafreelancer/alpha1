const 	gulp            = require('gulp'),
        less            = require('gulp-less'),
        browserSync     = require('browser-sync'),
        autoprefixer    = require('gulp-autoprefixer'),
        notify          = require("gulp-notify"),
        smartgrid	    = require('smart-grid');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
    });
});

gulp.task('grid', function(){
    smartgrid('app/less', {
        outputStyle: 'less',
        mobileFirst: false,
        container: {
            maxWidth: '1220px'
        }
    });
});

gulp.task('less', function() {
    return gulp.src('app/less/**/*.less')
        .pipe(less({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['less', 'browser-sync'], function() {
    gulp.watch('app/less/*.less', ['less']);
    gulp.watch(['app/js/*.js'], browserSync.reload);
    gulp.watch('app/**/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);