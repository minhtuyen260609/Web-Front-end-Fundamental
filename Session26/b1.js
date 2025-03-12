let arr = []
check = true
for (let i = 0; i < 10; i++) {
    let n = +prompt("Nhập các phần tử trong mảng")
    arr.push(n)
}
for (let i = 0; i < 10; i++) {
    if (isNaN(arr[i])) {
        check = false
        break
    }
}
if (check == false) {
    console.log("Dữ liệu không hợp lệ")
} else {
    let a = arr.filter(function(element, index){
        return element >= 10
    })
    console.log(a)
}