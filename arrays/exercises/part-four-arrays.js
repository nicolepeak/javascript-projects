let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.
let newArray= []
newArray= holdCabinet1.concat(holdCabinet2);
console.log(newArray);
//this just adds the second one to the end of the first
let slicedArray= []
holdCabinet1.slice(0,2);
console.log(slicedArray);
//this slices out entries from an array and copies them into a new array
let reversedArray=[];
reversedArray= holdCabinet1.reverse();
console.log(reversedArray);
//reverses everything in the array
let sortedArray1= [];
sortedArray1= holdCabinet1.sort();
console.log(sortedArray1);
//kinda sorts based on acending #s and then alphabetical

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1);
    //no, it needs to be defined into a new array. it doesn't alter the OG
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());
console.log(holdCabinet1);

console.log(holdCabinet2.sort());
console.log(holdCabinet2);

    //yes!! it does alter the OG. interesting. 