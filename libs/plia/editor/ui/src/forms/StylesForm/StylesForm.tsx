import { createForm } from '@felte/solid';
import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { StylesFormContext } from './StylesFormContext';
import { LayoutForm } from './LayoutForm/LayoutForm';
import { SpacingForm } from './SpacingForm/SpacingForm';
import { SizesForm } from './SizesForm/SizesForm';
import { BlockStylesForm } from '../../types/types';
import { BackgroundsForm } from './BackgroundsForm/BackgroundsForm';
import { BordersForm } from './BordersForm/BordersForm';

import { putStructureStylesAction } from '../../stores/stylesStructure/actions/putStructureStyles.action';
import { getStylesByClassName } from '../../stores/stylesStructure/getters/styleGetters';

type BlockFormProps = {
  id: Id;
  styles: JSX.CSSProperties;
  class: string;
};

export const StylesForm: Component<BlockFormProps> = (props) => {
  const {
    form,
    data: stylesFormData,
    setData,
  } = createForm<BlockStylesForm>({
    initialValues: { ...getStylesByClassName(props.class) },
  });

  const updateStyles = () => {
    putStructureStylesAction(props.class, stylesFormData());
  };

  return (
    <div>
      {/* @ts-ignore */}
      <form use:form onFocusOut={updateStyles}>
        <StylesFormContext.Provider
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
        </StylesFormContext.Provider>
      </form>
    </div>
  );
};
