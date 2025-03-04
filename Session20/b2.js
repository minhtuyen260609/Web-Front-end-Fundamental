let n = prompt("Mời nhập số bất kì: ")
if ("a" <= n && n <= "z" || "A" <= n && n <= "Z" || n < 0) {
    alert("Dữ liệu nhập vào không hợp lệ")
} else {
    document.write(`Các số chia hết cho 5 từ 1 đến ${n} là:`)
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            document.write(` ${i}`)
        }
    }
}

