let arr = [];
let len = 0;
function inputStudent() {
    len = +prompt('nhap vao so luong phan tu trong mang');
    for (let i = 0; i < len; i++) {
        arr[i] = prompt('nhap vao ten sinh vien thu ' + (i + 1));
    }
}
function printStudent() {
    console.log(arr);
}
function findStudent() {
    let name3 = prompt('nhap vao ten sv muon tim');
    let arr3 = arr.filter((val) => val == name);
    console.log(arr3);
}
function deleteStudent() {
    let name4 = prompt('nhap vao ten sv muon xoa');
    for (let i in arr) {
        if (name == arr[i]) {
            arr.splice(i, 1);
            break;
        }
    }
    console.log(arr);
}
do {
    console.log("Nhập danh sách sinh viên");
    console.log("Hiển thị danh sách sinh viên");
    console.log("Tìm sinh viên theo tên");
    console.log("Xoá sinh viên khỏi danh sách");
    console.log("Thoát");
    choose = +prompt("Nhập vào lựa chọn của bạn");
    switch (choose) {
        case 1:
            inputStudent();
            break;
        case 2:
            printStudent();
            break;
        case 3:
            findStudent();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            console.log('Thoát chương trình ');
            break;

    }
} while (choose != 5)