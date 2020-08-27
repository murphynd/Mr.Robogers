function makeArray(userNumberparam) {
  let array = [];
  for (let i = 0; i <= userNumberparam; i++) {
    array.push(" " + i);
  }
  return array;
}
function blopModifier(list) {
  let result = [];
  list.forEach(function (element) {
    if (element.includes(3)) {
      result.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      result.push("Boop!");
    } else if (element.includes(1)) {
      result.push("Beep!");
    } else {
      result.push(element);
    }
  });
  return result;
}

$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    let userNumber = $("#inputnum").val();
    let newArray = makeArray(userNumber);
    let newResult = blopModifier(newArray);
    $("#blop").val(newResult);
  });
});
