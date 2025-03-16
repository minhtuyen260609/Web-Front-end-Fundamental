let sinhVien = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
]
function locSVGioi(danhSach) {
    return danhSach.filter(sv => {
        let diemTB = (sv.scores.math + sv.scores.english + sv.scores.literature) / 3
        return diemTB >= 8
    })
}
let gioi = locSVGioi(sinhVien)
console.log("Danh sách sinh viên có điểm trung bình >= 8:")
for (let sv of gioi) {
    console.log("Tên: " + sv.name)
}