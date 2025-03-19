let employees = []
let n
while (n <= 0 || isNaN(n)) {
    n = +prompt(`Moi nhap so luong nhan vien:`)
    if (n <= 0 || isNaN(n)) {
        alert(`So luong nhan vien khong hop le`)
    }
}
let j = 1
for (let i = 0; i < n; i++) {
    let id = j
    j++
    let name = prompt(`Moi nhap ten nhan vien thu ${i + 1}:`)
    let age = +prompt(`Moi nhap tuoi nhan vien thu ${i + 1}:`)
    let address = prompt(`Moi nhap dia chi nhan vien thu ${i + 1}:`)
    employees.push({ id, name, age, address })
}
let table = document.getElementById("table")
table.innerHTML += `
  <tr>
    <th>STT</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>ADDRESS</th>
  </tr>
`;
employees.forEach(function (element, index) {
    table.innerHTML += `
    <tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.age}</td>
      <td>${element.address}</td>
    </tr>
  `;
})