export namespace Transport {
    // ===== Перечисления =====
    export enum DocType {
        Passport = "Passport",
        DriverLicense = "DriverLicense",
        NationalID = "NationalID",
        ForeignPassport = "ForeignPassport",
    }

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

    // ===== Интерфейсы =====
    export interface Owner {
        lastName: string;
        firstName: string;
        patronymic: string;
        birthDate: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
        printInfo(): void;
    }

    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
        printInfo(): void;
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    export interface Motorbike extends Vehicle {
        frameType: string;
        isSport: boolean;
    }

    export interface VehicleStorage<T extends Vehicle> {
        createdAt: Date;
        items: T[];
        getAll(): T[];
    }

    // ===== Реализация Owner =====
    type OwnerInit = {
        lastName: string;
        firstName: string;
        patronymic: string;
        birthDate: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
    };

    export class OwnerImpl implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _patronymic: string;
        private _birthDate: Date;
        private _documentType: DocType;
        private _documentSeries: string;
        private _documentNumber: string;

        constructor(init: OwnerInit) {
            this._lastName = init.lastName;
            this._firstName = init.firstName;
            this._patronymic = init.patronymic;
            this._birthDate = init.birthDate;
            this._documentType = init.documentType;
            this._documentSeries = init.documentSeries;
            this._documentNumber = init.documentNumber;
        }

        get lastName() {
            return this._lastName;
        }
        set lastName(v: string) {
            this._lastName = v;
        }

        get firstName() {
            return this._firstName;
        }
        set firstName(v: string) {
            this._firstName = v;
        }

        get patronymic() {
            return this._patronymic;
        }
        set patronymic(v: string) {
            this._patronymic = v;
        }

        get birthDate() {
            return this._birthDate;
        }
        set birthDate(v: Date) {
            this._birthDate = v;
        }

        get documentType() {
            return this._documentType;
        }
        set documentType(v: DocType) {
            this._documentType = v;
        }

        get documentSeries() {
            return this._documentSeries;
        }
        set documentSeries(v: string) {
            this._documentSeries = v;
        }

        get documentNumber() {
            return this._documentNumber;
        }
        set documentNumber(v: string) {
            this._documentNumber = v;
        }

        private formatDate(d: Date): string {
            const dd = ("0" + d.getDate()).slice(-2);
            const mm = ("0" + (d.getMonth() + 1)).slice(-2);
            return `${dd}.${mm}.${d.getFullYear()}`;
        }

        printInfo(): void {
            console.log("=== Владелец ===");
            console.log(
                `ФИО: ${this.lastName} ${this.firstName} ${this.patronymic}`
            );
            console.log(`Дата рождения: ${this.formatDate(this.birthDate)}`);
            console.log(`Документ: ${this.documentType}`);
            console.log(`Серия: ${this.documentSeries}`);
            console.log(`Номер: ${this.documentNumber}`);
        }
    }

    // ===== Реализация Vehicle =====
    type VehicleInit = {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
    };

    export class VehicleImpl implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _regNumber: string;
        private _owner: Owner;

        constructor(init: VehicleInit) {
            this._brand = init.brand;
            this._model = init.model;
            this._year = init.year;
            this._vin = init.vin;
            this._regNumber = init.regNumber;
            this._owner = init.owner;
        }

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

        printInfo(): void {
            console.log("=== Транспортное средство ===");
            console.log(`Марка: ${this.brand}`);
            console.log(`Модель: ${this.model}`);
            console.log(`Год выпуска: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Регистрационный номер: ${this.regNumber}`);
        }
    }

    // ===== Реализация Car =====
    export class CarImpl extends VehicleImpl implements Car {
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner,
            private _bodyType: BodyType,
            private _carClass: CarClass
        ) {
            super({ brand, model, year, vin, regNumber, owner });
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
            super.printInfo();
            console.log(`Тип кузова: ${this.bodyType}`);
            console.log(`Класс автомобиля: ${this.carClass}`);
        }
    }

    // ===== Реализация Motorbike =====
    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner,
            private _frameType: string,
            private _isSport: boolean
        ) {
            super({ brand, model, year, vin, regNumber, owner });
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
            super.printInfo();
            console.log(`Тип рамы: ${this.frameType}`);
            console.log(`Спортивный: ${this.isSport ? "Да" : "Нет"}`);
        }
    }

    // ===== Реализация VehicleStorage =====
    export class VehicleStorageImpl<T extends Vehicle>
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
}

// === Использование пространства имён ===
const owner = new Transport.OwnerImpl({
    lastName: "Сидоров",
    firstName: "Пётр",
    patronymic: "Алексеевич",
    birthDate: new Date(1990, 2, 20),
    documentType: Transport.DocType.Passport,
    documentSeries: "1234",
    documentNumber: "567890",
});

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

const storage = new Transport.VehicleStorageImpl<Transport.CarImpl>();
storage.add(car);

console.log("\n=== Проверка namespace Transport ===");
owner.printInfo();
car.printInfo();
bike.printInfo();

console.log("\n=== Хранилище ===");
for (const v of storage.getAll()) {
    v.printInfo();
}
