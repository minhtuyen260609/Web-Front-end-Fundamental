let a = +prompt("Điểm môn Toán:")
let b = +prompt("Điểm môn Văn:")
let c = +prompt("Điểm môn Anh:")
let tb = (a + b + c) / 3
if (tb < 5) {
    alert("Yếu")
} else if (tb < 6.5) {
    alert("Trung bình")
} else if (tb < 8) {
    alert("Khá")
} else {
    alert("Giỏi")
}