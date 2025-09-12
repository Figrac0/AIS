var PrinterType;
(function (PrinterType) {
    PrinterType["Inkjet"] = "inkjet";
    PrinterType["Laser"] = "laser";
    PrinterType["LED"] = "led";
    PrinterType["Thermal"] = "thermal";
    PrinterType["DotMatrix"] = "dot-matrix";
    PrinterType["SolidInk"] = "solid-ink";
})(PrinterType || (PrinterType = {}));
function humanize(t) {
    switch (t) {
        case PrinterType.Inkjet:
            return "Струйный принтер";
        case PrinterType.Laser:
            return "Лазерный принтер";
        case PrinterType.LED:
            return "LED-принтер";
        case PrinterType.Thermal:
            return "Термопринтер";
        case PrinterType.DotMatrix:
            return "Матричный принтер";
        case PrinterType.SolidInk:
            return "Твердочернильный принтер";
    }
}
const myPrinter = PrinterType.Laser;
console.log("-----------------------------task4-----------------------------");
console.log("Значение:", myPrinter);
console.log("Человеческое название:", humanize(myPrinter));
console.log("Все типы:", Object.values(PrinterType));
