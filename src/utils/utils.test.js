import { stringPriceToNumber, replaceDot } from './utils';

describe('stringPriceToNumber function', () => {
  it('remove dollar sign and convert in number', () => {
    const stringNumber = "$2,345";
    let convert = stringPriceToNumber(stringNumber);

    expect(convert).toBe(2.345);
  });
  describe('replaceDot function', () => {
   it('Replace dot by comma', () => {
     const number = 2.345;
     const convert = replaceDot(number);
     expect(convert).toBe("2,345");
   });
 });
});
