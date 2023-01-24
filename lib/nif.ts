import Base from './base';

class Nif extends Base {
  private readonly NIF_PREFIXES: string[] = [
    // personal
    '1',
    '2',
    '3',
    // company
    '5',
    // public company
    '6',
    '8',
    // irregular company or temp nif
    '45',
    '70',
    '71',
    '72',
    '74',
    '75',
    '77',
    '79',
    '90',
    '91',
    '98',
    '99',
  ];

  private readonly NIF_LENGTH = 9;

  private generateCheckDigit(value: string): number {
    const sum = value
      .split('')
      .reduce((acc, curr, i) => acc + Number(curr) * (value.length + 1 - i), 0);
    const mod = sum % 11;
    return mod === 0 || mod === 1 ? 0 : 11 - mod;
  }

  generate(): string {
    const prefix = this.NIF_PREFIXES[
      Math.floor(Math.random() * this.NIF_PREFIXES.length)
    ] as string;
    const randomDigits = Math.floor(Math.random() * 99999999)
      .toString()
      .padStart(this.NIF_LENGTH - 1, '0');
    const digitsBase = `${prefix}${randomDigits.slice(prefix.length)}`;
    const checkDigit = this.generateCheckDigit(digitsBase);
    return `${digitsBase}${checkDigit}`;
  }

  validate(value: string): boolean {
    if (!value || typeof value !== 'string' || value.length !== this.NIF_LENGTH)
      return false;
    const nif: string[] = Array.from(value);
    const validationSets = {
      one: ['1', '2', '3', '5', '6', '8'],
      two: [
        '45',
        '70',
        '71',
        '72',
        '74',
        '75',
        '77',
        '79',
        '90',
        '91',
        '98',
        '99',
      ],
    };
    if (
      // https://github.com/microsoft/TypeScript/issues/38000
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      !validationSets.one.includes(nif[0]!) &&
      !validationSets.two.includes(nif.slice(0, 2).join(''))
    ) {
      return false;
    }
    const checkDigit = this.generateCheckDigit(
      value.slice(0, this.NIF_LENGTH - 1)
    );
    return checkDigit.toString() === value[8];
  }
}

export default Nif;
