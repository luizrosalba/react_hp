const Palavras= require('./strings.js');
//import  Palavras  from './strings.js'
const assert = require('assert').strict;


describe("Teste de Unidade", function() {
    it("String não pode ser nula", function() {
        let pal = new Palavras("1 2");
        assert.notStrictEqual(pal.length, "0");
    });

});

describe("Teste de Unidade", function() {
    it("Deve retornar a string", function() {
        let pal = new Palavras("1 2");
        assert.deepStrictEqual(pal.palavra, ("1 2"));
    });

});


describe("Teste de Unidade", function() {
    it("Deve retornar a string sem multiplos espacos", function() {
        const instancia = new Palavras('luiz     luiz');
        let temp = instancia.trocaMultiplosEspacosPorUmSo()
        assert.deepStrictEqual(temp, 'luiz luiz');
    });
});


describe("Teste de Unidade", function() {
    it("Deve retornar a string como um vetor", function() {
        const instancia = new Palavras('1 1');
        let temp = instancia.trocaEspacoEmVetor();
        assert.deepStrictEqual(temp, ['1', '1']);
    });
});


describe("Teste de Unidade", function() {
    it("Deve retornar a string trocando linhas por espacos", function() {
        const instancia = new Palavras('luiz\nluiz');
        let temp = instancia.trocaLinhaPorEspaco()
        assert.deepStrictEqual(temp, 'luiz luiz');
    });
});


describe("Teste de Unidade", function() {
    it("Deve retornar um vetor formatado a partir de um vetor valido  de string", function() {
        const instancia = new Palavras();
        let temp = instancia.converteVetorEmFormatado(["1","1","2","2"])

        let obj = {x: "1" , y:"1"};
        let obj2 = {x: "2" , y:"2"};
        let obj3 = []; 
        obj3.push(obj);
        obj3.push(obj2);
        assert.deepStrictEqual(temp,obj3);
    });
});


describe("Teste de Unidade", function() {
    it("Deve retornar um vetor formatado até aúltima posição possível partir de um vetor invalido de string", function() {
        const instancia = new Palavras();
        let temp = instancia.converteVetorEmFormatado(["1","1","2","2","3"])

        let obj = {x: "1" , y:"1"};
        let obj2 = {x: "2" , y:"2"};
        let obj3 = []; 

        obj3.push(obj);
        obj3.push(obj2);
        assert.deepStrictEqual(temp,obj3);
    });
});


describe("Teste de Unidade", function() {
    it("Deve retornar um vetor formatado a partir de uma string valida de string", function() {
        let instancia = new Palavras("1 1 2 2 3 3");
        let temp = instancia.stringToFormatedData();

        let obj = {x: "1" , y:"1"};
        let obj2 = {x: "2" , y:"2"};
        let obj3 = {x: "3" , y:"3"};
        let obj4 = []; 
        
        obj4.push(obj);
        obj4.push(obj2);
        obj4.push(obj3);
        assert.deepStrictEqual(temp,obj4);
    });
});


describe("Teste de Unidade", function() {
    it("Deve retornar um vetor formatado até a ultima posicao valdia a partir de uma string invalida de string", function() {
        let instancia = new Palavras("1 1 2 2 3 3 4");
        let temp = instancia.stringToFormatedData();

        let obj = {x: "1" , y:"1"};
        let obj2 = {x: "2" , y:"2"};
        let obj3 = {x: "3" , y:"3"};
        let obj4 = []; 
        
        obj4.push(obj);
        obj4.push(obj2);
        obj4.push(obj3);
        assert.deepStrictEqual(temp,obj4);
    });
});


