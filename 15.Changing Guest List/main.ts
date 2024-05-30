/*Changing Guest List You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.*/

let Guest_List: string [] = [ "Ali", "Taimoor", "Qaiser"];

for (let i=0; i < Guest_List.length; i++ ){
    console.log(`Dear ${Guest_List[i]} : \n You are invited to dinner \n`);
    
};
console.log(`Unfortunately ${Guest_List[1]}; can not come to dinner`);

Guest_List[1] = "Azam";

console.log( `\n"New List Of Invitation"\n`);

for ( let j=0; j < Guest_List.length; j++){
    console.log(`Dear ${Guest_List[j]} \n You are invited to dinner \n`);
    
}
