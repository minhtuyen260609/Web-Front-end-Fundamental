let checkBtn = document.getElementById('checkBtn');
let textInput = document.getElementById('textInput');
let result = document.getElementById('result');

checkBtn.addEventListener('click', function() {
  let textLength = textInput.value.length;
  result.textContent = `${textLength} ký tự`;
});
