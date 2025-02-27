let a = +prompt("Nhập giá trị a:")
let b = +prompt("Nhập giá trị b:")
let c = +prompt("Nhập giá trị c:")
let delta = b * b - 4 * a * c
if (delta < 0) {
    alert("Phương trình vô nghiệm.")
} else if (delta === 0) {
    let x = -b / (2 * a)
    alert(`Phương trình có 1 nghiệm x = ${x}`)
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`)
}