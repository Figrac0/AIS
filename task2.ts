import { Owner, OwnerImpl, DocType } from "./task1";

// Перечисления для машины
export enum BodyType {
    Sedan = "Sedan",
    Hatchback = "Hatchback",
    SUV = "SUV",
    Coupe = "Coupe",
    Pickup = "Pickup",
}

export enum CarClass {
    Economy = "Economy",
    Business = "Business",
    Premium = "Premium",
    Sport = "Sport",
}

// Создаём владельца
const owner = new OwnerImpl({
    lastName: "Иванов",
    firstName: "Иван",
    patronymic: "Иванович",
    birthDate: new Date(1995, 5, 15),
    documentType: DocType.Passport,
    documentSeries: "6304",
    documentNumber: "123456",
});

// Базовый интерфейс Vehicle
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    regNumber: string;
    printInfo(): void;
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

export class CarImpl implements Car {
    constructor(
        private _brand: string,
        private _model: string,
        private _year: number,
        private _vin: string,
        private _regNumber: string,
        private _owner: Owner, //owner
        private _bodyType: BodyType,
        private _carClass: CarClass
    ) {}

    get brand() {
        return this._brand;
    }
    set brand(v: string) {
        this._brand = v;
    }

    get model() {
        return this._model;
    }
    set model(v: string) {
        this._model = v;
    }

    get year() {
        return this._year;
    }
    set year(v: number) {
        this._year = v;
    }

    get vin() {
        return this._vin;
    }
    set vin(v: string) {
        this._vin = v;
    }

    get regNumber() {
        return this._regNumber;
    }
    set regNumber(v: string) {
        this._regNumber = v;
    }

    get owner() {
        return this._owner;
    }
    set owner(v: Owner) {
        this._owner = v;
    }

    get bodyType() {
        return this._bodyType;
    }
    set bodyType(v: BodyType) {
        this._bodyType = v;
    }

    get carClass() {
        return this._carClass;
    }
    set carClass(v: CarClass) {
        this._carClass = v;
    }

    printInfo(): void {
        console.log("=== Автомобиль ===");
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.regNumber}`);
        console.log(`Тип кузова: ${this.bodyType}`);
        console.log(`Класс автомобиля: ${this.carClass}`);
    }
}

// ---- Motorbike ----
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
}

class MotorbikeImpl implements Motorbike {
    constructor(
        private _brand: string,
        private _model: string,
        private _year: number,
        private _vin: string,
        private _regNumber: string,
        private _owner: Owner, // owner
        private _frameType: string,
        private _isSport: boolean
    ) {}

    get brand() {
        return this._brand;
    }
    set brand(v: string) {
        this._brand = v;
    }

    get model() {
        return this._model;
    }
    set model(v: string) {
        this._model = v;
    }

    get year() {
        return this._year;
    }
    set year(v: number) {
        this._year = v;
    }

    get vin() {
        return this._vin;
    }
    set vin(v: string) {
        this._vin = v;
    }

    get regNumber() {
        return this._regNumber;
    }
    set regNumber(v: string) {
        this._regNumber = v;
    }

    get owner() {
        return this._owner;
    }
    set owner(v: Owner) {
        this._owner = v;
    }

    get frameType() {
        return this._frameType;
    }
    set frameType(v: string) {
        this._frameType = v;
    }

    get isSport() {
        return this._isSport;
    }
    set isSport(v: boolean) {
        this._isSport = v;
    }

    printInfo(): void {
        console.log("=== Мотоцикл ===");
        console.log(`Марка: ${this.brand}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год выпуска: ${this.year}`);
        console.log(`VIN: ${this.vin}`);
        console.log(`Регистрационный номер: ${this.regNumber}`);
        console.log(`Тип рамы: ${this.frameType}`);
        console.log(`Спортивный: ${this.isSport ? "Да" : "Нет"}`);
    }
}

const car = new CarImpl(
    "BMW",
    "M5",
    2022,
    "WBS3C9C57FP123456",
    "X777XX77",
    owner,
    BodyType.Sedan,
    CarClass.Sport
);

const bike = new MotorbikeImpl(
    "Yamaha",
    "R1",
    2021,
    "JYARN23E0NA012345",
    "M123MM63",
    owner,
    "Алюминиевая",
    true
);

car.printInfo();
bike.printInfo();
