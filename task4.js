// task4.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Декоратор метода: преобразует результат метода в ЗАГЛАВНЫЕ буквы
function Uppercase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value; // сохраняем оригинальный метод
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args); // вызываем оригинал
        if (typeof result === "string") {
            return result.toUpperCase(); // преобразуем в заглавные
        }
        return result;
    };
    return descriptor;
}
// Класс Автомобиль для задания 4
class CarTask4 {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    info() {
        return `Автомобиль марки ${this.brand}, год выпуска ${this.year}`;
    }
}
__decorate([
    Uppercase
], CarTask4.prototype, "info", null);
// Проверка
const carTask4 = new CarTask4("Toyota", 2020);
console.log(carTask4.info());
// => "АВТОМОБИЛЬ МАРКИ TOYOTA, ГОД ВЫПУСКА 2020"
