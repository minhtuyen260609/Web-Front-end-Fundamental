let arr = [];
let check = 0;
let sum = 0;
let arrLength = +prompt(`Nhập số lượng phần tử: n=`);

if (arrLength == 0) {
    console.log(`Mảng không có phần tử`);
} else if (arrLength < 0) {
    console.log(`Số lượng phần tử không được âm`);
} else {
    for (let i = 0; i < arrLength; i++) {
        let element = +prompt(`Nhập vào phần tử thứ ${i + 1}`);
        arr[i] = element;
    }

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
            check++;
        }
    }

    if (check == 0) {
        console.log(`Không có phần tử nào là số`);
    } else {
        console.log(`Tổng = ${sum}`);
    }
}