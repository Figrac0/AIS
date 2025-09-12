enum PrinterType {
    Inkjet = "inkjet",
    Laser = "laser",
    LED = "led",
    Thermal = "thermal",
    DotMatrix = "dot-matrix",
    SolidInk = "solid-ink",
}

function humanize(t: PrinterType): string {
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

const myPrinter: PrinterType = PrinterType.Laser;
console.log("-----------------------------task4-----------------------------");
console.log("Значение:", myPrinter);
console.log("Человеческое название:", humanize(myPrinter));

console.log("Все типы:", Object.values(PrinterType));
