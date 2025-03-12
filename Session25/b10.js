let products = [["mì tôm", 5, 5000],
["bánh mì", 12, 15000],
["bánh bao", 5, 8000],
["mèn mén", 30, 20000]]
let cart = []
let menu = `
---------Menu---------
1. Danh sách sản phẩm
2. Mua hàng
3. Tính tiền + Hóa đơn
4. Thoát
Mời bạn nhập vào sự lựa chọn của bạn:
`
let input
while (input !== 4) {
    input = +prompt(menu)
    switch (input) {
        case 1:
            displayProducts()
            break;
        case 2:
            let productName = prompt("Mời banh nhập tên sản phẩm:")
            let findIndex = -1
            for (const index in products) {
                if (productName === products[index][0]) {
                    findIndex = index

                }
            }
            if (findIndex === -1) {
                console.log("Không tìm thấy sản phẩm")
            } else {
                let inCartIndex = -1
                for (const i in cart) {
                    if (cart[i][0] === productName) {
                        inCartIndex = i
                    }
                }
            }
            if (inCartIndex === -1) {
                let product = products[findIndex]
                product[1] = 1
                cart.push(product)
            } else {
                cart[inCartIndex][1]++

            }
            products[findIndex][1]--
            break;
        case 3:

            break;
        case 4:
            console.log("Thanks for using the app")
            break;
        default:
            console.log("")
            break;
    }
}

function displayProducts() {
    for (let index in products) {
        console.log(
            `${+index + 1}. ${products[index][0]} - ${products[index][2]} - ${products[index][1]}`
        );
    }
}