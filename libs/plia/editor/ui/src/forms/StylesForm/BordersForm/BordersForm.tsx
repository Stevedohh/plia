import { Component, useContext } from 'solid-js';

import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { StylesFormContext } from '../StylesFormContext';
import { borderStyleControlsSchema } from './schemas/borderStyleControlsSchema';
import { SizeControl } from '../../../components/controls/MeasurementsControl/SizeControl';
import { ColorPickerControl } from '../../../components/controls/ColorPickerControl/ColorPickerControl';
import { CollapsedWrapper } from '../../../components/layout/CollapsedWrapper/CollapsedWrapper';

import styles from './styles.module.scss';

export const BordersForm: Component = () => {
  const { updateStructure, formData, setFormData } = useContext(StylesFormContext);

  const onColorPickerChange = (color: string) => {
    setFormData('border-color', color);
    updateStructure();
  };

  const onBorderWidthChange = (width: string) => {
    setFormData('border-width', width);
  };

  return (
    <CollapsedWrapper label="Borders" isContentOpened={false}>
      <TinyButtonControlsGroup
        schema={borderStyleControlsSchema}
        controlName="border-style"
        onChange={updateStructure}
        label="Border"
      />
      <ColorPickerControl
        value={formData()['border-color'] || '#FF0000'}
        onInput={onColorPickerChange}
        label="Color:"
      />
      <SizeControl
        label="Width"
        value={formData()['border-width'] || '1px'}
        excludedMeasureUnits={['auto', '%']}
        onChange={onBorderWidthChange}
        class={styles.borderSizeControl}
      />
    </CollapsedWrapper>
  );
};
