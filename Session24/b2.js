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
            console.log("Các phần tử là số chẵn")
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    console.log(arr[i])
                }
            }
            console.log("Các phần tử là số lẻ")
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 != 0) {
                    console.log(arr[i])
                }
            }
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += +arr[i];
            }
            let tbc = sum / arr.length
            console.log("Trung bình cộng các phần tử trong mảng là: " + tbc);
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let index = +prompt("Mời bạn nhập vào vị trí muốn xóa");
                if (index < 0 || index >= arr.length) {
                    console.log("Vị trí không hợp lệ!");
                } else {
                    arr.splice(index, 1);
                    console.log(arr);
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                let max = arr[0], maxSecond = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        maxSecond = max;
                        max = arr[i];
                    } else if (arr[i] > maxSecond && arr[i] < max) {
                        maxSecond = arr[i];
                    }
                }
                console.log("Phần tử lớn thứ hai trong mảng là: " + maxSecond);
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