const form = document.getElementById('loginForm')
const message = document.getElementById('message')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()

    if (!email || !password) {
        message.textContent = "Vui lòng điền đầy đủ thông tin!"
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)

    if (validUser) {
        message.style.color = 'green'
        message.textContent = "Đăng nhập thành công!"
        setTimeout(() => {
            window.location.href = "home.html"
        }, 1000);
    } else {
        message.textContent = "Email hoặc mật khẩu không đúng!"
    }
})
