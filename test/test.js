const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const Numbers = require('../codes/numbers');
//try to push directly in github main repo as non-collaborator
describe("Even Numbers Model", function(){
    
    it("Return the expected return value on success", function(){
        let num = new Numbers();
        let param = "1,2,3,4,5,6";
        let result = num.getEven(param);

        expect(result).to.deep.equal(["2","4","6"]);
    });

    it("Return empty if the string passed is empty", function(){
        let num = new Numbers();
        let param = "";
        let result = num.getEven(param);

        expect(result).to.be.empty;
    });
    
    it("Return empty if string passed has no even numbers", function(){
        let num = new Numbers();
        let param = "1,3,5";
        let result = num.getEven(param);

        expect(result).to.be.empty;
    });
});

describe("Odd Numbers Model", function(){
    it("Return the expected return value on success", function(){
        let num = new Numbers();
        let param = "1,2,3,4,5,6";
        let result = num.getOdd(param);

        expect(result).to.deep.equal(["1","3","5"]);
    });
    it("Return empty if the string passed is empty", function(){
        let num = new Numbers();
        let param = "";
        let result = num.getOdd(param);

        expect(result).to.be.empty;
    });
});
