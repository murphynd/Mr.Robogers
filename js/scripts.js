
function makearray(input) {
  this.array = []
  for (let i = 0; i <= input; i ++)  {
    this.array.push(i);
  }
}
function blopModifierlist() {
  let result = []
  for(let i = 0; i < this.array.length; i++) {
    if (i.toString().includes('3')) {
    result.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')){
    result.push = ("Boop!");
    } else if (i.toString().includes('1')){
    result.push = ("Beep!");
    } else 
      result.push(i);
    }
  return result;
}

$(document).ready(function() {
  $(".btn").click(function() {
    $(".result").show();
    $(".jumbotron").hide();
  });
  
  $("form#input").submit(function(event) {
    event.preventDefault();
    let userNumber = makearray(parseInt($("#inputnum").val()));
    console.log(userNumber);
    blopModifierlist(userNumber);
    console.log(userNumber);
  });
});
