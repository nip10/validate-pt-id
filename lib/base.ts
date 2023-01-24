abstract class Base {
  abstract generate(): string;
  abstract validate(value: string): boolean;
}

export default Base;
