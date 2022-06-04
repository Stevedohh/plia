import { Component, createEffect, createSignal } from 'solid-js';
import { createField } from '@felte/solid';

import { TinyNumberInput } from '../TinyNumberInput/TinyNumberInput';
import { MeasureUnitsDropdown } from '../MeasurementsUnitsDropdown/MeasureUnitsDropdown';
import { generateSizeValue } from './utils/geneterateSizeValue';
import { extractSizeValues } from './utils/extractSizeValues';
import { MeasureUnit } from '../MeasurementsUnitsDropdown/measureUnits.config';

import styles from './styles.module.scss';

type SizeControlProps = {
  name: string;
  value: string;
  label?: string;
}

export const SizeControl: Component<SizeControlProps> = (props) => {
  const { field, onChange } = createField(props.name ?? '');
  const { number: sizeValue, measurement } = extractSizeValues(props.value);
  const [ number, setNumber ] = createSignal<number>(sizeValue || null);
  const [ measurementUnit, setMeasurementUnit ] = createSignal<MeasureUnit>(measurement || 'auto');

  const isInputDisabled = () => measurementUnit() === 'auto';

  const resetNumberSignal = () => {
    if (measurementUnit() === 'auto') {
      setNumber(null);
    }
  };

  createEffect(() => {
    resetNumberSignal();
    onChange(generateSizeValue(number(), measurementUnit()));
  });

  return (
    <div
      /* @ts-ignore */
      use:field
      class={styles.measurementsControl}
    >
      <span class={styles.measurementsControlLabel}>
        {props.label}
      </span>
      <div class={styles.measurementsControlBody}>
        <TinyNumberInput
          value={number()}
          disabled={isInputDisabled()}
          onChange={(evt) => setNumber(evt.target.value)}
          class={styles.measurementsControlInput}
        />
        <MeasureUnitsDropdown
          onChange={setMeasurementUnit}
          initialValue={measurementUnit()}
          class={styles.measurementsControlDropdown}
        />
      </div>
    </div>
  );
};
