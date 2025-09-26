// Реализуйте декоратор метода, выполняющий преобразование возвращаемой строки с некими сведениями об объекте класса Автомобиль, заменяя все
// буквы на ЗАГЛАВНЫЕ.

function Uppercase(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value; // сохраняем оригинальный метод

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args); // вызываем оригинал
        if (typeof result === "string") {
            return result.toUpperCase(); // преобразуем в заглавные
        }
        return result;
    };

    return descriptor;
}

class CarTask4 {
    brand: string;
    year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    @Uppercase
    info() {
        return `Автомобиль марки ${this.brand}, год выпуска ${this.year}`;
    }
}

const carTask4 = new CarTask4("Toyota", 2020);
console.log(carTask4.info());
// TOYOTA, 2020
