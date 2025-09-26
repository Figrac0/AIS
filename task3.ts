//  Создайте декоратор, выполняющий блокировку изменения прототипа класса автомобиль. Необходимо проверить, осталась ли возможность добавления
// сторонних полей в объект после введения декоратора (проверка работоспособности).

function SealPrototype<T extends { new (...args: any[]): {} }>(constructor: T) {
    Object.seal(constructor.prototype);
    console.log(`Прототип класса "${constructor.name}" запечатан.`);
    return constructor;
}

@SealPrototype
class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    info() {
        return `Автомобиль марки ${this.brand}`;
    }
}

const car1 = new Car("Toyota");
console.log(car1.info());

try {
    (Car.prototype as any).newMethod = () => "Новый метод!";
    console.log("Метод добавлен в прототип!");
} catch (e) {
    console.log("Ошибка при добавлении метода в прототип:", e);
}

(car1 as any).color = "red";
console.log("Новый объект с полем color:", car1);
