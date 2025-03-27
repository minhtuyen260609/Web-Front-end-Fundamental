let employeeList = JSON.parse(localStorage.getItem("employeeList"))
let tbody = document.getElementById("tbody")
let form = document.getElementById("add-form")
let paginationContainer = document.getElementById("pagination")
let totalPage = 4
let pageSize = 5
render(employeeList)

form.onsubmit = function (event) {
    event.preventDefault()
    let name = form.employeeName.value
    let position = form.position.value
    let employee = {
        id: Math.random(),
        name: name,
        position: position,
    }
    employeeList.push(employee)
    localStorage.setItem(("employeeList", JSON.stringify(employeeList)))
    render()
}
function render() {
    for (const i in employeeList) {
        employeeList[i]
        let tr = `
        <tr>
            <th scope="row">${+i + 1}</th>
            <td>${employeeList[i].name}</td>
            <td>${employeeList[i].position}</td>
        </tr>
        `
        tbody.innerHTML += tr
    }
}
for (let i = 1; i <= totalPage; i++) {
    let li = `<li class="page-item"><a active-page class="page-link" href="#">${i}</a></li>`
    paginationContainer.innerHTML += li
}
paginationContainer.innerHTML += `<li class="page-item"><a class="page-link" href="#">Next</a></li>`
let activePages = document.getElementsByClassName("active-page")
for (const page of activePages) {
    page.onclick = function (event) {
        event.preventDefault();
        let pageIndex = +page.innerText
    }
}