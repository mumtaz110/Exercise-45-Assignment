/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
  If you want to try more comparisons, write more tests. Have at least one True and one False 
  result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
  and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


let str1 = "Mumtaz";
let str2 = "Ali";
let num1 = 5;
let num2 = 10
let arr = [1,2,3,4,5,6];


console.log("Test 1:");
console.log(str1 === "Mumtaz");
console.log(str1 === str2);

console.log("\nTest 2:");
console.log(str1.toLowerCase() == "affan");
console.log(str2.toLowerCase() !== "Ali");


console.log("\nTest 3:");
console.log(num1 === 5);
console.log(num2 === 5);


console.log("\nTest 4:");
console.log((num1 < 10 ) && (num2 > 5));
console.log((num2 <= num1) || (num2 > 14));

console.log("\nTest 5:");
console.log(arr.includes(5));
console.log(arr.includes(8));












