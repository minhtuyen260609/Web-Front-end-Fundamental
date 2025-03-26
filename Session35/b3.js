const defaultProducts = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://tse2.mm.bing.net/th?id=OIP.3WakglSsotHje4iHmToQDAHaFj&pid=Api&P=0&h=180',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 34990000,
        image: 'https://tse4.mm.bing.net/th?id=OIP.HdFzMBPOKKKvmqjw28b1NAHaE7&pid=Api&P=0&h=180',
        description: 'Chiếc điện thoại đẳng cấp Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://tse4.mm.bing.net/th?id=OIP.evJadDOV8fCafwFpfXlCFwHaHb&pid=Api&P=0&h=180',
        description: 'Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://tse2.mm.bing.net/th?id=OIP.VLLceJztZT3-fMxdqmNfcgHaHa&pid=Api&P=0&h=180',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://tse4.mm.bing.net/th?id=OIP.3MZitv0ilA3Cf3gAwlk1rQHaEK&pid=Api&P=0&h=180',
        description: 'Smartwatch thời thượng với nhiều tính năng cho thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://tse3.mm.bing.net/th?id=OIP.QL2rB5xoPN7NZ4gPCZFVkQHaHa&pid=Api&P=0&h=180',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(defaultProducts));
}

function renderProducts() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    const filteredProducts = storedProducts.filter(product => 
        product.name.toLowerCase().includes(searchValue)
    );

    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text fw-bold text-danger">${product.price.toLocaleString()} VND</p>
                        <a href="#" class="btn btn-primary">Mua ngay</a>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productHTML;
    });

    if (filteredProducts.length === 0) {
        productList.innerHTML = `<p class="text-center text-muted">Không tìm thấy sản phẩm nào.</p>`;
    }
}

window.onload = renderProducts;
document.getElementById('searchInput').addEventListener('input', renderProducts);
