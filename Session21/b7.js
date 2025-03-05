let a = parseFloat(prompt(`Moi nhap so tien gui: `))
let r = parseFloat(prompt(`Moi nhap lai suat 1 thang: `))
let m = +prompt(`Moi nhap so thang gui: `)
let truoc_lai = m * (a * (r / 100))
let sau_lai = a + truoc_lai
alert(`Tien nhan duoc: ${sau_lai}`)