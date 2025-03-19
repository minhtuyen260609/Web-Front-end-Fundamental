function login(e) {
    e.preventDefault();
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (user === 'huanrose@gmail.com' && pass === '123456') {
      console.log('Đăng nhập thành công');
    } else {
      console.log('Đăng nhập thất bại');
    }
  }