/* More Guests: You just found a bigger dinner table, so now more space is available.
   Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your
  program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • 
  Use append() to add one new guest to the end of your list. • 
  Print a new set of invitation messages, one for each person in your list. */


  let Guest_List: string [] = [ "Ali", "Taimoor", "Qaiser"];

  console.log(`\nNew Invitation Guest List\n`);

  for (let j=0; j < Guest_List.length; j++){
    console.log(`Dear ${Guest_List[j]} \n You are invited in dinner`);
    
  }
  console.log("\nGood News, we've found a bigger dinner table,so more space is available,so our new guests are \n");
  
  Guest_List.unshift("Kashif");
  Guest_List.splice(2,0 ,"Zameer");
  Guest_List.push("Maqsood")

  for (let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]} \nYou are invited in dinner\n`);
    
  }
  