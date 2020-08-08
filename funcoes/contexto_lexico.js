const localizacao =  'Global'


function mostrarLocalizacao(){
  console.log(localizacao) // imprime 'Global' porque nao tem nada declarado no escopo da função, então ele pega no nivel acima
}


function mostrarLocalizacao_2(){
  const localizacao = 'Localizada dentro da funcao'
  mostrarLocalizacao()
}

mostrarLocalizacao_2()
/* O retorno dessa função será 'Global', porque o escopo onde mostrarLocalizacao foi criado, a const localizacao chamava
global, e ela fica com essa memoria do local onde foi declarada
*/
