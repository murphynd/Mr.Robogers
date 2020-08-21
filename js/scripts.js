input = 15;
let list=[];

for (let i = 0; i <= input; i ++) {
  list.push(i);
}

let index3= list.indexOf(3)
if (index !== -1) {
list[index] = "Won't you be my neighbor?";
}
console.log(list)

let index2= list.indexOf(2)
if (index !== -1) {
list[index] = "Boop!";
}

let index1= list.indexOf(1)
if (index !== -1) {
list[index] = "Beep!";
}