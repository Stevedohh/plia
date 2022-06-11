export const measureUnits = ['auto', 'px', '%', 'em', 'rem', 'vw', 'vh'] as const;

export type MeasureUnit = typeof measureUnits[number];

export type MeasurementsUnitsDropdownProps = {
  onChange: (unit: MeasureUnit) => void;
  initialValue?: MeasureUnit;
  class?: string;
  excludedMeasureUnits?: Array<MeasureUnit>;
};
