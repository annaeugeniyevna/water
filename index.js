// Елементи
const nameInput= document.getElementById('name-input');
const addBtn = document.getElementById('add-water');
const resetBtn = document.getElementById('reset-water');
const counterDisplay = document.getElementById('counter');
const greeting = document.getElementById('greeting');

let count = 0;
const minGlasses =8;

// Функція оновлення повідомлення
function updateMessage() {
    const name = nameInput.value.trim();

    if (name === '') {
        greeting.textContent = 'Введи своє ім\'я!';
        return;
    }

    if(count < minGlasses) {
        greeting.textContent = `Молодець, ${name} але добова норма ${minGlasses} склянок!`;
    }
    else {
        greeting.textContent = `Чудово, ${name}! Так тримати!`;
    }
}

// Кнопка +1
addBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    updateMessage();
});

// Кнопка обнулити
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
    updateMessage();
});

// Оновлення повідомлення при зміні імені
nameInput.addEventListener('input', updateMessage);

// Акордеон з порадами
const tipsTitle = document.getElementById('tips-title');
const tipsList = document.getElementById('tips-list');

tipsTitle.addEventListener('click', () => {
    if (tipsList.style.display === 'none' ) {
        tipsList.style.display = 'block';
    }
    else {
        tipsList.style.display = 'none';
    }
});

// Зміна теми
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️'; // світла тема
    }
    else {
        themeBtn.textContent = '🌙'; // темна тема
    }
});