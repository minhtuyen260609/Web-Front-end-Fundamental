const input = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
let todos = JSON.parse(localStorage.getItem('todos')) || []
renderTodos()
addBtn.addEventListener('click', function () {
    const todoText = input.value.trim()
    if (todoText === '') return alert('Vui lòng nhập công việc')
    todos.push(todoText)
    saveAndRender()
    input.value = ''
})

todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteBtn')) {
        const index = e.target.getAttribute('data-index')
        todos.splice(index, 1)
        saveAndRender()
    }
})
function saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos()
}
function renderTodos() {
    todoList.innerHTML = ''
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
      <li>${todo} <button class="deleteBtn" data-index="${index}">Xóa</button></li>
    `
    })
}