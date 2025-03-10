let arr = [];
let choice;
let loop = true;
let menu = `
------ MENU ------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. tỉnh tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của phần tử trong mảng
6. Sắp xếp mảng tăng dần
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
            let min = arr[0], max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) min = arr[i];
                if (arr[i] > max) max = arr[i];
            }
            console.log("Số nhỏ nhất: " + min + ", Số lớn nhất: " + max);
            break;
        case 4:
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += +arr[i];
                }
                console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 5:
            let n = prompt("Nhập phần tử bất kì:")
            let found = 0
            for (let i = 0; i < 10; i++) {
                if (n == arr[i]) {
                    found += 1
                }
            }
            if (found == 0) {
                console.log(` Số ${n} không tồn tại trong mảng`)
            } else {
                console.log(` Số ${n} xuất hiện ${found} lần trong mảng`)
            }
            break;
        case 6:
            arr.sort((a, b) => a - b)
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