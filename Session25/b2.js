let n1 = +prompt("Nhập số thứ nhất")
let n2 = +prompt("Nhập số thứ hai")
let sum = (a, b) => a + b
if (Number.isInteger(n1) || Number.isInteger(n2)) {
    console.log("Dữ liêu không hợp lệ")
} else {
    console.log(sum(n1, n2))
}