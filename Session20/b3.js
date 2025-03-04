let n = +prompt("Nhập một số bất kì:");
if (isNaN(n) || n < 0) {
    alert("Số không hợp lệ");
} else {
    let str = String(n);
    let check = true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            check = false;
            break;
        }
    }
    if (check) {
        alert("Là số đối xứng");
    } else {
        alert("Không phải số đối xứng");
    }
}