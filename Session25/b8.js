function isStrongPass(str) {
    if (typeof str !== "string" || str.length < 8) {
        return false; 
    }
    let n = false;
    let upperCase = false;
    let lowerCase = false;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) { 
            n = true;
        } else if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            upperCase = true;
        } else if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()) { 
            lowerCase = true;
        }

        if (n && upperCase && lowerCase) {
            return true;
        }
    }
    return false;
}
let pass = prompt("Mời nhập mật khẩu:");
console.log(isStrongPass(pass));