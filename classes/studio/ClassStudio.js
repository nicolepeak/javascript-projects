//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    let avg = sum / this.scores.length;
    return avg.toFixed(1);
  }
  status() {
        if (this.average() > 89){
            return 'Accepted'
        } else if (this.average() > 79){
            return 'Reserve'
        } else if ( this.average() > 69) {
            return 'Probationary'
        } else  {
            return 'Rejected'
        }
  }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let aligator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// console.log(bear);
// console.log(dog);
// console.log(aligator);

console.log(`${bear.name} earned an average of ${bear.average()}% and has a status of ${bear.status()}`);
console.log(`${dog.name} earned an average of ${dog.average()}% and has a status of ${dog.status()}`);
console.log(`${aligator.name} earned an average of ${aligator.average()}% and has a status of ${aligator.status()}`);

function boostAligator (){
    let tests = 0
    if (aligator.average() < 80) {
        aligator.scores.push(85)
        tests = tests = 1
    
} return ` new score = ${aligator.scores}. It took ${tests} tries.`
}

console.log (boostAligator())