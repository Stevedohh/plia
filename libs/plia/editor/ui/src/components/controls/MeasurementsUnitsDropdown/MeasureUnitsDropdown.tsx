/* eslint-disable no-undef */

import {
  Component, createEffect, createSignal, For, onCleanup, Show,
} from 'solid-js';
import classNames from 'classnames';

import { useBoolean } from '@plia/plia/hooks';

import {
  MeasurementsUnitsDropdownProps,
  MeasureUnit, measureUnits,
} from './measureUnits.config';

import styles from './styles.module.scss';

export const MeasureUnitsDropdown: Component<MeasurementsUnitsDropdownProps> = (props) => {
  const [ selectedMeasure, setSelectedMeasure ] = createSignal<MeasureUnit>(props.initialValue || 'auto');
  const { value: isDropdownOpen, toggle: toggleIsDropdownOpen, setFalse: hideIsDropdownOpen } = useBoolean(false);

  const onMeasureSelect = (unit: MeasureUnit) => () => {
    setSelectedMeasure(unit);
    props.onChange(unit);
  };

  const hideDropdown = (evt: MouseEvent) => {
    const element = evt.target as HTMLDivElement;

    if (!element.className.includes(styles.dropdownHead)) {
      hideIsDropdownOpen();
    }
  };

  createEffect(() => {
    window.addEventListener('click', hideDropdown);

    onCleanup(() => window.removeEventListener('click', hideDropdown));
  });

  return (
    <div class={classNames(styles.dropdown, props.class)}>
      <div class={styles.dropdownHead} onClick={toggleIsDropdownOpen}>
        {selectedMeasure()}
      </div>
      <Show when={isDropdownOpen()}>
        <div class={styles.dropdownBody}>
          <For each={measureUnits}>
            {(unit) => <button class={styles.dropdownBodyBtn} onClick={onMeasureSelect(unit)}>{unit}</button>}
          </For>
        </div>
      </Show>
    </div>
  );
};
