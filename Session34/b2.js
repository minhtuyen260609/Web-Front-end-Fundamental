let courses = [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm thì",
    },

    {
        id: 3,
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hiếu Ci ớt ớt",
    },
];
courses = JSON.parse(localStorage.getItem('b2')) || [];
let tableContainer = document.getElementById("infoTable");
let submit = document.getElementById("submitBtn");
displayInfos();
function displayInfos() {
    tableContainer.innerHTML = ` <tr class="thead">
                  <td><b>#</b></td>
                  <td><b>Content</b></td>
                  <td><b>Due date</b></td>
                  <td><b>Status</b></td>
                  <td><b>Assigned to</b></td>
                  <td><b>Action</b></td>
              </tr>`;
    courses.forEach((course, index) => {
        course.id = index + 1
        tableContainer.innerHTML += ` 
            <tr>
              <td>${course.id}</td>
              <td>${course.content}</td>
              <td>${course.dueDate}</td>
              <td>${course.status}</td>
              <td>${course.assignedTo}</td>
              <td>
                  <button class="fix" data-index="${index}">Sửa</button>
                  <button class="delete" data-index="${index}">Xoá</button>
              </td>
           </tr>`;
    });
    document.querySelectorAll(".fix").forEach((btn, index) => {
        btn.onclick = function () {
            fixInfo(Number(this.getAttribute("data-index")));
        };
    });
    document.querySelectorAll(".delete").forEach((btn, index) => {
        btn.onclick = function () {
            deleteInfo(Number(this.getAttribute("data-index")));
        };
    });
    localStorage.setItem('b2', JSON.stringify(courses));
}
function fixInfo(data_index) {
    let id = courses[data_index].id
    let content = prompt(`Enter new Content: `);
    let day = +prompt(`Enter new Date(day): `);
    let month = +prompt(`Enter new Date(month): `);
    let year = +prompt(`Enter new Date(year): `);
    let dueDate = `${year}-${month}-${day}`;
    let status = prompt(`Enter new Status: `);
    let assignedTo = prompt(`Enter new username:`);
    if (dueDate === "" || content === "" || status === "" || assignedTo === "") {
        alert(`Invalid Information`)
    } else {
        courses[data_index] = ({ id, content, dueDate, status, assignedTo })
    }
    displayInfos()
}
function deleteInfo(data_index) {
    courses.splice(data_index, 1)
    displayInfos()
}
submit.onclick = function (event) {

    let content = document.getElementById("content").value;
    let dueDate = document.getElementById("date").value;
    let status = document.getElementById("status").value;
    let assignedTo = document.getElementById("user").value;
    if (dueDate === "" || content === "" || status === "" || assignedTo === "") {
        alert(`Please fill the Form`);
    } else {
        let id = courses.length + 1;
        courses.push({ id, content, dueDate, status, assignedTo });

    }
    displayInfos();
};