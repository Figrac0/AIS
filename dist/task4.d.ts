declare enum PrinterType {
    Inkjet = "inkjet",
    Laser = "laser",
    LED = "led",
    Thermal = "thermal",
    DotMatrix = "dot-matrix",
    SolidInk = "solid-ink"
}
declare function humanize(t: PrinterType): string;
declare const myPrinter: PrinterType;
