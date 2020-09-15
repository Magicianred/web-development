const gulp = require('gulp')

/* importam de dentro do gulp o series
- const {series} = require('gulp')
- const series = gulp.series
 Para realizar as execuções em paralelo:
 - const {series, parallel} = require('gulp')
*/

const {series, parallel} = require("gulp")

// o próprio gulp vai passar a funcao callback para o parâmetro.

const inicio = func_callback => {
	console.log('Tarefa inicio')
	return func_callback()
}


const meio = func_callback => {
	console.log('Tarefa meio')
	return func_callback()
}

function copiar(func_callback){
	// passa o caminho relativo
	gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
	.pipe(gulp.dest('pastaB'))
	/*
	pipelines de processos
	.pipe(imagePelaMetade())
	.pipe(adicionaFiltro())
	.pipe(transformacaoA())
	.pipe(transformacaoB())
	.pipe(transformacaoC())
	*/
	return func_callback()
}

const fim = (callback_tarefa) => {
	console.log('Tarefa fim')
	return callback_tarefa()
}

module.exports.default = series(parallel(inicio, meio), copiar, fim)
