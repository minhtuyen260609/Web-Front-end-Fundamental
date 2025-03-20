function validateEmail(email) {
    return email.includes("@") && email.includes(".")
}

document.getElementById('checkButton').onclick = function () {
    const email = document.getElementById('emailInput').value
    const result = document.getElementById('result')

    if (validateEmail(email)) {
        result.textContent = "Email hợp lệ!"
        result.className = "valid"
    } else {
        result.textContent = "Email không hợp lệ!"
        result.className = "invalid"
    }
}