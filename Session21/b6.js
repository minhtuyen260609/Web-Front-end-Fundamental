let n = +prompt("Nhập số nguyên bất kì:")
for (let i = 1; i <= n; i++) {
    if (n % i == 0){
        document.write(i + " ")
    }
    
}