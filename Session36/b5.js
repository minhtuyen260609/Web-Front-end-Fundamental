let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Lưu danh sách công việc vào localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render các công việc ra 3 cột dựa theo trạng thái
function renderTasks() {
    const pendingTasks = document.getElementById("pendingTasks");
    const inProgressTasks = document.getElementById("inProgressTasks");
    const doneTasks = document.getElementById("doneTasks");

    // Xóa nội dung cũ
    pendingTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const p = document.createElement("p");
        p.innerText = task.name;
        taskDiv.appendChild(p);

        // Nếu công việc chưa ở trạng thái "done" thì thêm nút chuyển trạng thái
        if (task.status !== "done") {
            const btn = document.createElement("button");
            btn.innerText = "Chuyển tiếp";
            btn.onclick = function () {
                updateTaskStatus(task.id);
            };
            taskDiv.appendChild(btn);
        }

        // Hiển thị công việc vào cột tương ứng dựa theo trạng thái
        if (task.status === "pending") {
            pendingTasks.appendChild(taskDiv);
        } else if (task.status === "inProgress") {
            inProgressTasks.appendChild(taskDiv);
        } else if (task.status === "done") {
            doneTasks.appendChild(taskDiv);
        }
    });
}

// Xử lý thêm công việc mới
function addTask() {
    const input = document.getElementById("taskName");
    const name = input.value.trim();
    if (name === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }
    // Tạo công việc mới với id duy nhất và trạng thái mặc định "pending"
    const task = { id: Date.now(), name: name, status: "pending" };
    tasks.push(task);
    saveTasks();
    renderTasks();
    input.value = "";
}

// Cập nhật trạng thái công việc: pending -> inProgress, inProgress -> done
function updateTaskStatus(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            if (task.status === "pending") {
                task.status = "inProgress";
            } else if (task.status === "inProgress") {
                task.status = "done";
            }
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Gán sự kiện cho nút "Thêm"
document.querySelector(".task-input button").addEventListener("click", addTask);

// Render lại danh sách công việc khi tải trang
window.onload = function () {
    renderTasks();
};