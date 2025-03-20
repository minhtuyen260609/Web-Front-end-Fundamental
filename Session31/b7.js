let todoList = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false },
];

function renderTodo() {
    let listTodos = document.getElementById("myUl")
    todoList.forEach(function (item) {
        if (item.completed === false) {
            listTodos.innerHTML += `<li>${item.task} <span class="close" onclick="deleteTodo${item.id}">X</span></li>`
        } else {
            listTodos.innerHTML += `<li class="checked">${item.task} <span class="close" onclick="deleteTodo${item.id}">X</span></li>`
        }
    })
}

function addTodo() {
    let inputElement = document.getElementById("myInput").value
    let id = todoList[todoList.length - 1].id + 1
    let todo = {
        id: id,
        task: inputElementValue,
        completed: false,
    }
    todoList.push(todo)
    renderTodo()
}
function deleteTodo(id) {
    todoList = todoList.filter((task) => task.id !== id)
    renderTodo()
}
