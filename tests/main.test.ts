import { describe, it, expect } from 'vitest';
import add from '../index';

describe('add', () => {
  it('should add two numbers', async () => {
    const num1 = 1;
    const num2 = 2;
    const result = add(num1, num2);
    expect(result).toBe(3);
  });
});
