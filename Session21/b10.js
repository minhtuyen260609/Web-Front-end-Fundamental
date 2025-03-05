let n = +prompt('Nhập vào số nguyên bất kỳ');
let count = 1, num = 2, flag = 0;
if (isNaN(n) || n < 0) {
    alert('Giữ liệu nhập vào không hợp lệ');
} else {
    while (count != (n + 1)) {
        flag = 0;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            document.write(num + ' ');
            count++;
        }
        num++
    }
}