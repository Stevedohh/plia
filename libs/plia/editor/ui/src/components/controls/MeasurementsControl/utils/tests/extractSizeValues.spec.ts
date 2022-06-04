import { extractSizeValues } from '../extractSizeValues';

describe('extractSizeValues related tests', () => {
  it('Should extract size units from "100px"', () => {
    const result = extractSizeValues('100px');

    expect(result).toStrictEqual({
      number: 100,
      measurement: 'px',
    });
  });

  it('Should extract size units from "10.5px"', () => {
    const result = extractSizeValues('10.5px');

    expect(result).toStrictEqual({
      number: 10.5,
      measurement: 'px',
    });
  });

  it('Should extract size units from "256rem"', () => {
    const result = extractSizeValues('256rem');

    expect(result).toStrictEqual({
      number: 256,
      measurement: 'rem',
    });
  });

  it('Should return auto if passed param is "auto"', () => {
    const result = extractSizeValues('auto');

    expect(result).toStrictEqual({
      number: null,
      measurement: 'auto',
    });
  });

  it('Should return object with empty values if passed param is empty string', () => {
    const result = extractSizeValues('');

    expect(result).toStrictEqual({
      number: null,
      measurement: '',
    });
  });

  it('Should return object with null values if passed param is null', () => {
    const result = extractSizeValues(null);

    expect(result).toStrictEqual({
      number: null,
      measurement: null,
    });
  });
});
