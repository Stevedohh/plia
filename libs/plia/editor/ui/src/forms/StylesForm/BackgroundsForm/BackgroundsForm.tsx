import { Component, useContext } from 'solid-js';

import { ColorPickerControl } from '../../../components/controls/ColorPickerControl/ColorPickerControl';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { CollapsedWrapper } from '../../../components/layout/CollapsedWrapper/CollapsedWrapper';
import { bgClippingControlsSchema } from './schemas/bgClippingControlsSchema';
import { StylesFormContext } from '../StylesFormContext';

export const BackgroundsForm: Component = () => {
  const { setFormData, formData, updateStructure } = useContext(StylesFormContext);

  const onColorPickerChange = (color) => {
    setFormData('background-color', color);
    updateStructure();
  };

  return (
    <CollapsedWrapper label="Backgrounds">
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
    </CollapsedWrapper>
  );
};
