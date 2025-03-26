const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (!email || !password || !confirmPassword) {
        message.textContent = "Vui lòng điền đầy đủ thông tin!";
        return;
    }
    if (password !== confirmPassword) {
        message.textContent = "Mật khẩu không khớp!";
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        message.textContent = "Email đã tồn tại!";
        return;
    }
    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    message.style.color = 'green';
    message.textContent = "Đăng ký thành công!";
    form.reset();
})
