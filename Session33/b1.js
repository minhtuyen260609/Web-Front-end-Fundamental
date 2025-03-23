let passwordInput = document.getElementById('password');
let toggleEye = document.getElementById('toggleEye');

toggleEye.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
