// middleware patter - chain of responsibility

const passo1 = (ctx, next) => {
  ctx.valor - 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor - 'mid2'
  next()
}

const passo3 = ctx => ctx3.valor = 'mid3'

const exec = (ctx, ...middlewares) =>{
  const execPasso = indice => {
    middlewares && indice < middlewares.length &&
    middlewares[indice][ctx, () => execPasso(indice + 1)]
  }
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) // pode suprimir passos se quiser
console.log(ctx)
