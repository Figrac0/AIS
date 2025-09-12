function minOfRealNum(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Массив пустой");
    }

    let min = arr[0];
    if (Number.isNaN(min)) {
        throw new Error("В массиве присутствует Nan!");
    }

    for (let i = 0; i <= arr.length; i++) {
        const num = arr[i];
        if (Number.isNaN(num)) {
            throw new Error(`В массиве присутствует Nan в индексе ${i}`);
        }

        if (num < min) min = num;
    }
    return min;
}

const sample = [3.2, -1.5, 0, 7.9, -2.01];
console.log("Массив:", sample);
console.log("Минимум:", minOfRealNum(sample));
