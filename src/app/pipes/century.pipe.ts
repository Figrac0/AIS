import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'century',
  standalone: true,
})
export class CenturyPipe implements PipeTransform {
  transform(birthYear: number | string): string {
    const y = Number(birthYear);

    if (!Number.isFinite(y)) return 'Родился в неизвестном веке';
    if (y <= 0) return 'Родился до н. э.';

    const century = Math.floor((y - 1) / 100) + 1;
    return `Родился в ${this.toRoman(century)} веке нашей эры`;
  }

  // Преобразование числа в римскую запись
  private toRoman(n: number): string {
    const map: Array<[number, string]> = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ];
    let res = '';
    let num = n;
    for (const [val, sym] of map) {
      while (num >= val) {
        res += sym;
        num -= val;
      }
    }
    return res;
  }
}
