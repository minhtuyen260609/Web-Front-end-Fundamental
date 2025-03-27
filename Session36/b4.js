function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById("mode-icon");
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        icon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    } else {
        localStorage.setItem("theme", "light");
        icon.src = "https://img.icons8.com/ios-filled/50/sun.png";
    }
}

window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("mode-icon");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        icon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    }
};