


  $(document).ready(function() {
    $(".btn").click(function() {
      $(".result").show();
      $(".jumbotron").hide();
    });
  event.preventDefault();
});
 

//Function I was working on. 
//Currently it will make a list out of the input you give it and 
//with blopModifier you can change 1, 2, or 3 to the phrase in the array 
//I could not figure out how to make this one loop 


let input = 15
let list=[];
for (let i = 0; i <= input; i ++) {
  list.push(i);
}
function blopModifier(list, find){
  let i = list.indexOf(find)
  if (i == 3) {
  list[i] = "Won't you be my neighbor?";
   } else if (i == 2) {
    list[i] = "Boop!";
   } else if ( i == 1){
    list[i] = "Beep!";
   } else return find;
  }

  
  