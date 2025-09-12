class Pet {
    constructor() {
        this.name = "Some pet";
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = "Barsik";
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function createAndLog(Ctor) {
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
