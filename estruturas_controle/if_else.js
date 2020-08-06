function pularPiscina(altura){
  if (altura > 1)
  {
    console.log("Pulando piscina de ", altura, " metros")
  }
  else
  {
    console.log("Altura inadequada para pulo")
  }
}


pularPiscina(5)
pularPiscina(0.2)
pularPiscina('anilina') // cuidado, pois vai ser entendido como falso e retornar resultado errado.
