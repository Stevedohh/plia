import { Component, For, useContext } from 'solid-js';

import { heightSizeControlsSchema, widthSizeControlsSchema } from './schemas/sizeControlsSchema';
import { overflowControlsSchema } from './schemas/overflowControlsSchema';
import { BlockFormContext } from '../BlockFormContext';
import { SidebarFormWrapper } from '../../../components/controls/SidebarFormWrapper/SidebarFormWrapper';
import { SizeControl } from '../../../components/controls/MeasurementsControl/SizeControl';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';

import styles from './styles.module.scss';

export const SizesForm: Component = () => {
  const { updateStructure, formData } = useContext(BlockFormContext);

  return (
    <SidebarFormWrapper label="Sizes">
      <div class={styles.sizes}>
        <div class={styles.sizesGroup}>
          <For each={widthSizeControlsSchema}>
            {(control) => <SizeControl
              name={control.name}
              label={control.label}
              value={formData()[control.name]}
            />}
          </For>
        </div>
        <div class={styles.sizesGroup}>
          <For each={heightSizeControlsSchema}>
            {(control) => <SizeControl
              name={control.name}
              label={control.label}
              value={formData()[control.name]}
            />}
          </For>
        </div>
      </div>
      <TinyButtonControlsGroup
        schema={overflowControlsSchema}
        controlName='overflow'
        onChange={updateStructure}
        label="Overflow"
      />
    </SidebarFormWrapper>
  );
};
