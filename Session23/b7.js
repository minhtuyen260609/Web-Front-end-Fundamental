let arr = [];
let check = 0;
let max1 = 0;
let max2 = 0;
let arrLength = +prompt(`Nhập số lượng phần tử: n=`);

if (arrLength == 0) {
    console.log(`Mảng không có phần tử nào`);
} else if (arrLength < 0) {
    console.log(`Số lượng phần tử không được nhỏ hơn 0`);
} else {
    for (let i = 0; i < arrLength; i++) {
        let element = +prompt(`Nhập vào phần tử thứ ${i + 1}`);
        arr[i] = element;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
    }
    console.log(`arr=[${arr}]<br>`);
    console.log(`Số lớn thứ 2 có trong mảng là ${max2}`);
}