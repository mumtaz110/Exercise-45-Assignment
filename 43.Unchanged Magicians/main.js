"use strict";
/* Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original names
 and one array with the Great added to each magician’s name. */
let magician = ["Soren Sorenson Adams", "Erich Weiss", "John G. Boyce"];
function CopyArr(arr) {
    return [...arr];
}
function make_great(magicianArr) {
    for (let i = 0; i < magicianArr.length; i++) {
        magicianArr[i] = "The Great " + magicianArr[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(Element => {
        console.log(Element);
    });
}
const copyMagicianArray = CopyArr(magician);
make_great(magician);
console.log(`\nOriginal Array\n`);
show_magicians(magician);
console.log(`\nModified Copy of Array\n`);
show_magicians(copyMagicianArray);
