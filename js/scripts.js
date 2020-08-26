$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    let userNumber = $("#inputnum").val();
    let result = [];
    let array = [];

    for (let i = 0; i <= userNumber; i++) {
      array.push(" " + i);
    }

    array.forEach(function (element) {
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
    $("#blop").val(result);
  });
});
