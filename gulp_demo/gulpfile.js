/**
 * Created by abc on 2016/3/22.
 */
var gulp=require("gulp");//引入gulp模块儿对象
var sass=require("gulp-sass");
var less=require("gulp-less");
var gutil = require('gulp-util');
var coffee=require("gulp-coffee");

gulp.task('speak',function(){
    console.log('hello gulp');
});

gulp.task('sass', function() {
    gulp.src('sass/*.scss')//指定目标为sass目录
        .pipe(sass())//对目标目录执行sass()方法
        .pipe(gulp.dest('css'));//执行后，将处理过的文件输出到css目录
});
gulp.task('less',function(){
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});
gulp.task('coffee', function() {
    gulp.src('coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('js'));
});

//监听
gulp.task('default',function(){
    gulp.run('sass','less','coffee');
    gulp.watch('js/*.js',function(){
        gulp.run('sass','less','coffee');
    })
});