let employees = JSON.parse(localStorage.getItem('employees')) || []
renderEmployee()
function addEmployee() {
    const name = document.getElementById('name').value.trim()
    const position = document.getElementById('position').value.trim()

    if (name === '' || position === '') {
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }
    employees.push({ name, position })
    localStorage.setItem('employees', JSON.stringify(employees))
    renderEmployee()
    document.getElementById('name').value = ''
    document.getElementById('position').value = ''
}
function renderEmployee() {
    const employeeList = document.getElementById('employeeList')
    employeeList.innerHTML = ''

    employees.forEach((employee, index) => {
        employeeList.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
      </tr>
    `
    })
}