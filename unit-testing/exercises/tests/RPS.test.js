const whoWon = require("../RPS.js");

describe("whoWon", function(){

    test ("Should return TIE when players choose the same answer", function(){
        let result = whoWon.whoWon('rock', 'rock');
        expect(result).toEqual("TIE!")
    });

    test ("Should return 'player 2 wins' when player 1 is 'rock' and 2 is 'paper ", function(){
        let result = whoWon.whoWon('rock', 'paper');
        expect(result).toEqual("Player 2 wins!")        
    });

    test ("Should return 'player 2 wins' when player 1 is 'paper' and 2 is 'scissors ", function(){
        let result = whoWon.whoWon('paper', 'scissors');
        expect(result).toEqual("Player 2 wins!")        
    });


    test ("Should return 'player 2 wins' when player 1 is 'scissors' and 2 is 'rock ", function(){
        let result = whoWon.whoWon('scissors', 'rock');
        expect(result).toEqual("Player 2 wins!")        
    });


});