const Strings = require('./strings');
const assert = require('assert').strict;


describe("Teste de Unidade", function() {
    it("String não pode ser nula", function() {
        let string = new Strings("1 2");
        assert.notStrictEqual(string.length, "0");
    });

});

describe("Teste de Unidade", function() {
    it("Deve retornar a string sem espaco", function() {
        let string = new Strings("1,2 2,2");
        assert.deepStrictEqual(string.retornaSemEspaco(), ["1,2","2,2"]);
    });

});

describe("Teste de Unidade", function() {
    it("Deve retornar a string sem espaco", function() {
        let string = new Strings("1.3 2.4");
        assert.deepStrictEqual(string.retornaSemEspaco(), ["1.3","2.4"]);
    });

});

describe("Teste de Unidade", function() {
    it("Deve retornar a string sem espaco", function() {
        let string = new Strings("-1.0 -2.3");
        assert.deepStrictEqual(string.retornaSemEspaco(), ["-1.0","-2.3"]);
    });

});


describe("Teste de Unidade", function() {
    it("Deve retornar a string quebrada nas linhas com enter final", function() {
        let string = new Strings("1 1\n2 2\n3 3\n");
        assert.deepStrictEqual(string.quebraLinha(), ["1 1","2 2","3 3",""]);
    });

});

describe("Teste de Unidade", function() {
    it("Deve retornar a string quebrada nas linhas sem enter final", function() {
        let string = new Strings("1 1\n2 2\n3 3");
        assert.deepStrictEqual(string.quebraLinha(), ["1 1","2 2","3 3"]);
    });

});


