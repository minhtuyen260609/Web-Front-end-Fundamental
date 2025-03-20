const input = document.getElementById('myInput')
const button = document.getElementById('btn')
const list = document.getElementById('list')
button.onclick = () => {
    let subject = input.value
    if (subject === '') {
        alert('Tên môn học không được để trống!')
    } else {
        const li = document.createElement('li')
        li.textContent = subject
        list.appendChild(li)
        input.value = ''
    }
}