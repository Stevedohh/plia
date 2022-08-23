import { createForm } from '@felte/solid';
import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { StylesFormContext } from './StylesFormContext';
import { LayoutForm } from './LayoutForm/LayoutForm';
import { SpacingForm } from './SpacingForm/SpacingForm';
import { SizesForm } from './SizesForm/SizesForm';
import { BlockStylesForm } from '../../types';
import { BackgroundsForm } from './BackgroundsForm/BackgroundsForm';
import { BordersForm } from './BordersForm/BordersForm';
import { insertStyles } from '../../store/stylesStructure/stylesStructure.slice';
import { useAppDispatch, useAppSelector } from '../../store';
import { getStylesByClassName } from '../../store/stylesStructure/helpers/getStylesByClassName';

type BlockFormProps = {
  id: Id;
  styles: JSX.CSSProperties;
  class: string;
};

export const StylesForm: Component<BlockFormProps> = (props) => {
  const stylesStructure = useAppSelector((state) => state.stylesStructure.struct);

  const {
    form,
    data: stylesFormData,
    setData,
  } = createForm<BlockStylesForm>({
    initialValues: { ...getStylesByClassName(stylesStructure(), props.class) },
  });

  const dispatch = useAppDispatch();

  const updateStyles = () => {
    dispatch(
      insertStyles({
        className: props.class,
        styles: stylesFormData(),
      })
    );
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
