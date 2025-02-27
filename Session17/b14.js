let r = +prompt("Mời nhập bán kính")
let h = +prompt("Mời nhập chiều cao")
let sxq = 2 *Math.PI *r *h
let stp = 2 *Math.PI *r *(r + h)
let v = Math.PI *r *r *h
let c = 2 *Math.PI *r
document.write("Diện tích xung quanh là: " + sxq + "<br>")
document.write("Diện tích toàn phần là: " + stp + "<br>")
document.write("Thể tích hình trụ là: " + v + "<br>")
document.write("Chu vi đáy là: " + c + "<br>")