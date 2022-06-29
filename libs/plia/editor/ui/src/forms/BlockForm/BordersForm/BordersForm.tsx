import { Component, useContext } from 'solid-js';

import {
  TinyButtonControlsGroup,
  TinyButtonControlsLabelPlacing,
} from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { BlockFormContext } from '../BlockFormContext';
import { borderStyleControlsSchema } from './schemas/borderStyleControlsSchema';
import { SizeControl } from '../../../components/controls/MeasurementsControl/SizeControl';
import { ColorPickerControl } from '../../../components/controls/ColorPickerControl/ColorPickerControl';
import { SidebarFormWrapper } from '../../../components/layout/RightSidebar/SidebarFormWrapper/SidebarFormWrapper';

export const BordersForm: Component = () => {
  const { updateStructure, formData, setFormData } = useContext(BlockFormContext);

  const onColorPickerChange = (color: string) => {
    setFormData('border-color', color);
    updateStructure();
  };

  const onBorderWidthChange = (width: string) => {
    setFormData('border-width', width);
  };

  return (
    <SidebarFormWrapper label="Borders">
      <TinyButtonControlsGroup
        schema={borderStyleControlsSchema}
        controlName="border-style"
        onChange={updateStructure}
        label="Border"
        labelPlacing={TinyButtonControlsLabelPlacing.LEFT}
      />
      <SizeControl
        label="Width"
        value={formData()['border-width'] || '1px'}
        excludedMeasureUnits={['auto', '%']}
        onChange={onBorderWidthChange}
      />
      <ColorPickerControl
        value={formData()['border-color'] || '#FF0000'}
        onInput={onColorPickerChange}
        label="Color:"
      />
    </SidebarFormWrapper>
  );
};
