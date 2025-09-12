declare class Pet {
    name: string;
    age: number;
    speak(): string;
    label?: string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
type Ctor<T> = new () => T;
declare function createAndLog<T extends Pet>(Ctor: Ctor<T>): T;
declare const d: Dog;
declare const c: Cat;
