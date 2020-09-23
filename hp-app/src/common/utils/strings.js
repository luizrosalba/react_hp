// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
class Palavras {
    constructor(palavra) {
        this.palavra = palavra;
    }

    imprimeVetorPalavra(vetor){
        //console.log("tam " + vetor.length)
        for (let i=0 ; i<vetor.length;i++)
            console.log("x=" + vetor[i].x + " y= " +  vetor[i].y);
    }
    
    converteVetorEmFormatado(vetorEntrada) {
        let structuredData ={};
        let vecStructuredData =[];
        let tam = vetorEntrada.length;
        if (tam%2===0)
        {
            for (let i=0 ; i < tam ;i=i+2)
            {
                if (i===0) 
                {
                    structuredData = ["Variavel x"  , "Variavel y"]  
                    vecStructuredData.push(structuredData); 
                }
                structuredData = [vetorEntrada[i]  , parseInt(vetorEntrada[i+1])]  
                vecStructuredData.push(structuredData); 
            }
        }else 
        {
            for (let i=0 ; i < (tam-1) ;i=i+2)
            {
                if (i===0) 
                {
                    structuredData = ["Variavel x"  , "Variavel y"]  
                    vecStructuredData.push(structuredData); 
                }
                structuredData = [vetorEntrada[i]  , parseInt(vetorEntrada[i+1])]  
                vecStructuredData.push(structuredData); 
            }
        }
        return (vecStructuredData);
    }
    
    removeEspacoBrancoInicioeFinal() {
        this.palavra = this.palavra.replace(/^\s+|\s+$/gm,'');        
    }

    trocaLinhaPorEspaco() {
        this.palavra = this.palavra.replace(/\n/g, " ");        
    }

    trocaMultiplosEspacosPorUmSo() {
        this.palavra = this.palavra.replace(/\s\s+/g, " ");        
    }

    trocaEspacoEmVetor() {
        /// remove whitespaces
        this.removeEspacoBrancoInicioeFinal();
        return (this.palavra.split(" "));
    }



    stringToFormatedData(){
         /// formata entrada
        this.trocaMultiplosEspacosPorUmSo();
        let temp2 = this.trocaEspacoEmVetor();
        //console.log(temp2);
        return(this.converteVetorEmFormatado(temp2));
    }
    
    
      
    

}

module.exports = Palavras;

