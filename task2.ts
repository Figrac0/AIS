function countZeros(matrix: number[][]): number {
    if (!Array.isArray(matrix)) {
        throw new Error("Матрица должна быть массивом массивов");
    }

    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];

        if (!Array.isArray(row)) {
            throw new Error(`Строка ${i} не является массивом`);
        }

        for (let j = 0; j < row.length; j++) {
            const val = row[j];
            if (!Number.isFinite(val) || !Number.isInteger(val)) {
                throw new Error("Элементы должны быть целыми числами");
            }

            if (val === 0) {
                count++;
            }
        }
    }

    return count;
}

const m1 = [
    [1, 0, -3],
    [0, 5, 0],
    [7, 8, 9],
];
console.log("-----------------------------task2-----------------------------");
console.log("Матрица m1:", m1);
console.log("Количество нулей:", countZeros(m1));

console.log("Пустая матрица:", countZeros([]));
console.log("Неровные строки:", countZeros([[0, 1], [], [2, 0, 0]]));
