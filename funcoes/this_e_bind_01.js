const mago = {
  magia: 'Exevo gran mas vis',
  jogar_magia(){ // é possível criar função desta forma desde ecma 2015
    console.log(this.magia)
  }
}

mago.jogar_magia()
const jogar_magia = mago.jogar_magia
jogar_magia() // conflito de paradigma


const magoMagia =  mago.jogar_magia.bind(mago) // informar o contexto para o bind, desta forma ele consegue saber a quem esse this se refere
magoMagia()
