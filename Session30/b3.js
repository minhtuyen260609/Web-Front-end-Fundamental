let phones = [
    {
        id: 1,
        name: "iPhone 14",
        price: 25000000,
        quantity: 5,
        company: "Apple"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        price: 20000000,
        quantity: 8,
        company: "Samsung"
    },
    {
        id: 3,
        name: "Xiaomi Mi 13",
        price: 15000000,
        quantity: 10,
        company: "Xiaomi"
    },
];
let cart = [];
let menu = `
    -------QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI-------
    1. Hiển thị danh sách điện thoại theo hãng
    2. Thêm điện thoại mới vào cửa hàng
    3. Tìm kiếm điện thoại theo tên hoặc ID
    4. Thoát
`;

let choice;
do {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let company = prompt("Nhập tên hãng điện thoại (Ví dụ: Apple, Samsung, Xiaomi): ").toLowerCase();
            let foundCompany = false;
            for (let phone of phones) {
                if (phone.company.toLowerCase() === company) {
                    console.log(`ID: ${phone.id}, Name: ${phone.name}, Price: ${phone.price}, Quantity: ${phone.quantity}, Company: ${phone.company}`);
                    foundCompany = true;
                }
            }
            if (!foundCompany) {
                console.log("Không tìm thấy điện thoại thuộc hãng này.");
            }
            break;
        case 2:
            let id = +prompt("Nhập ID điện thoại: ");
            let name = prompt("Nhập tên điện thoại: ");
            let price = +prompt("Nhập giá điện thoại: ");
            let quantity = +prompt("Nhập số lượng điện thoại: ");
            let companyNew = prompt("Nhập hãng điện thoại: ");
            phones.push({ id, name, price, quantity, company: companyNew });
            console.log("Thêm điện thoại mới thành công!");
            break;
        case 3:
            let search = prompt("Nhập tên hoặc ID điện thoại để tìm: ").toLowerCase();
            let found = false;
            for (let phone of phones) {
                if (phone.name.toLowerCase().includes(search) || phone.id === +search) {
                    console.log(`ID: ${phone.id}, Name: ${phone.name}, Price: ${phone.price}, Quantity: ${phone.quantity}, Company: ${phone.company}`);
                    found = true;
                }
            }
            if (!found) {
                console.log("Không tìm thấy điện thoại.");
            }
            break;
        case 4:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 4);
