function concatTriple(triple) {
    return triple[0] + triple[1] + triple[2];
}
const t1 = ["Hello", " ", "TS"];
console.log("-----------------------------task3-----------------------------");
console.log("Кортеж t1:", t1);
console.log("Конкатенация:", concatTriple(t1));
const t2 = ["А", "Б", "В"];
console.log("Конкатенация:", concatTriple(t2)); // "АБВ"
//errors :
// const bad1: StringTriple = ["только", "две"];
// const bad2: StringTriple = ["раз", "два", 3];
// const bad3: StringTriple = ["раз", "два", "три", "!"];
