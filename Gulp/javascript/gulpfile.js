const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformaParaJS(callback){
	/*
	seleciona todos os arquivos .js
	os arquivos de comentários serão desconsiderados (comments:false)
	a versão do js será a última(presets:['env'])
	o babel com base nesses atributos convertera o código para a versão mais
	compativel possível com os browsers.
	a pipe de uglify vai minificar o código.
	*/
	return gulp.src('src/**/*.js')
	.pipe(babel({
		comments: false,
		presets: ['env'],

	}))
	.pipe(uglify())
	// pode por o nome que quiser no arquivo gerado desta etapa
	.pipe(concat('codigo.min.js'))
	// arquivo vai para a pasta build
	.pipe(gulp.dest('build'))

}

exports.default = series(transformaParaJS)
