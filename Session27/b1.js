let choice
let sum=(a, b) => a + b
let subtraction=(a, b) => a - b
let multiplication=(a, b) => a * b
let division=(a, b) => a / b
let num1 = +prompt("Mời nhập số thứ nhất")
let num2 = +prompt("Mời nhập số thứ hai")
let menu = `
-------MENU-------
1. Cộng hai số
2. Trừ hai số
3. Nhân hai số
4. Chia hai số
5. Thoát
Lựa chọn của bạn:
`
do {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let tong = sum(num1,num2)
            console.log(tong)
            break;
        case 2:
            let hieu = subtraction(num1,num2)
            console.log(hieu)
            break;
        case 3:
            let tich = multiplication(num1,num2)
            console.log(tich)
            break;
        case 4:
            let thuong = division(num1,num2)
            console.log(thuong)
            break;
        case 5:
            console.log("Thoát chương trình.")
            break;
        default:
            console.log("Lựa chọn không hợp lệ.")
            break;
    }
} while (choice != 5);

