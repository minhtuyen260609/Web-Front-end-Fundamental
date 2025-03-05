for (let num = 100; num < 1000; num++) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        alert(num);
    }
}
