let randomNumber;
let attempt = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Генерация случайного числа от 1 до 100
    document.getElementById('userInput').disabled = false;
    document.getElementById('userInput').value = ''; // Очищаем поле ввода
    document.getElementById("help").innerHTML = "Подсказка:";
    document.getElementById("attempt").innerHTML = `Попыток - `;
    document.querySelector('button').disabled = false; // Включаем кнопку проверки
    attempt = 0;
    showToast(`Началась новая игра!`);
}

function checkGuess() {
    let userInput = document.getElementById('userInput').value;
    
    if (!userInput || userInput < 1 || userInput > 100) {
        showToast("Введите число от 1 до 100!");
        return;
    }

    userInput = parseInt(userInput);

    if (userInput === randomNumber) {
        showToast("Поздравляем! Вы угадали число!");
        document.getElementById("help").innerHTML = "";
        resetGame();
    } else {
        attempt++;
        if (userInput > randomNumber) { 
            document.getElementById("help").innerHTML = "Подсказка: слишком большое число!";
            document.getElementById("attempt").innerHTML = `Попыток - ${attempt}`;
        } else {
            document.getElementById("help").innerHTML = "Подсказка: слишком маленькое число!";
            document.getElementById("attempt").innerHTML = `Попыток - ${attempt}`;
        }
    }
}

function showToast(message) {
    let toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";

    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 5000); // Скрыть toast через 5 секунд
}

function resetGame() {
    setTimeout(() => {
        startGame(); // Начать новую игру после 5 секунд
    }, 5000);
}

// Начинаем игру при загрузке страницы
startGame();
