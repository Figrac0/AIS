export enum DocType {
    Passport = "Passport",
    DriverLicense = "DriverLicense",
    NationalID = "NationalID",
    ForeignPassport = "ForeignPassport",
}

export interface Owner {
    lastName: string;
    firstName: string;
    patronymic: string;
    birthDate: Date;
    documentType: DocType; //только одно из значений DocType
    documentSeries: string;
    documentNumber: string;

    printInfo(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    regNumber: string;
    owner: Owner;

    printInfo(): void;
}

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
    private _lastName: string; //нельзя было обращаться напрямую
    private _firstName: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: DocType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(init: OwnerInit) {
        this._lastName = init.lastName; //заполняем все приватные поля
        this._firstName = init.firstName;
        this._patronymic = init.patronymic;
        this._birthDate = init.birthDate;
        this._documentType = init.documentType;
        this._documentSeries = init.documentSeries;
        this._documentNumber = init.documentNumber;
    }

    get lastName() {
        //позволяет прочитать приватное поле
        return this._lastName;
    }
    set lastName(v: string) {
        //позволяет изменить его
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

class VehicleImpl implements Vehicle {
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

const owner = new OwnerImpl({
    lastName: "Иванов",
    firstName: "Иван",
    patronymic: "Иванович",
    birthDate: new Date(1995, 5, 15),
    documentType: DocType.Passport,
    documentSeries: "6304",
    documentNumber: "123456",
});

const vehicle = new VehicleImpl({
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    vin: "JTNBF3HK4K0123456",
    regNumber: "А123ВС63",
    owner,
});

owner.printInfo();
vehicle.printInfo();
