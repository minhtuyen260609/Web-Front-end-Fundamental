let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];

document.getElementById('filterBtn').onclick = function () {
    let category = document.getElementById('categorySelect').value;
    let result = dish.filter(item => item.category === category);
    let output = '';

    result.forEach(item => {
        output += `<li><b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category}</li>`;
    })

    document.getElementById('filteredProductList').innerHTML = output;
};
