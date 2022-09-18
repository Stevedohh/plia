import { Component, Show, useContext } from 'solid-js';

import { displayControlsSchema } from './schemas/displayControlsSchema';
import { StylesFormContext } from '../StylesFormContext';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { DisplayFlexControls } from './DisplayFlexControls/DisplayFlexControls';
import { CollapsedWrapper } from '../../../components/layout/CollapsedWrapper/CollapsedWrapper';

export const LayoutForm: Component = () => {
  const { formData, updateStructure } = useContext(StylesFormContext);

  return (
    <CollapsedWrapper label="Layout">
      <TinyButtonControlsGroup
        controlName="display"
        onChange={updateStructure}
        label="Display"
        schema={displayControlsSchema}
      />
      <Show when={formData().display === 'flex'} keyed>
        <DisplayFlexControls updateStructure={updateStructure} />
      </Show>
    </CollapsedWrapper>
  );
};
