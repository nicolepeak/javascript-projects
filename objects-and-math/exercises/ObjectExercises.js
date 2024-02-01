let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5, 
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let weirdAnimal= {
   name: "Almina",
   species: "Tartigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["AstronautID"]= 1
salamander["AstronautID"]= 2
superChimpTwo["AstronautID"]= 3
doggo["AstronautID"]= 4
weirdAnimal["AstronautID"]= 5

// Create an array to hold the animal objects.
let animalsArray = [superChimpOne, salamander, superChimpTwo, doggo, weirdAnimal];

// Print out the relevant information about each animal.
// function crewReports (animal) {
//    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is: ${animal.AstronautID}. `
// }

//console.log(crewReports(superChimpOne));




// Start an animal race!
function fitnessTest (animals) {
   let turnsToReach20= [];

for (let i=0; i<animals.length; i++) {
   let numSteps = 0
   let turns = 0 

       while (numSteps <20) {
         numSteps= numSteps + animals[i].move();
         turns++
      }

   turnsToReach20.push(`${animals[i].name} took ${turns} turns to take 20 steps.`);
   }
   return turnsToReach20
}
console.log(fitnessTest(animalsArray));


