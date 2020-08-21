input = 15;
let list=[];

for (let i = 0; i <= input; i ++) {
  list.push(i);
}

let index= list.indexOf(3)
if (index !== -1) {
list[index] = "BOO";
}