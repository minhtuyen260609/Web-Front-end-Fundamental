let books = [
    {
        id: 1,
        name: "Harry Potter",
        price: 150000,
        quantity: 10,
        category: "Fantasy"
    },
    {
        id: 2,
        name: "Lập trình JavaScript",
        price: 200000,
        quantity: 5,
        category: "Programming"
    },
    {
        id: 3,
        name: "Chuyện nhà Dr.Seuss",
        price: 120000,
        quantity: 7,
        category: "Kids"
    },
]
let cart = []
let menu = `
    -------QUẢN LÝ SÁCH-------
    1. Hiển thị danh sách sách theo thể loại
    2. Thêm sách mới vào kho
    3. Tìm kiếm sách theo tên hoặc id
    4. Mua sách
    5. Sắp xếp sách theo giá
    6. Tính tổng số lượng sách đã mua và tổng tiền
    7. Hiển thị tổng số lượng sách trong kho
    8. Thoát
`
let choice;
do {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let category = prompt("Nhập thể loại sách: ")
            displayBooksByCategory(category)
            break;
        case 2:
            addBook()
            break;
        case 3:
            searchBook()
            break;
        case 4:
            buyBook()
            break;
        case 5:
            sortBooks()
            break;
        case 6:
            tongTienSach()
            break;
        case 7:
            soSachTrongKho()
            break;
        case 8:
            console.log("Thoát chương trình.")
            break;
        default:
            console.log("Lựa chọn không hợp lệ.")
    }
} while (choice !== 8)

function displayBooksByCategory(category) {
    console.log(`-----Sách trong danh mục: ${category}-----`)
    let found = false
    for (let book of books) {
        if (book.category.toLowerCase() === category.toLowerCase()) {
            console.log(`ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}`)
            found = true
        }
    }
    if (!found) console.log("Không tìm thấy sách trong danh mục này.")
}

function addBook() {
    let id = +prompt("Nhập ID sách: ")
    let name = prompt("Nhập tên sách: ")
    let price = +prompt("Nhập giá sách: ")
    let quantity = +prompt("Nhập số lượng sách: ")
    let category = prompt("Nhập thể loại sách: ")
    books.push({ id, name, price, quantity, category })
    console.log("Thêm sách thành công!")
}

function searchBook() {
    let term = prompt("Nhập tên hoặc ID sách để tìm: ").toLowerCase()
    let found = false
    for (let book of books) {
        if (book.name.toLowerCase().includes(term) || book.id === +term) {
            console.log(`ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}, Category: ${book.category}`)
            found = true
        }
    }
    if (!found) console.log("Không tìm thấy sách.")
}

function buyBook() {
    let id = +prompt("Nhập ID sách cần mua: ")
    let found = books.find(book => book.id === id)
    if (!found) {
        console.log("Sách không tồn tại.")
        return
    }
    let quantity = +prompt("Nhập số lượng cần mua: ")
    if (found.quantity < quantity) {
        console.log("Số lượng không đủ.")
    } else {
        found.quantity -= quantity;
        cart.push({ ...found, quantity })
        console.log("Đã thêm sách vào giỏ hàng.")
    }
}

function sortBooks() {
    let choice = prompt("Chọn cách sắp xếp: a. Tăng dần, b. Giảm dần: ").toLowerCase()
    if (choice === "a") {
        books.sort((a, b) => a.price - b.price)
    } else if (choice === "b") {
        books.sort((a, b) => b.price - a.price)
    } else {
        console.log("Lựa chọn không hợp lệ.")
    }
    console.log("Danh sách sách sau khi sắp xếp:")
    books.forEach(book => console.log(`ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}`))
}

function tongTienSach() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.")
        return;
    }
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.quantity * item.price
    });
    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}`);
    console.log(`Tổng tiền: ${totalPrice}`)
}

function soSachTrongKho() {
    let totalStock = 0
    books.forEach(book => {
        totalStock += book.quantity
    })
    console.log(`Tổng số lượng sách trong kho: ${totalStock}`)
}