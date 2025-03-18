let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    },
]
let menu =
    `
    -------MENU-------
    1. Hiển thị các sản phẩm theo tên danh mục
    2. Chọn sản phẩm để mua bằng cách nhập id
    3. Sắp xếp các sản phẩm trong cửa hàng theo giá
    4. Tính số tiền thanh toán trong giỏ hàng
    5. Thoát
    `
let choice
let cart = []
do {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let searchCategory = prompt("Mời nhập tên danh mục cần tìm")
            for (let i in products) {
                if (products[i].category == searchCategory) {
                    console.log("id: ", products[i].id)
                    console.log("name: ", products[i].name)
                    console.log("price: ", products[i].price)
                    console.log("quantity: ", products[i].quantity)
                    console.log("------------------")
                }
            }
            break;
        case 2:
            let find = -1
            let choiceProducts = +prompt("Nhập mã sẩn phẩm muốn mua: ")
            for (let i in products) {
                if (products[i].id == choiceProducts) {
                    find = i
                }
            }
            if (find == -1) {
                console.log("Sản phẩm không có trong cửa hàng")
            } else {
                let buyProducts = +prompt("Mời nhập số lượng sản phẩm muốn mua: ")
                if (products[find].quantity < buyProducts) {
                    console.log("Số lượng hàng trong kho không đủ")
                } else {
                    products[find].quantity -= buyProducts
                    cart.push({ ...products[find], quantity: buyProducts })
                    cart.quantity = buyProducts
                }
            }
            break;
        case 3:
            let choose = prompt("a. Sắp xếp tăng dần\nb. Sắp xếp giảm dần  ")
            if (choose == "a") {
                products.sort((a, b) => a.price - b.price)
                printProducts()
            } else if (choose == "b") {
                products.sort((a, b) => b.price - a.price)
                printProducts()
            } else {
                console.log("Lựa chọn không hợp lệ")
            }
            break;
        case 4:
            if (cart.length === 0) {
                console.log("Giỏ hàng trống")
            } else {
                let total = 0
                for (let i of cart) {
                    total += i.price * i.quantity
                }
                console.log("Tổng tiền thanh toán: ", total)
            }
            break
        case 5:
            console.log("Thoát chương trình")
            break;
        default:
            console.log("Lựa chọn không hợp lệ")
            break;
    }
} while (choice !== 5);

function printProducts() {
    for (let i in products) {
        console.log("id: ", products[i].id)
        console.log("name: ", products[i].name)
        console.log("price: ", products[i].price)
        console.log("quantity: ", products[i].quantity)
        console.log("------------------")
    }
}