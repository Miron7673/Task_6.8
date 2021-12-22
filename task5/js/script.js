const clear_button = document.getElementById('clear_Field'); // значение кнопки сброса
let input_text = document.getElementById('Field'); // значение поля ввода
let output_text = document.getElementById('duplicateField'); // значение поля вывода

// функция ввода текста
function input_Text() {
	output_text.textContent = input_text.value;
}

// функция обработки нажатия кнопки
function clear_Field(event) {
    console.log('Введенный текст:' + output_text.textContent); //вывод текста извторого в поля в консоль
    input_text.value = ""; // сброс окна ввода текста
    output_text.textContent = ""; // сброс окна вывода текста
    event.preventDefault(); // запрет стандартного поведения после окончания работы функции
}

input_text.addEventListener('input', input_Text); // вызов функции при нажатии
clear_button.addEventListener('click', clear_Field); // вызов функции при клике