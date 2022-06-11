import { MeasureUnit } from '../measureUnits.config';

export const filterMeasureUnits = (measureUnits, excludedMeasureUnits): Array<MeasureUnit> => {
  if (!measureUnits?.length && !excludedMeasureUnits?.length) {
    return [];
  }

  return measureUnits?.filter((unit) => !excludedMeasureUnits?.includes(unit));
};
