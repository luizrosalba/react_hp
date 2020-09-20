export default class Palavras {
    constructor(entrada) {
        this._palavra = entrada;
    }
 // get e set são bons para validar 
    get pegaPalavra() {
        return this._palavra;
    }
    
    set definePalavra(novaPalavra) { /// validacao
       this._palavra = novaPalavra;
    }

    converteEspacoEmVetor() {
        let temp = this._palavra.split(" ");
        //console.log(temp);
        return (temp);
    }
    
    trocaLinhaPorEspaco() {
        let temp = this._palavra.replace(/\n/g," ");
        return (temp);
    }
    

    formataTexto(){
        
    }
    
}




/*

if (entrada.length < 4) {
          alert("Name is too short.");
          return;
        }

*/