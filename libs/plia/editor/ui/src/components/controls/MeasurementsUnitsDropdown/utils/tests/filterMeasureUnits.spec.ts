import { filterMeasureUnits } from '../filterMeasureUnits';

describe('filterMeasureUnits related tests', () => {
  it('Should return empty array if params not passed', () => {
    const result = filterMeasureUnits(undefined, undefined);

    expect(result).toStrictEqual([]);
  });

  it('Should return measureUnits array without changes if excludedUnits not passed ', () => {
    const result = filterMeasureUnits(['px', 'auto', 'rem'], undefined);

    expect(result).toStrictEqual(['px', 'auto', 'rem']);
  });

  it('Should filter measure units from excluded units', () => {
    const result = filterMeasureUnits(['auto', 'px', '%', 'rem'], ['auto', 'rem']);

    expect(result).toStrictEqual(['px', '%']);
  });

  it('Should filter measure units from excluded units even it does not exists', () => {
    const result = filterMeasureUnits(['auto', 'px', '%', 'rem'], ['auto', 'rem', 'apple']);

    expect(result).toStrictEqual(['px', '%']);
  });
});
