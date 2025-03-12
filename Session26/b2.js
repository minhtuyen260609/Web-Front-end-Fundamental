let arr = []
check = true
for (let i = 0; i < 10; i++) {
    let n = +prompt("Nhập các phần tử trong mảng")
    arr.push(n)
}
let a = arr.filter(function (element, index) {
    return element.length > 5
})
console.log(a)
