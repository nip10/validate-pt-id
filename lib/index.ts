import Nif from './nif';
import Cc from './cc';

const generateNif = (): string => {
  const generator = new Nif();
  return generator.generate();
};

const validateNif = (nif: string): boolean => {
  const generator = new Nif();
  return generator.validate(nif);
};

const generateCc = (): string => {
  const generator = new Cc();
  return generator.generate();
};

const validateCc = (cc: string): boolean => {
  const generator = new Cc();
  return generator.validate(cc);
};

export { generateNif, validateNif, generateCc, validateCc };
