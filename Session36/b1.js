const name = localStorage.getItem('name');
const formContainer = document.getElementById('form-container');
const greetingContainer = document.getElementById('greeting-container');
const greetingMessage = document.getElementById('greeting-message');

if (name) {
    showGreeting(name);
} else {
    showForm();
}

function showForm() {
    formContainer.style.display = 'block';
    greetingContainer.style.display = 'none';

    const saveButton = document.getElementById('save-button');
    saveButton.onclick = () => {
        const nameInput = document.getElementById('name-input').value;
        if (nameInput) {
            localStorage.setItem('name', nameInput);
            showGreeting(nameInput);
        }
    };
}

function showGreeting(name) {
    formContainer.style.display = 'none';
    greetingContainer.style.display = 'block';

    greetingMessage.textContent = `👋 Chào bạn, ${name}!`;
}