function makeLine(num) {
    let newLine = "";
    for (let i = 0; i < num; i++) {
        newLine = "#" + newLine;
    }
    return newLine;
}

function makeSquare(size) {
    let square = "";
    for (i = 0; i < size; i++) {
        square = (+ makeLine(size)) + "\n" + square;
    }
    return square;
}

//console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = "";
    for (i=0; i < height; i++) {
        rectangle = (makeLine(width) + "\n" + rectangle);
    }
    return rectangle.slice(0,-1);
}
// console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = "";
    for (i=0; i < height; i++) {
    stairs = stairs + ((makeLine(i+1)) + "\n") ;
    }
    return stairs.slice(0,-1)
}
//console.log(makeDownwardStairs(5));
function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";
    let finalSpaces = "";
    let finalChars = "";

    for (i=0; i < numSpaces; i++){
        finalSpaces= " " + finalSpaces
    }
    for (i=0; i < numChars; i++){
         finalChars= "#" + finalChars
    }
    spaceLine= finalSpaces + finalChars + finalSpaces;

    return spaceLine
}
//console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {

    
}