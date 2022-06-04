import { createForm } from '@felte/solid';
import { Component, createEffect, JSX } from 'solid-js';

import { addPxToStyles, removePxFromStyles } from '@plia/plia/utils';
import { Id } from '@plia/plia/types';

import { BlockFormContext } from './BlockFormContext';
import { updateComponentPropsById } from '../../services/structure.service';
import { LayoutForm } from './LayoutForm/LayoutForm';
import { SpacingForm } from './SpacingForm/SpacingForm';
import { SizesForm } from './SizesForm/SizesForm';
import { BlockStylesForm } from '../../types/types';

type BlockFormProps = {
  id: Id;
  styles: JSX.CSSProperties;
}

export const BlockForm: Component<BlockFormProps> = (props) => {
  const { form, data: stylesFormData, setData } = createForm<BlockStylesForm>({
    initialValues: { ...removePxFromStyles(props.styles) },
  });

  const updateStructureStyles = () => {
    updateComponentPropsById(props.id, { styles: addPxToStyles(stylesFormData()) });
  };

  createEffect(() => {
    console.log(stylesFormData());
  });

  return (
    <div>
      {/* @ts-ignore */}
      <form use:form onFocusOut={updateStructureStyles}>
        <BlockFormContext.Provider
          value={{
            formData: stylesFormData,
            setFormData: setData,
            updateStructure: updateStructureStyles,
          }}
        >
          <LayoutForm />
          <SpacingForm />
          <SizesForm />
        </BlockFormContext.Provider>
      </form>
    </div>
  );
};
