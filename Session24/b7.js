let choice;
let loop = true;
let str
let menu = `
------ MENU ------
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế ký tự
7. Thoát chuong trình
Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case "1":
            str = prompt("Nhập chuỗi:");
            break
        case "2":
            console.log("Chuỗi hiện tại: " + str);
            break;
        case "3":
            str = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            break;
        case "4":
            let daoNguoc = str.split("").reverse().join("");
            console.log("Chuỗi sau khi đảo ngược: " + daoNguoc);
            break;
        case "5":
            let dem = 0, i = 0, trongTu = false;
            while (i < str.length) {
                if (str[i] !== " " && !trongTu) {
                    dem++;
                    trongTu = true;
                } else if (str[i] === " ") {
                    trongTu = false;
                }
                i++;
            }
            console.log("Số lượng từ trong chuỗi: " + dem);
            break;
        case "6":
            let timKiem = prompt("Nhập ký tự cần tìm:");
            if (timKiem.length !== 1) {
                console.log("Vui lòng nhập một ký tự duy nhất.");
                break;
            }
            let thayThe = prompt(`Nhập ký tự thay thế cho '${timKiem}':`);
            if (thayThe.length !== 1) {
                console.log("Vui lòng nhập một ký tự duy nhất.");
                break;
            }
            let ketQua = "";
            for (let i = 0; i < str.length; i++) {
                if (str[i] === timKiem) {
                    ketQua += thayThe;
                } else {
                    ketQua += str[i];
                }
            }
            str = ketQua;
            console.log("Chuỗi sau khi thay thế: " + str);
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