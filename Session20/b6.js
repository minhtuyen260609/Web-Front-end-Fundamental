let number = +prompt("Nhập một số nguyên:");
if (isNaN(number) || number < 2) {
    alert("Không hợp lệ");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${number} là số nguyên tố.`);
    } else {
        alert(`${number} không phải là số nguyên tố.`);
    }
}