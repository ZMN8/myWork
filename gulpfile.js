var gulp=require("gulp"),
	less=require("gulp-less"),//转换less文件
	rename=require("gulp-rename"),//重命名插件
	uglify=require("gulp-uglify"),//压缩js
	mincss=require("gulp-minify-css");//压缩css

var pathSrc="src/",//生产路径
	pathDest="dest/";//发布路径
	
	
//将src/less/*.less文件通过less插件转换成dest/css/*.css文件	
gulp.task("less",function(){
	gulp.src(pathSrc+"less/*.less").pipe(less()).pipe(gulp.dest(pathDest+"css/"));
})

//监听事件，当less文件发生改变后执行函数
gulp.task("watchless",function(){
	gulp.watch(pathSrc+"less/*.less",["less"]);//注意执行函数为数组形式
})

//发布
gulp.task("dest",function(){
	gulp.src([pathSrc+"*/*.*","!"+pathSrc+"less/*.less"]).pipe(gulp.dest(pathDest));//将生产路径下的文件，除了less文件，都发布到发布路径"dest/"下
})

//压缩js文件
gulp.task("uglify",function(){
	gulp.src(pathDest+"js/*.js").pipe(uglify()).pipe(rename(function(filename){
		if(filename.basename.indexOf(".min")==-1){
			filename.basename+=".min";
			console.log(filename.basename,11111111111)
		}
	})).pipe(gulp.dest(pathDest+"js/"));//将发布路径"dest/js/*.js"中的js文件进行压缩，且压缩后的文件名后缀要加.min，但不包括js.min文件，然后再将修改过文件名的文件发布到对应目录下。
})

//压缩css文件
gulp.task("mincss",function(){
	gulp.src(pathDest+"css/**").pipe(mincss()).pipe(rename(function(filename){
		if(filename.basename.indexOf(".min")==-1){
			filename.basename+=".min";
		}
	})).pipe(gulp.dest(pathDest+"css/"));
})
