import { Component, Show, useContext } from 'solid-js';

import { displayControlsSchema } from './schemas/displayControlsSchema';
import { StylesFormContext } from '../StylesFormContext';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { DisplayFlexControls } from './DisplayFlexControls/DisplayFlexControls';
import { StylesGroupWrapper } from '../StylesGroupWrapper/StylesGroupWrapper';

export const LayoutForm: Component = () => {
  const { formData, updateStructure } = useContext(StylesFormContext);

  return (
    <StylesGroupWrapper label="Layout">
      <TinyButtonControlsGroup
        controlName="display"
        onChange={updateStructure}
        label="Display"
        schema={displayControlsSchema}
      />
      <Show when={formData().display === 'flex'}>
        <DisplayFlexControls updateStructure={updateStructure} />
      </Show>
    </StylesGroupWrapper>
  );
};
