const path = require('path');
const url = require('url');
const fs = require('fs');

const co = require('co');
const helper = require('./helper');
const isThere = require('is-there');
const mkdirp = require('mkdirp');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');

const $ = require('gulp-load-plugins')();

const webpack = require('webpack');
const webpackConfig = require('./webpackConfig.js');
const del = require('del');
//const htmlmin = require('gulp-html-minifier');
const echarts = require('echarts');

gulp.task('prod',function(){
	process.env.NODE_ENV = 'prod';
});

gulp.task('dev',function(){
	process.env.NODE_ENV = 'dev';
});


gulp.task('html',() => {
	return co(function *(){
		const destDir = '.tmp';
		if(!isThere(destDir)){
			mkdirp(destDir,(err) => {
				if(err) {
					console.log(err);
				}
			});
		}		

		//const myData = yield helper.readJson('data/obor.json');
		const myData = require('./data/obor.js');
		const myTemplate = 'index.html';

		const renderResult = yield helper.render(myTemplate,myData);
		console.log(renderResult);
		const dest = destDir + '/obor.html';
		fs.writeFile(dest,renderResult,'utf8');/*疑问：这行之前为什么不能用yield???*/
	}).then(function(){
		console.log("build html successfully!");
		browserSync.reload('*.html');
	},function(err){
		console.error(err.stack);
	});
			
});
/*
gulp.task('paincharts',() => {
	const line1Option = require('./data/echartOptions/line1Option.js');
	const line2Option = require('./data/echartOptions/line2Option.js');
	const bar2Option = require('./data/echartOptions/bar2Option.js');
	const map1Option = require('./data/echartOptions/map1Option.js');

	const optionArr = new Array();
	optionArr.push(require('./data/echartOptions/line_inline1Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline2Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline3Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline4Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline5Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline6Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline7Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline8Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline9Option.js')); 
	optionArr.push(require('./data/echartOptions/line_inline10Option.js')); 

	return gulp.src(['.tmp/obor.html'])
		.pipe($.cheerio(function($,file,done){
			console.log($('#line1')[0]);
			(echarts.init($('#line1')[0])).setOption(line1Option);
			/*
			(echarts.init($('#line2'))).setOption(line2Option);
			(echarts.init($('#bar2'))).setOption(bar2Option);

			$.get('./mapSource/world.json', function (worldJson) {//这个jQuery的get方法只能针对obor.html目录设置路径
			    echarts.registerMap('world', worldJson);
			    (echarts.init($('#map1'))).setOption(map1Option);
			});
			
			for(let i=1,n=10;i<=n;i++){
				const chart = echarts.init($(`#inlineLine${i}`));
				const option = optionArr[i-1];
				chart.setOption(option);
			}
			done();
		}))
		.pipe(gulp.dest('.tmp/'));
};
*/
gulp.task('styles',function(){
	const DEST = '.tmp/styles';

	return gulp.src('client/styles/*.scss')
		.pipe($.changed(DEST))
		.pipe($.plumber())
		.pipe($.sourcemaps.init({
			loadMaps:true
		}))
		.pipe($.sass({
			outputStyle:'expanded',
			precision:10,
			includePaths:['bower_components']
		}).on('error',$.sass.logError))
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(DEST))
		.pipe(browserSync.stream({
			once:true
		}));
});


gulp.task('webpack',(done) => {
	webpack(webpackConfig,function(err,stats){
		if(err){
			throw new $.util.PluginErr('webpack',err);
		}
		$.util.log('[webpack]',stats.toString({
			colors:$.util.colors.supportsColor,
			chunks:false,
			hash:false,
			version:false
		}));
		browserSync.reload({
			once:true
		});
		done();
	});
});

gulp.task('serve',gulp.parallel(
	'html','styles','webpack', () => {
		browserSync.init({
			server:{
				baseDir:['.tmp'],
				index:'obor.html',
				routes:{
			 		'/mapSource':'mapSource'
			 	}
				//directory:true
			}
		});
		gulp.watch(['views/**/**/*.html','data/**/*.js'],gulp.parallel('html'));
		gulp.watch(['client/styles/*.scss'],gulp.parallel('styles'));
	}

));

gulp.task('smoosh',function(){
	
	const destDir = 'dist';
	if(!isThere(destDir)){
		mkdirp(destDir,(err) => {
			if(err) {
				console.log(err);
			}
		});
	}
	return gulp.src('.tmp/obor.html')
		.pipe($.smoosher({
			ignoreFilesNotFound:true
		}))
		.pipe(gulp.dest(destDir));
});

gulp.task('minify',function(){//不知为何这个任务有时候没法用	
	const destDir = 'deploy';
	if(!isThere(destDir)){
		mkdirp(destDir,(err) => {
			if(err) {
				console.log(err);
			}
		});
	}	
	return gulp.src('dist/obor.html')
		//.pipe($.useref())
		//.pipe($.if('*.js',$.uglify()))
		//.pipe($.if('*.css',$.minify()))
		.pipe($.htmlmin({
			collapseWhitespace:true,
			removeComments:true,
			//removeAttributeQuotes:false,
			minifyJS:true,
			minifyCSS:true,
			//ignoreCustomFragments:[ /^(<object)[.\n\r]*(\/object>)$/m ]
			//ignoreCustomFragments:[ /^(<param).*(>)$/g ]
			//ignoreCustomFragments:[ /^(http).*(>)$/ ]
			//maxLineLength:10000,
			//html5:false
		}))
		.pipe($.size({
			gzip:true,
			showFiles:true,
			showTotal:true
		}))
		.pipe(gulp.dest(destDir));//此处这个destDir必须要是已经存在的
});



///疑问：为什么smoosh和minify执行完会挂在那里呢

gulp.task('delete',(done)=>{
	del(['.tmp/**','dist/**','result/**']).then(() =>{
		console.log('Files had been deleted');
	});
	done();
});
gulp.task('build',gulp.series(
	'delete',
	gulp.parallel('html','styles','webpack'),
	'smoosh',
	'minify'
));