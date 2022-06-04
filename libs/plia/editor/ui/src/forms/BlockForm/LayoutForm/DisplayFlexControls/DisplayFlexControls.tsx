import { Component } from 'solid-js';

import { displayFlexControlsSchemas } from '../schemas/displayFlexControlsSchema';
import {
  TinyButtonControlsGroup,
} from '../../../../components/controls/TinyButtonControlsGroup/TinyButtonControlsGroup';

type DisplayFlexFormProps = {
  updateStructure: () => void;
}

export const DisplayFlexControls: Component<DisplayFlexFormProps> = (
  props,
) => displayFlexControlsSchemas.map((controlGroup) => (
    <TinyButtonControlsGroup
      label={controlGroup.label}
      schema={controlGroup.schema}
      controlName={controlGroup.controlName}
      onChange={props.updateStructure}
    />
));
