let number = +prompt("Nhập một số nguyên:");
if (isNaN(number) || number < 2) {
    console.log("Không hợp lệ");
} else {
    let isPrime = true;
    snt(number)
    if (isPrime) {
        console.log(`${number} là số nguyên tố.`);
    } else {
        console.log(`${number} không phải là số nguyên tố.`);
    }
}

function snt(a) {
    
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            isPrime = false;
            break;
        }
    }
}