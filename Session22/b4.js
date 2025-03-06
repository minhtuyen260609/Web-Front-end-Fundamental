let n = prompt("Nhập vào một dãy số bất kì:")
let max = 0
if (!isNaN(n)) {
    let arr = n.split("")
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    alert(`${max} là số lớn nhất trong dãy số`)
} else {
    alert("Dãy không hợp lệ")
}