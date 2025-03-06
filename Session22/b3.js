let n = prompt("Nhập dãy số bất kì:")
if (!isNaN(n)) {
    let arr = n.split("")
    arr.reverse()
    alert(arr.join(""))
} else {
    alert("Dãy không hợp lệ")
}