// Перечисление для позиций строк в кортеже
var TriplePosition;
(function (TriplePosition) {
    TriplePosition["First"] = "first";
    TriplePosition["Second"] = "second";
    TriplePosition["Third"] = "third";
})(TriplePosition || (TriplePosition = {}));
// Функция создания объекта
function makeTripleInfo(triple, highlight) {
    return {
        triple,
        description: "Пример объекта с кортежем",
        length: triple.join("").length,
        important: true,
        highlight,
    };
}
// ===== демо =====
const myTriple = ["Hello", " ", "TS"];
const info = makeTripleInfo(myTriple, TriplePosition.Second);
console.log("-----------------------------task6-----------------------------");
console.log("Объект:", info);
console.log("JSON:", JSON.stringify(info, null, 2));
