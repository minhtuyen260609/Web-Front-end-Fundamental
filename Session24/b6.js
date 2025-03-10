let choice;
let loop = true;
let str
let menu = `
------ MENU ------
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài chuỗichuỗi
4. Đếm số lần xuất hiện của một kí tựtự
5. Kiểm tra chuỗi đối xứng
6. Chuyển đổi chữ in hoa các ký tự đầu tiên của từ
7. Thoát chuong trình
Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Mời nhập chuỗi");
            break;
        case 2:
            console.log(str);
            break;
        case 3:
            console.log(str.length);
            break;
        case 4:
            let kyTu = prompt("Nhập ký tự cần đếm:");
            let n = str.split(kyTu).length - 1;
            console.log(`Số lần xuất hiện của '${kyTu}': ` + n);
            break;
        case 5:
            let daoNguoc = str.split("").reverse().join("");
            console.log(str === daoNguoc ? "Chuỗi là đối xứng" : "Chuỗi không đối xứng");
            break;
        case 6:
            let ketQua = str
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
            console.log("Chuỗi sau khi chuyển đổi: " + ketQua);
            break;
        case 7:
            console.log("Kết thúc chương trình. Cảm ơn !!!!!");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ")
            break;
    }
}