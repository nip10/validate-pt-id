import Base from './base';

class Cc extends Base {
  private readonly CHAR_CONVERSION_TABLE = new Map<string, number>([
    ['0', 0],
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['A', 10],
    ['B', 11],
    ['C', 12],
    ['D', 13],
    ['E', 14],
    ['F', 15],
    ['G', 16],
    ['H', 17],
    ['I', 18],
    ['J', 19],
    ['K', 20],
    ['L', 21],
    ['M', 22],
    ['N', 23],
    ['O', 24],
    ['P', 25],
    ['Q', 26],
    ['R', 27],
    ['S', 28],
    ['T', 29],
    ['U', 30],
    ['V', 31],
    ['W', 32],
    ['X', 33],
    ['Y', 34],
    ['Z', 35],
  ]);

  private readonly CHAR_CONVERSION_TABLE_KEYS = Array.from(
    this.CHAR_CONVERSION_TABLE.keys()
  );

  private readonly CC_LENGTH = 12;

  private calculateSum(value: string): number {
    const sum = value.split('').reduce((acc, digit, i) => {
      let d = this.CHAR_CONVERSION_TABLE.get(digit);
      if (d === undefined || (i < 9 && d > 9)) {
        return -1;
      }
      if (i % 2 === 0) {
        d *= 2;
        if (d > 9) {
          d -= 9;
        }
      }
      acc += d;
      return acc;
    }, 0);
    return sum % 10;
  }

  private generateCheckDigit(value: string): number {
    const sum = value
      .split('')
      .reduce((acc, curr, i) => acc + Number(curr) * (value.length + 1 - i), 0);
    const mod = sum % 11;
    return mod === 0 || mod === 1 ? 0 : 11 - mod;
  }

  private generateRandomChars(length: number): string {
    const randomChars = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * this.CHAR_CONVERSION_TABLE.size
      );
      const randomChar = this.CHAR_CONVERSION_TABLE_KEYS[randomIndex];
      randomChars.push(randomChar);
    }
    return randomChars.join('');
  }

  generate(): string {
    const randomDigits = Math.floor(Math.random() * 99999999)
      .toString()
      .padStart(8, '0');
    const checkDigit = this.generateCheckDigit(randomDigits.toString());
    const randomChars = this.generateRandomChars(2);
    const finalDigit =
      (10 - this.calculateSum(`${randomDigits}${checkDigit}${randomChars}`)) %
      10;
    return `${randomDigits}${checkDigit}${randomChars}${finalDigit}`;
  }

  validate(value: string): boolean {
    if (!value || typeof value !== 'string' || value.length !== this.CC_LENGTH)
      return false;
    const formatRegex = /\d{9}[a-zA-Z0-9]{2}\d{1}/;
    if (!formatRegex.test(value)) return false;
    const sum = this.calculateSum(value);
    return sum === 0;
  }
}

export default Cc;
