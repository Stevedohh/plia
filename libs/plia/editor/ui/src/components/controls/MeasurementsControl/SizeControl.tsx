import { Component, createEffect, createSignal } from 'solid-js';

import { TinyNumberInput } from '../TinyNumberInput/TinyNumberInput';
import { MeasureUnitsDropdown } from '../MeasurementsUnitsDropdown/MeasureUnitsDropdown';
import { generateSizeValue } from './utils/geneterateSizeValue';
import { extractSizeValues } from './utils/extractSizeValues';
import { MeasureUnit } from '../MeasurementsUnitsDropdown/measureUnits.config';

import styles from './styles.module.scss';

type SizeControlProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  excludedMeasureUnits?: Array<MeasureUnit>;
};

export const SizeControl: Component<SizeControlProps> = (props) => {
  const { number: size, measurement } = extractSizeValues(props.value);
  const [number, setNumber] = createSignal<number>(size || null);
  const [measurementUnit, setMeasurementUnit] = createSignal<MeasureUnit>(measurement || 'auto');

  const isInputDisabled = () => measurementUnit() === 'auto';

  const onTinyNumberInputChange = (evt) => {
    setNumber(evt.target.value);
  };

  const resetNumberSignal = () => {
    if (measurementUnit() === 'auto') {
      setNumber(null);
    }
  };

  createEffect(() => {
    resetNumberSignal();
    props.onChange(generateSizeValue(number(), measurementUnit()));
  });

  return (
    <div class={styles.measurementsControl}>
      <span class={styles.measurementsControlLabel}>{props.label}</span>
      <div class={styles.measurementsControlBody}>
        <TinyNumberInput
          value={number()}
          disabled={isInputDisabled()}
          onChange={onTinyNumberInputChange}
          class={styles.measurementsControlInput}
        />
        <MeasureUnitsDropdown
          onChange={setMeasurementUnit}
          initialValue={measurementUnit()}
          class={styles.measurementsControlDropdown}
          excludedMeasureUnits={props.excludedMeasureUnits}
        />
      </div>
    </div>
  );
};
