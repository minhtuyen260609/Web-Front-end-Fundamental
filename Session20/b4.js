let str = prompt("Nhập một chuỗi: ");
let search = prompt("Nhập ký tự cần tìm kiếm: ");
let check = false;
for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        check = true;
        break;
    }
}
if (check) {
    alert("Tồn tại từ cần tìm kiếm");
} else {
    alert("Không tồn tại từ cần tìm kiếm");
}