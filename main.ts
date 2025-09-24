import { Transport } from "./task4";

// Создаём владельца
const owner = new Transport.OwnerImpl({
    lastName: "Сидоров",
    firstName: "Пётр",
    patronymic: "Алексеевич",
    birthDate: new Date(1990, 2, 20),
    documentType: Transport.DocType.Passport,
    documentSeries: "1234",
    documentNumber: "567890",
});

// Создаём автомобиль
const car = new Transport.CarImpl(
    "Audi",
    "A6",
    2021,
    "WAUZ6C12345678901",
    "А222ВС77",
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Business
);

// Создаём мотоцикл
const bike = new Transport.MotorbikeImpl(
    "Yamaha",
    "R1",
    2022,
    "JYARN23E0NA012345",
    "M123MM63",
    owner,
    "Алюминиевая",
    true
);

// Создаём хранилище
const storage = new Transport.VehicleStorageImpl<Transport.CarImpl>();
storage.add(car);

console.log("\n=== Проверка из другого файла ===");
owner.printInfo();
car.printInfo();
bike.printInfo();

console.log("\n=== Хранилище ===");
for (const v of storage.getAll()) {
    v.printInfo();
}
