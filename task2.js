//  Реализуйте на ваш выбор функцию, которая возвращает функцию, которая в свою в свою очередь пишет результат в консоль некоторую строку. Вызвать
// данные функции, показав принцип работы замыканий.
function createLogger(message) {
    return function () {
        console.log("Сообщение из замыкания:", message);
    };
}
const helloLogger = createLogger("Привет");
const byeLogger = createLogger("До свидания");
helloLogger();
byeLogger();
