let a = +prompt("Nhập giá trị a:");
let b = +prompt("Nhập giá trị b:");
if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Không hợp lệ");
} else {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    alert(`Kết quả của ${a} lũy thừa ${b} là: ${result}`);
}