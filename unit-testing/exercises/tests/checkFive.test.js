const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Should return  input number is less than 5, when  num < 5", function(){
      let output = checkFive.checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

   test("Should return input number is greater than 5, when num > 5", function(){
    let output = checkFive.checkFive(6);
    expect(output).toEqual("6 is greater than 5.");
   });

   test ("Should return input number is equal to 5, when num === 5", function(){
    let output = checkFive.checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
    });
});