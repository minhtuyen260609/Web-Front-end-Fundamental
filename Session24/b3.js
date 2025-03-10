let arr = [];
let choice;
let loop = true;
let max = 0
let min = arr[0]
let menu = `
------ MENU ------
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử Chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử ở vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chuong trình
Lựa chọn của bạn là gì?
`;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Mời nhập vào số lượng phần tử muốn thêm");
            for (let i = 0; i < count; i++) {
                let input = +prompt("Mời bạn nhập vào phần tử muốn thêm");
                arr.push(input);
            }
            console.log(arr);
            break;
        case 2:
            for (let i in arr) {
                console.log(`${i}. ${arr[i]}`);
            }
            break;
        case 3:
            let max = arr[0];

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i]
                    let index = i
                }
                console.log("Số lớn nhất: " + max + "Vị trí thứ: " + index);
                break;
            }
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += +arr[i];
                }
            }
            let tbc = sum / arr.length
            console.log("Trung bình cộng các phần tử dương trong mảng là: " + tbc);
            break;
        case 5:
            for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            console.log("Mảng sau khi đảo ngược:", arr);
            break;
        case 6:
            let check = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                console.log("Mảng đối xứng");
            } else {
                console.log("Mảng không đối xứng");
            }
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