import { Component } from 'solid-js';
import { createForm } from '@felte/solid';

import { Id } from '@plia/plia/types';

import { BlockStylesForm } from '../../../types/types';
import { putComponentPropsById } from '../../../stores/componentsStructure/reducers';

import { Input } from '../../../components/controls/Input/Input';

export type ImageFormValues = {
  src: string;
  alt: string;
};

type ImageFormProps = {
  componentId: Id;
  initialValues: ImageFormValues;
};

export const ImageForm: Component<ImageFormProps> = (props) => {
  const { form, data: imageData } = createForm<BlockStylesForm>({
    initialValues: props.initialValues,
  });

  const updateImageProps = () => {
    putComponentPropsById(props.componentId, imageData());
  };

  return (
    // @ts-ignore
    <form use:form onFocusOut={updateImageProps}>
      <Input label="Source" name="src" id="imageSource" value={props.initialValues.src} />
      <Input label="Alt text" name="alt" id="imageAlt" value={props.initialValues.alt} />
    </form>
  );
};
