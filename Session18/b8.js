let a = +prompt("Mời nhập cạnh thứ nhất: ");
let b = +prompt("Mời nhập cạnh thứ hai: ");
let c = +prompt("Mời nhập cạnh thứ ba: ");

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
  alert("Cạnh tam giác không hợp lệ.");
}
else if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    alert("Đây là tam giác đều");
  } else if (a === b || a === c || b === c) {
    alert("Đây là tam giác cân");
  } else if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    a * b + c * c === a * a
  ) {
    alert("Đây là tam giác vuông");
  } else {
    alert("Đây là tam giác thường");
  }
} else {
    alert("Ba cạnh không tạo được thành tam giác hợp lệ");
  }