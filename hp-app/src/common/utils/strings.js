class Palavras {
    constructor(palavra) {
        this._palavra = palavra;
    }
    
    set palavra(novaPalavra) { /// validacao
       this._palavra = novaPalavra;
    }

    // get e set são bons para validar 
    get palavra() {
        return (this._palavra);
    }
    
    converteVetorEmFormatado(vetorEntrada) {
        let structuredData ;
        let vecStructuredData =[];
        let tam = vetorEntrada.length; 
        if (tam%2===0)
        {
            for (let i=0 ; i < tam ;i=i+2)
            {
                structuredData = {x: vetorEntrada[i]  , y: vetorEntrada[i+1]}
                vecStructuredData.push(structuredData); 
            }
            return (vecStructuredData);
        }else 
        {
            for (let i=0 ; i < (tam-1);i=i+2)
            {
                structuredData = {x: vetorEntrada[i]  , y: vetorEntrada[i+1]}
                vecStructuredData.push(structuredData); 
            }
            return (vecStructuredData);
        }
    }
    

    trocaLinhaPorEspaco() {
        return(this._palavra.replace(/\n/g, " "));
    }

    trocaMultiplosEspacosPorUmSo() {
        return (this._palavra.replace(/\s\s+/g, " "));
    }

    trocaEspacoEmVetor() {
        return (this._palavra.split(" "));
    }

    stringToFormatedData(){
         /// formata entrada
        this.trocaMultiplosEspacosPorUmSo();
        let temp = this.trocaEspacoEmVetor();
        return(this.converteVetorEmFormatado(temp));
    }
    
}

module.exports = Palavras;

