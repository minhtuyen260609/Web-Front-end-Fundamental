let username = prompt("Nhập tên người dùng: ");
if (username === "ADMIN") {
    let password = prompt("Nhập mật khẩu: ");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (username === null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}