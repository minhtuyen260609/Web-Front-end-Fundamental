let a = +prompt("Nhập vào một số : ");
function isPrime(a) {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            alert(a + " is not a prime");
            return true;
        }
        alert(a + " is a prime");
        return true;
    }
}