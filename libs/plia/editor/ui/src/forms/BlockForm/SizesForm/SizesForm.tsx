import { Component, For, useContext } from 'solid-js';

import { SidebarFormWrapper } from '@plia/plia/layout';

import { heightSizeControlsSchema, widthSizeControlsSchema } from './schemas/sizeControlsSchema';
import { overflowControlsSchema } from './schemas/overflowControlsSchema';
import { BlockFormContext } from '../BlockFormContext';
import { SizeControl } from '../../../components/controls/MeasurementsControl/SizeControl';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';

import styles from './styles.module.scss';

export const SizesForm: Component = () => {
  const { updateStructure, formData, setFormData } = useContext(BlockFormContext);

  const onSizeControlChange = (controlName) => (value) => setFormData(controlName, value);

  return (
    <SidebarFormWrapper label="Sizes">
      <div class={styles.sizes}>
        <div class={styles.sizesGroup}>
          <For each={widthSizeControlsSchema}>
            {(control) => (
              <SizeControl
                label={control.label}
                value={formData()[control.name]}
                onChange={onSizeControlChange(control.name)}
              />
            )}
          </For>
        </div>
        <div class={styles.sizesGroup}>
          <For each={heightSizeControlsSchema}>
            {(control) => (
              <SizeControl
                label={control.label}
                value={formData()[control.name]}
                onChange={onSizeControlChange(control.name)}
              />
            )}
          </For>
        </div>
      </div>
      <TinyButtonControlsGroup
        schema={overflowControlsSchema}
        controlName="overflow"
        onChange={updateStructure}
        label="Overflow"
      />
    </SidebarFormWrapper>
  );
};
