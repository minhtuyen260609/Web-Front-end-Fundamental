let count = 0
const button = document.getElementById('btn')
const display = document.getElementById('clickBtn')
button.onclick = () => {
    count++;
    display.textContent = count
}
