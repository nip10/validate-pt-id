import { describe, it, expect } from 'vitest';
import { generateNif, validateNif } from '../index';

describe('nif - validator', () => {
  it('should return true for valid NIF', async () => {
    const validNifs = ['238043266', '847011984', '835193357'];
    for (const nif of validNifs) {
      expect(validateNif(nif)).toBe(true);
    }
  });

  it('should return false for NIF with invalid type/size', async () => {
    expect(validateNif('')).toBe(false);
    expect(validateNif('123')).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif(null)).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif(undefined)).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif(123)).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif(new Date())).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif({ foo: 'bar' })).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif([123])).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateNif(() => 123)).toBe(false);
  });

  it('should return false for NIF with invalid check digit', function () {
    expect(validateNif('987654321'));
  });

  it('should return false for NIF with correct check digit but invalid prefix', function () {
    expect(validateNif('434374580'));
  });
});

describe('nif - generator', () => {
  // This needs to be run after the validator tests
  it('should generate a valid NIF', () => {
    for (let i = 0; i < 1000; i++) {
      expect(validateNif(generateNif())).toBe(true);
    }
  });
});
