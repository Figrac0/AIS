// Реализуйте функцию удаления нечетных чисел из одномерного массива натуральных чисел. После удаления одного из таких чисел,
// следует подождать 1 секунду до удаления следующего. Операции удаления следует показывать в консоли

const sleep = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function removeOddSequential(arr: number[]): Promise<number[]> {
    console.log("Исходный массив:", arr);

    while (true) {
        const idx = arr.findIndex((n) => n % 2 === 1);
        if (idx === -1) break;

        const [removed] = arr.splice(idx, 1);
        console.log(`Удалено: ${removed} (индекс ${idx}) ->`, arr);

        await sleep(1000);
    }

    console.log("Готово. Результат:", arr);
    return arr;
}

(async () => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    await removeOddSequential(data);
})();
