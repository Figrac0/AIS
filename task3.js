//  Создайте декоратор, выполняющий блокировку изменения прототипа класса автомобиль. Необходимо проверить, осталась ли возможность добавления
// сторонних полей в объект после введения декоратора (проверка работоспособности).
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SealPrototype(constructor) {
    Object.seal(constructor.prototype);
    console.log(`Прототип класса "${constructor.name}" запечатан.`);
    return constructor;
}
let Car = class Car {
    constructor(brand) {
        this.brand = brand;
    }
    info() {
        return `Автомобиль марки ${this.brand}`;
    }
};
Car = __decorate([
    SealPrototype
], Car);
const car1 = new Car("Toyota");
console.log(car1.info());
try {
    Car.prototype.newMethod = () => "Новый метод!";
    console.log("Метод добавлен в прототип!");
}
catch (e) {
    console.log("Ошибка при добавлении метода в прототип:", e);
}
car1.color = "red";
console.log("Новый объект с полем color:", car1);
