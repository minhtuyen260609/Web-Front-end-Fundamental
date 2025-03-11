let arr = [5, 2, 7, 5, 4];
function min() {
    let min = arr.length;
    if (arr.length == 0) {
        return `Mảng không chưa phần tử`;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return `Giá trị không hợp lệ`;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return `Phần tử nhỏ nhất trong mảng là ${min}`;
}
console.log(min())