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

		const myData = yield helper.readJson('data/obor.json');
		const myTemplate = 'index.html';

		const renderResult = yield helper.render(myTemplate,myData);/*这里的myTemplate得用继承的demo.html而不能用被继承的index.html，待研究？？？*/
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
			precision:10
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


		gulp.watch(['views/**/**/*.html','data/*.json'],gulp.parallel('html'));
		gulp.watch(['client/styles/*.scss'],gulp.parallel('styles'));
	}

));

gulp.task('smoosh',() => {
	return gulp.src('.tmp/obor.html')
		.pipe($.smoosher({
			ignoreFilesNotFound:true
		}))
		.pipe(gulp.dest('dist'));
});
gulp.task('optimize',() => {//不知为何这个任务没法用
	return gulp.src('dist/obor.html')
		//.pipe($.useref())
		//.pipe($.if('*.js',$.uglify()))
		//.pipe($.if('*.css',$.minify()))
		.pipe($.htmlmin({
			collapseWhitespace:true,
			removeComments:true,
			removeAttributeQuotes:true,
			minifyJS:true,
			minifyCSS:true
		}))
		.pipe(gulp.dest('result'));
});
gulp.task('build',gulp.series(
	gulp.parallel('html','styles','webpack'),
	'smoosh'
));