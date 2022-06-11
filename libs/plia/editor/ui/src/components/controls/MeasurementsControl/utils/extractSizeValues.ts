import { MeasureUnit } from '../../MeasurementsUnitsDropdown/measureUnits.config';

type ExtractSizeValuesOutput = {
  number?: number;
  measurement: MeasureUnit;
};

export const extractSizeValues = (measurementValue: string): ExtractSizeValuesOutput => {
  const parsedNumber = parseFloat(measurementValue);

  const number = Number.isNaN(parsedNumber) ? null : parsedNumber;
  const measurement = (measurementValue?.replace(number?.toString(), '') as MeasureUnit) || null;

  return {
    number,
    measurement,
  };
};
