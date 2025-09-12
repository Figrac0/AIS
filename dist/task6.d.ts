declare enum TriplePosition {
    First = "first",
    Second = "second",
    Third = "third"
}
type StringTriplee = [string, string, string];
type TripleInfo = {
    triple: StringTriple;
    description: string;
    length: number;
    important: boolean;
    highlight: TriplePosition;
};
declare function makeTripleInfo(triple: StringTriplee, highlight: TriplePosition): TripleInfo;
declare const myTriple: StringTriplee;
declare const info: TripleInfo;
