import { describe, it, expect } from 'vitest';
import { generateCc, validateCc } from '../index';

describe('cc - validator', () => {
  it('should return true for valid cc', async () => {
    const validCcs = ['168893797ZY2', '150956894ZY9', '321168429ZY5'];
    for (const cc of validCcs) {
      expect(validateCc(cc)).toBe(true);
    }
  });

  it('should return false for cc with invalid type/size', async () => {
    expect(validateCc('')).toBe(false);
    expect(validateCc('123')).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc(null)).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc(undefined)).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc(123)).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc(new Date())).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc({ foo: 'bar' })).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc([123])).toBe(false);
    // @ts-expect-error invalid type for testing purposes
    expect(validateCc(() => 123)).toBe(false);
  });

  it('should return false for cc with invalid check digit', function () {
    expect(validateCc('168893797ZY9'));
  });
});

describe('cc - generator', () => {
  // This needs to be run after the validator tests
  it('should generate a valid cc', async () => {
    for (let i = 0; i < 1000; i++) {
      expect(validateCc(generateCc())).toBe(true);
    }
  });
});
