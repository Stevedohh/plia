import { Component, useContext } from 'solid-js';

import { SidebarFormWrapper } from '@plia/plia/layout';

import { ColorPickerControl } from '../../../components/controls/ColorPickerControl/ColorPickerControl';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { bgClippingControlsSchema } from './schemas/bgClippingControlsSchema';
import { BlockFormContext } from '../BlockFormContext';

export const BackgroundsForm: Component = () => {
  const { setFormData, formData, updateStructure } = useContext(BlockFormContext);

  const onColorPickerChange = (color) => {
    setFormData('background-color', color);
    updateStructure();
  };

  return (
    <SidebarFormWrapper label="Backgrounds">
      <ColorPickerControl
        value={formData()['background-color']}
        onInput={onColorPickerChange}
        label="Color:"
      />
      <TinyButtonControlsGroup
        schema={bgClippingControlsSchema}
        controlName="background-clip"
        onChange={updateStructure}
        label="Clipping"
      />
    </SidebarFormWrapper>
  );
};
