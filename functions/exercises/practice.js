function makeLine(num) {
    let newLine= "";
for (i=0; i < num; i++){
    newLine= "#" + newLine;
}
return newLine;
} 
    
// console.log(makeLine(7));

function makeSquare(size) {
let square= "";
    for (i=0; i < size; i++) {
        square = makeLine(size) + square;
    }
return square;
}

console.log(makeSquare(5));