"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name. Call show_magicians()
 to see that the list has actually been modified. */
let magician = ["Soren Sorenson Adams", "Erich Weiss", "John G. Boyce"];
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
make_great(magician);
show_magicians(magician);
