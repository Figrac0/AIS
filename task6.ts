enum TriplePosition {
    First = "first",
    Second = "second",
    Third = "third",
}

//  из задания 3
// type StringTriple= [string, string, string];

// Тип объекта
type TripleInfo = {
    triple: StringTriple;
    description: string;
    length: number;
    important: boolean;
    highlight: TriplePosition;
};

// Функция создания объекта
function makeTripleInfo(
    triple: StringTriple,
    highlight: TriplePosition
): TripleInfo {
    return {
        triple,
        description: "Пример объекта с кортежем",
        length: triple.join("").length,
        important: true,
        highlight,
    };
}

const myTriple: StringTriple = ["Hello", " ", "TS"];
const info: TripleInfo = makeTripleInfo(myTriple, TriplePosition.Second);

console.log("-----------------------------task6-----------------------------");
console.log("Объект:", info);
console.log("JSON:", JSON.stringify(info, null, 2));
