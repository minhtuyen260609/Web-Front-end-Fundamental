function isSymmetricString(str) {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let userInput = prompt(" Nhập chuỗi bất kì");
    if (isSymmetricString(userInput)) {
        alert("Chuỗi đối xứng");
    } else {
        alert("KKhông phải chuỗi đối xứng.");
    }
