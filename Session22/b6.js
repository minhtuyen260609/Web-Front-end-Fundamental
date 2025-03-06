let arr = [1,3,6,9,7,6,6,8,6,3]
let n = prompt("Nhập số nguyên bất kì:")
let found = 0
for (let i = 0; i < 10; i++) {
    if (n == arr[i]) {
        found += 1
    }
}
if (found == 0) {
    alert(` Số ${n} không tồn tại trong mảng`)
} else {
    alert(` Số ${n} xuất hiện ${found} lần trong mảng`)
}