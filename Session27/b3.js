function sTron() {
    let r = +prompt('nhap ban kinh hinh tron');
    let SCircel = Math.PI * r * r;
    console.log(SCircel);
}
function pTron() {
    let r1 = +prompt('nhap ban kinh hinh tron');
    let PCircel = Math.PI * r * r;
    console.log(PCircel);
}
function pHcn() {
    let a = +prompt('nhap vao chieu dai hcn');
    let b = +prompt('nhap vao chieu rong hcn');
    let P = (a + b) * 2;
    console.log(P);
}
function sHcn() {
    let a1 = +prompt('nhap vao chieu dai hcn');
    let b1 = +prompt('nhap vao chieu rong hcn');
    let S = a1 * b1;
    console.log(S);
}
do {
    console.log("Tính diện tích hình tròn");
    console.log("Tính chu vi hình tròn");
    console.log("Tính chu vi hình chữ nhật");
    console.log("Tính diện tích hình chữ nhật");
    console.log("Thoát");
    choose = +prompt("Nhập vào lựa chọn của bạn");
    switch (choose) {
        case 1:
            sTron();
            break;
        case 2:
            pTron();
            break;
        case 3:
            pHcn();
            break;
        case 4:
            sHcn();
            break;
        case 5:
            console.log('Thoat chuong trinh')
            break;
    }

} while (choose != 5)  