const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1500,
        category: "Điện tử",
        quantity: 10
    },
    {
        id: 2,
        name: "Điện Thoại",
        price: 800,
        category: "Điện tửtử",
        quantity: 20
    },
    {
        id: 3,
        name: "Áo Phông",
        price: 30,
        category: "Quàn áo",
        quantity: 50
    }
];

let menu = `
----------MENU----------
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
Mời bạn nhập sự lựa chọn của bạn:
`;

let input;
while (input !== 7) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let name = prompt("Mời nhập tên sản phẩm:");
            let price = +prompt("Mời nhập giá sản phẩm:");
            let category = prompt("Mời nhập danh mục sản phẩm:");
            let quantity = +prompt("Mời nhập số lượng sản phẩm:");
            let newProduct = {
                id: Math.random(),
                name,
                price,
                category,
                quantity,
            };
            products.push(newProduct);
            console.log("Sản phẩm đã được thêm vào danh sách.");
            break;
        case 2:
            displayProducts();
            break;
        case 3:
            let searchId = +prompt("Mời bạn nhập id sản phẩm cần xem:");
            let product = getProductById(searchId);
            if (product) {
                displayOneProduct(product);
            } else {
                console.log("Không tìm thấy sản phẩm với id: " + searchId);
            }
            break;
        case 4:
            let updateId = +prompt("Mời bạn nhập id sản phẩm cần cập nhật:");
            let productToUpdate = getProductById(updateId);
            if (productToUpdate) {
                productToUpdate.name = prompt("Mời bạn nhập tên sản phẩm mới:", productToUpdate.name);
                productToUpdate.price = +prompt("Mời bạn nhập giá sản phẩm mới:", productToUpdate.price);
                productToUpdate.category = prompt("Mời bạn nhập danh mục sản phẩm mới:", productToUpdate.category);
                productToUpdate.quantity = +prompt("Mời bạn nhập số lượng sản phẩm mới:", productToUpdate.quantity);
                console.log("Sản phẩm đã được cập nhật.");
            } else {
                console.log("Không tìm thấy sản phẩm với id: " + updateId);
            }
            break;
        case 5:
            let deleteId = +prompt("Mời bạn nhập id sản phẩm cần xóa:");
            let deleteIndex = getProductIndexById(deleteId);
            if (deleteIndex !== -1) {
                products.splice(deleteIndex, 1);
                console.log("Sản phẩm đã được xóa.");
            } else {
                console.log("Không tìm thấy sản phẩm với id: " + deleteId);
            }
            break;
        case 6:
            let minPrice = +prompt("Mời bạn nhập mức giá thấp nhất:");
            let maxPrice = +prompt("Mời bạn nhập mức giá cao nhất:");
            let filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
            if (filteredProducts.length > 0) {
                console.log("Các sản phẩm trong khoảng giá từ " + minPrice + " đến " + maxPrice + ":");
                displayProducts(filteredProducts);
            } else {
                console.log("Không có sản phẩm nào trong khoảng giá này.");
            }
            break;
        case 7:
            console.log("Cảm ơn bạn đã sử dụng hệ thống.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
            break;
    }
}

function displayProducts(productsToDisplay = products) {
    if (productsToDisplay.length === 0) {
        console.log("Không có sản phẩm nào trong danh sách.");
        return;
    }
    productsToDisplay.forEach(function (product, index) {
        console.log(`Sản phẩm ${index + 1}: `);
        console.log("Id:", product.id);
        console.log("Tên:", product.name);
        console.log("Giá:", product.price);
        console.log("Danh mục:", product.category);
        console.log("Số lượng:", product.quantity);
        console.log("-----------------------");
    });
}

function displayOneProduct(product) {
    console.log("Chi tiết sản phẩm:");
    console.log("Id:", product.id);
    console.log("Tên:", product.name);
    console.log("Giá:", product.price);
    console.log("Danh mục:", product.category);
    console.log("Số lượng:", product.quantity);
    console.log("-----------------------");
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function getProductIndexById(id) {
    return products.findIndex(product => product.id === id);
}