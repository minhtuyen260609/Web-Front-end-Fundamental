
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const renderTasks = () => {
    const list = document.getElementById("taskList");
    list.innerHTML = tasks.map((task, i) =>
        `<li>
      <span>${task}</span>
      <div>
        <button onclick="editTask(${i})">Sửa</button>
        <button onclick="deleteTask(${i})">Xóa</button>
      </div>
    </li>`
    ).join('');
};

const addTask = () => {
    const input = document.getElementById("taskInput");
    const task = input.value;
    if (!task) return alert("Vui lòng nhập công việc!");
    tasks.push(task);
    input.value = "";
    saveTasks();
};

const deleteTask = (i) => {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
        tasks.splice(i, 1);
        saveTasks();
    }
};

const editTask = (i) => {
    const newTask = prompt("Chỉnh sửa công việc:", tasks[i]);
    if (newTask !== null && newTask !== "") {
        tasks[i] = newTask.trim();
        saveTasks();
    }
};

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
};

renderTasks();