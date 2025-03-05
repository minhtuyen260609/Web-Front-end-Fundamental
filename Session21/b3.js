let passwork = "htut"
let check = false
while (check == false) {
    let n = prompt("Nhập passwork:")
    if (n == passwork) {
        check = true
        alert("Mật khẩu chính xác")
    }else{
        alert("Mật khẩu sai")
    }
}