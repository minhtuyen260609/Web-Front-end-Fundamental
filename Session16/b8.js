let a = +prompt("Mời nhập số thứ nhất")
let b = +prompt("Mời nhập số thứ hai")
let c = +prompt("Mời nhập số thứ ba")
let max
if (a > b && a > c) {
    max = a;
} else if (b > a && b > c) {
    max = b;
} else {
    max = c;
}
alert("Số lớn nhất là:" + max)