import { createForm } from '@felte/solid';
import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { BlockFormContext } from './BlockFormContext';
import { LayoutForm } from './LayoutForm/LayoutForm';
import { SpacingForm } from './SpacingForm/SpacingForm';
import { SizesForm } from './SizesForm/SizesForm';
import { BlockStylesForm } from '../../types/types';
import { BackgroundsForm } from './BackgroundsForm/BackgroundsForm';
import { BordersForm } from './BordersForm/BordersForm';

import { putStructureStyles } from '../../stores/stylesStructure/reducers/styleReducers';
import {
  getStylesByClassName,
  getStylesStructure,
} from '../../stores/stylesStructure/getters/styleGetters';
import { updateStylesView } from '../../services/stylesView.service';

type BlockFormProps = {
  id: Id;
  styles: JSX.CSSProperties;
  className: string;
};

export const BlockForm: Component<BlockFormProps> = (props) => {
  const {
    form,
    data: stylesFormData,
    setData,
  } = createForm<BlockStylesForm>({
    initialValues: { ...getStylesByClassName(props.className) },
  });

  const updateStyles = () => {
    putStructureStyles(props.className, stylesFormData());
    updateStylesView(getStylesStructure());
  };

  return (
    <div>
      {/* @ts-ignore */}
      <form use:form onFocusOut={updateStyles}>
        <BlockFormContext.Provider
          value={{
            formData: stylesFormData,
            setFormData: setData,
            updateStructure: updateStyles,
          }}
        >
          <LayoutForm />
          <SpacingForm />
          <SizesForm />
          <BackgroundsForm />
          <BordersForm />
        </BlockFormContext.Provider>
      </form>
    </div>
  );
};
