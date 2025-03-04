let n = prompt("Mời nhập số bất kì: ")
let sum = 0
if ("a" <= n && n <= "z" || "A" <= n && n <= "Z" || n < 0) {
    alert("Dữ liệu nhập vào không hợp lệ")
} else {
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    alert(sum)
}

