let num = +prompt("Nhập vào độ dài của mảng");
let array = [];
for (let i = 0; i < num; i++) {
    array[i] = +prompt("nhập vào phần tử thứ" + i);

}
console.log(array);
let max = 0;
for (let i = 0; i < num; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
alert(max);