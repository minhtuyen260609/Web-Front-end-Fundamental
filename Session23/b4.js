let arr = [];
let check = 0;
let arrLength = +prompt(`Nhập số lượng phần tử: n=`);

for (let i = 0; i < arrLength; i++) {
    let element = +prompt(`Nhập vào phần tử thứ ${i + 1}`);
    arr[i] = element;
}

for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        console.log(`${arr[i]} `);
        check++;
    }
}

if (check == 0) {
    console.log(`Không có ký tự số`);
}