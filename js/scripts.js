input = 15;
let list=[];
let xArray = []
for (let i = 0; i <= input; i ++) {
  list.push(i);
}
console.log(list);
list.forEach(function(i){

if (list.includes(3)){
list.unshift("Won't you be my neighbor?");
}
else if(list.includes(2)){
list.unshift("Boop")
}
else if (list.includes(1)){
list.unshift("beep")
}
});
console.log(xArray)
console.log(list)