class Pet {
    name: string = "Some pet";
    age: number = -1;
    speak(): string {
        return "No speak. I am fish!";
    }
    label?: string;
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = "Barsik";
    age = 2;
    speak(): string {
        return "Miyau!";
    }
}

type Ctor<T> = new () => T;

function createAndLog<T extends Pet>(Ctor: Ctor<T>): T {
    const pet = new Ctor();

    console.log("-------------- task5 --------------");
    console.log("Класс:", Ctor.name);
    console.log("Имя:", pet.name);
    console.log("Возраст:", pet.age);
    console.log("Говорит:", pet.speak());
    if ("label" in pet) {
        console.log("Метка:", pet.label);
    }

    // if ("label" in pet) {
    //     console.log("Метка:", (pet as any).label); // у Dog есть label
    // }

    return pet;
}

const d = createAndLog(Dog);
const c = createAndLog(Cat);
