// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test ("organization should be nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });
  test ("executive director should be Jeff", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test ("percentageCoolEmployees should be 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test ("ProgramsOffered should be an array containing 3 items", function(){
    expect(launchcode.programsOffered).toContain("Web Development") 
    expect(launchcode.programsOffered).toContain("Data Analysis")
    expect(launchcode.programsOffered).toContain("Liftoff")
    expect(launchcode.programsOffered.length).toEqual(3)
  });
  test ("When Launchcode is passed a number that is only divisible by 2, returns 'Launch!'", function(){
    expect(launchcode.launchCode(2)).toBe("Launch");
  });
  test ("When Launchcode is passed a number that is only divisible by 3, returns 'Code!'", function(){
    expect(launchcode.launchCode(3)).toBe("Code!");
  });
  test ("When Launchcode is passed a number that is only divisible by 5, returns 'Rocks!'", function(){
    expect(launchcode.launchCode(5)).toBe("Rocks!");
  });
  test ("When Launchcode is passed a number that is  divisible by 2 & 3, returns 'LaunchCode!'", function(){
    expect(launchcode.launchCode(6)).toBe("LaunchCode!");
  });
  test ("When Launchcode is passed a number that is  divisible by 3 & 5, returns 'Code Rocks!'", function(){
    expect(launchcode.launchCode(15)).toBe("Code Rocks!");
  });
  test ("When Launchcode is passed a number that is  divisible by 2 & 5, returns 'Code Rocks!'", function(){
    expect(launchcode.launchCode(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });
  test ("When Launchcode is passed a number that is  divisible by 2, 3 & 5, returns 'Code Rocks!'", function(){
    expect(launchcode.launchCode(30)).toBe("LaunchCode Rocks!");
  });
  test ("When Launchcode is passed a number that is not divisible by 2, 3 & 5, returns 'Code Rocks!'", function(){
    expect(launchcode.launchCode(17)).toBe("Rutabagas! That doesn't work.");
  });

  
});