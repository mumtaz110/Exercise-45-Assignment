/* You just found out that your new dinner table won’t arrive
in time for the dinner, and you have space for only two guests. */
var Guest_list = ["Ali", "Maqsood", "Aftab", "Mumtaz", "Muzammil"];
console.log("Unfortunately!, The new dinner table won't arrive so we can invite only two guests;");
while (Guest_list.length > 2) {
    var removeGuest = Guest_list.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry ".concat(removeGuest, " we cant invite you,"));
    }
}
;
Guest_list.forEach(function (guest) {
    console.log("\nDear ".concat(guest, " \n you are still invited for the dinner\n"));
});
Guest_list.splice(0, Guest_list.length);
console.log("Updated list of guest: , ".concat(Guest_list, "[]"));
