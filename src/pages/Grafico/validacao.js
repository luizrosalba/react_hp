import  Palavras  from '../../common/utils/strings.js'

function ValidaEntrada (ent){
    if ( ent.length>1)
    {
      //console.log(ent);
      return true; 
    }
    else 
      return false; 
  }
  export default function formataValidaTexto(texto){
    if (texto.length>0)
    {
      /// formata entrada
      let pal = new Palavras(texto);
      let formatada= pal.stringToFormatedData();       
      if (ValidaEntrada(formatada))
      {
        //console.log(pal.imprimeVetorPalavra(formatada)); 
        //console.log(formatada);
        return {valida:(true), dados:formatada};
      }
    }
    return {valida:(false)};
  }