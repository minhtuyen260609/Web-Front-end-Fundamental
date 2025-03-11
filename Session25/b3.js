let arr = []
let check = 0
function mang(a) {
    if (a % 2 == 0) {
        console.log(a)
        check +=1
    }
}
let n = +prompt("Nhập số phần tử của mảng")
for (let i = 0; i < n; i++) {
    let input = +prompt("Nhập các phần tử")
    arr.push(input)
}
for (let i = 0; i < n; i++) {
    if (isNaN(arr[i])) {
        console.log("dữ liệu không hợp lệ")
    }
}
for (let i = 0; i < n; i++) {
    mang(arr[i])
}
if (check == 0) {
    console.log("mảng không có số chẵn")
}