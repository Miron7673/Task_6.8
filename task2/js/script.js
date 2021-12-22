const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', (event) => {
    alert('Служит для вывода информации в консоль.');
});

const alert_function = document.querySelector('#alert_function');

alert_function.addEventListener('click', (event) => {
    alert('Выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК».\n\n Окно сообщения, которое выводится, является модальным окном.\n\n Слово «модальное» означает, что пользователь не может взаимодействовать со страницей, нажимать другие кнопки и т.п., пока не разберётся с окном. В данном случае – пока не нажмёт на «OK».');
});

const prompt_function = document.querySelector('#prompt_function');

prompt_function.addEventListener('click', (event) => {
    alert('Выводит модальное окно с заголовком, полем для ввода текста, заполненным строкой по умолчанию, и кнопками OK/CANCEL.\n\n Пользователь должен либо что-то ввести и нажать OK, либо отменить ввод кликом на CANCEL или нажатием Esc на клавиатуре.\n\n Вызов prompt возвращает то, что ввёл пользователь – строку или специальное значение null, если ввод отменён.');
});
