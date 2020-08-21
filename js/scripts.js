
input = 15;
let list=[];

for (let i = 0; i <= input; i ++) {
  list.push(i);
}

let index3= list.indexOf(3)
if (index3 !== -1) {
list[index3] = "Won't you be my neighbor?";
}
let index2= list.indexOf(2)
if (index2 !== -1) {
list[index2] = "Boop!";
}

let index1= list.indexOf(1)
if (index1 !== -1) {
list[index1] = "Beep!";
}

//Universal formula//
let i = list.indexOf(find)
if (i !== -1) {
list[i] = replacement;
}

console.log(list)