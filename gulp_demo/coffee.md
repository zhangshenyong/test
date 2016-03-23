##coffee配置
1. 安装gulp-coffee
    npm install gulp-coffee
2. 配置gulp.js
    gulp.task('coffee', function() {
        gulp.src('coffee/*.coffee')
            .pipe(coffee({bare: true}).on('error', gutil.log))
            .pipe(gulp.dest('js'));
    });
3.gulp.watch监听