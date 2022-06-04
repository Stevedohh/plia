import { Component, Show, useContext } from 'solid-js';

import { displayControlsSchema } from './schemas/displayControlsSchema';
import { BlockFormContext } from '../BlockFormContext';
import { SidebarFormWrapper } from '../../../components/controls/SidebarFormWrapper/SidebarFormWrapper';
import { TinyButtonControlsGroup } from '../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';
import { DisplayFlexControls } from './DisplayFlexControls/DisplayFlexControls';

export const LayoutForm: Component = () => {
  const { formData, updateStructure } = useContext(BlockFormContext);

  return (
    <SidebarFormWrapper label="Layout">
        <TinyButtonControlsGroup
          controlName="display"
          onChange={updateStructure}
          label="Display"
          schema={displayControlsSchema}
        />
        <Show when={formData().display === 'flex'}>
          <DisplayFlexControls
            updateStructure={updateStructure}
          />
        </Show>
    </SidebarFormWrapper>
  );
};
