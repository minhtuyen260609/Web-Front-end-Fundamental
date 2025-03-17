const contact = [
    {
        id: 1,
        name: "Khac Hung",
        email: "Hung@gmail.com",
        phone: "0123654789"
    },
    {
        id: 2,
        name: "Thi Huong",
        email: "Huong@gmail.com",
        phone: "0321456789"
    },
    {
        id: 3,
        name: "Van Toan",
        email: "Toan@gmail.com",
        phone: "0132564789"
    },
];
let menu = `
----------MENU----------
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.
Mời bạn nhập sự lựa chọn của bạn:
`;
let input;
while (input !== 6) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let name = prompt("Mời nhập tên");
            let email = prompt("Mời nhập email");
            let phone = prompt("Mời nhập số điện thoại");
            let person = {
                id: Math.random(),
                name,
                email,
                phone,
            };
            contact.push(person);
            displayContact();
            break;
        case 2:
            displayContact();
            break;
        case 3:
            let searchPhone = prompt("MỜi bạn nhập số điện thoại cần tìm");
            let findIndex = search("phone", searchPhone);
            if (findIndex === -1) {
                console.log("Không tìm thấy thông tin với số điện thoại: " + searchPhone);
            } else {
                displayOneContact(contact[findIndex], findIndex);
            }
            break;
        case 4:
            let searchId = +prompt("Mời bạn nhập vào id người cần cập nhật:");
            let updateIndex = search("id", searchId);
            if (updateIndex === -1) {
                console.log("Không tìm thấy id này");
            } else {
                contact[updateIndex].name = prompt("Mời bạn nhập vào tên cập nhật:", contact[updateIndex].name);
                contact[updateIndex].email = prompt("Mời bạn nhập vào email cập nhật:", contact[updateIndex].email);
                contact[updateIndex].phone = prompt("Mời bạn nhập vào số điện thoại cập nhật:", contact[updateIndex].phone);
                displayOneContact(contact[updateIndex], updateIndex);
            }
            break;
        case 5:
            let deleteId = +prompt("Mời bạn nhập vào id người cần xóa:");
            let deleteIndex = search("id", deleteId);
            if (deleteIndex === -1) {
                console.log("Không tìm thấy id này để xóa.");
            } else {
                contact.splice(deleteIndex, 1);
                console.log("Đã xóa thành công.");
                displayContact();
            }
            break;
        case 6:
            console.log("Cảm ơn bạn đã sử dụng chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
}

function displayContact() {
    contact.forEach(function (person, index) {
        console.log(`Contact ${index + 1}: `);
        console.log("Id:", person.id);
        console.log("Tên:", person.name);
        console.log("Email:", person.email);
        console.log("Số điện thoại:", person.phone);
        console.log("-----------------------");
    });
}

function displayOneContact(person, index) {
    console.log(`Contact ${index + 1}: `);
    console.log("Id:", person.id);
    console.log("Tên:", person.name);
    console.log("Email:", person.email);
    console.log("Số điện thoại:", person.phone);
    console.log("-----------------------");
}

function search(key, value) {
    let findIndex = -1;
    for (let i = 0; i < contact.length; i++) {
        if (value === contact[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}