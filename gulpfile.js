const path = require('path');
const url = require('url');
const fs = require('fs');

const co = require('co');
const helper = require('./helper');
const isThere = require('is-there');
const mkdirp = require('mkdirp');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');

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
		const myTemplate = 'demo.html';

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

