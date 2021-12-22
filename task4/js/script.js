const userTextField = document.querySelector('.name_field'); //присвоить константе текущее значение текста ссылки

function replacement(input_name) {
    const userText = prompt('Введите новый текст ссылки'); //ввод нового текста ссылки
    userText == '' ? alert('Вы не ввели текст! Попробуйте еще раз.') : userTextField.textContent = userText; 
    //замена if и else на тернарные операторы
    // если поле ввода пустое, то окно об ошибке
    // иначе - замена старого текста ссылки на новый
    input_name.preventDefault(); // запрет стандартного поведения после окончания работы функции
}

userTextField.addEventListener('click', replacement); // вызов окна ввода нового текста ссылки