import { generateSizeValue } from '../geneterateSizeValue';

describe('generateSizeValue related tests', () => {
  it('Should return valid size value if all params are passed', () => {
    const result = generateSizeValue(40, 'px');

    expect(result).toBe('40px');
  });

  it('Should return "auto" size value if number are not passed and measurement is auto', () => {
    const result = generateSizeValue(null, 'auto');

    expect(result).toBe('auto');
  });

  it('Should return "auto" size value if number are not passed and measurement is px', () => {
    const result = generateSizeValue(null, 'px');

    expect(result).toBe('auto');
  });

  it('Should return "auto" size value if number are passed', () => {
    const result = generateSizeValue(50, 'auto');

    expect(result).toBe('auto');
  });
});
