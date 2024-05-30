/* For example, you could make a list of mountains, rivers, countries, cities,
 languages, or anything else you’d like.
 Write a program that creates a list containing these items. */
var mountainsList = ["Monut everest", "K2", "Broad Peak"];
console.log("\nList of mountains:");
//  mountainsList.forEach(Mountain =>{
//     console.log(Mountain);
//  })
for (var i = 0; i < mountainsList.length; i++) {
    console.log(mountainsList[i]);
}
