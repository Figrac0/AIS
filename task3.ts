import { OwnerImpl, DocType } from "./task1";
import { CarImpl, BodyType, CarClass } from "./task2";

// === Интерфейс с обобщением ===
interface VehicleStorage<T extends { printInfo(): void }> {
    createdAt: Date;
    items: T[];
    getAll(): T[];
}

// === Класс-хранилище ===
class VehicleStorageImpl<T extends { printInfo(): void }>
    implements VehicleStorage<T>
{
    createdAt: Date;
    items: T[];

    constructor() {
        this.createdAt = new Date();
        this.items = [];
    }

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

// === Пример использования ===

// Создадим владельца
const owner = new OwnerImpl({
    lastName: "Сидоров",
    firstName: "Пётр",
    patronymic: "Алексеевич",
    birthDate: new Date(1990, 2, 20),
    documentType: DocType.DriverLicense,
    documentSeries: "7700",
    documentNumber: "987654",
});

// Создадим пару машин
const car1 = new CarImpl(
    "Audi",
    "A6",
    2021,
    "WAUZ6C12345678901",
    "А222ВС77",
    owner,
    BodyType.Sedan,
    CarClass.Business
);

const car2 = new CarImpl(
    "Mercedes",
    "E200",
    2020,
    "WDBZF4JB5LA123456",
    "М555ММ77",
    owner,
    BodyType.SUV,
    CarClass.Premium
);

// Создадим хранилище
const storage = new VehicleStorageImpl<typeof car1>();

storage.add(car1);
storage.add(car2);

console.log("=== Хранилище ТС ===");
for (const v of storage.getAll()) {
    v.printInfo();
}
