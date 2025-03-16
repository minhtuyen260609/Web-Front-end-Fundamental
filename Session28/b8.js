let employees = [] // Danh sách nhân viên

let menu = 
`
Quản lý nhân viên:
1. Thêm nhân viên mới
2. Xóa nhân viên theo id
3. Cập nhật lương theo id
4. Tìm kiếm nhân viên theo tên
5. Thoát chương trình
Lựa chọn của bạn: 
`


function themNhanVien() {
    let id = prompt("Nhập id:")
    let name = prompt("Nhập tên:")
    let position = prompt("Nhập chức vụ:")
    let salary = parseFloat(prompt("Nhập lương:"))
    employees.push({ id, name, position, salary })
    console.log("Đã thêm nhân viên mới.")
}

function xoaNhanVien() {
    let id = prompt("Nhập id nhân viên cần xóa:")
    let index = -1
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            index = i
            break
        }
    }
    if (index !== -1) {
        employees.splice(index, 1)
        console.log("Xóa thành công.")
    } else {
        console.log("Không tìm thấy nhân viên.")
    }
}

function capNhatLuong() {
    let id = prompt("Nhập id nhân viên cần cập nhật lương:")
    let employee = null
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employee = employees[i]
            break
        }
    }
    if (employee) {
        let newSalary = parseFloat(prompt(`Nhập lương mới cho nhân viên ${employee.name}:`))
        employee.salary = newSalary
        console.log("Đã cập nhật lương.")
    } else {
        console.log("Không tìm thấy nhân viên.")
    }
}

function timKiemNhanVien() {
    let keyword = prompt("Nhập tên hoặc từ khóa cần tìm:")
    let results = []
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase().includes(keyword.toLowerCase())) {
            results.push(employees[i])
        }
    }
    if (results.length > 0) {
        console.log("Kết quả tìm kiếm:")
        for (let i = 0; i < results.length; i++) {
            console.log(`- ID: ${results[i].id}, Tên: ${results[i].name}, Chức vụ: ${results[i].position}, Lương: ${results[i].salary}`)
        }
    } else {
        console.log("Không tìm thấy nhân viên.")
    }
}
do {
    let choice = +prompt(menu)
    switch (choice) {
        case 1:
            themNhanVien()
            break
        case 2:
            xoaNhanVien()
            break
        case 3:
            capNhatLuong()
            break
        case 4:
            timKiemNhanVien()
            break
        case 5:
            console.log("Thoát chương trình.")
            break
        default:
            console.log("Lựa chọn không hợp lệ.")
    }
} while (choice === 5);