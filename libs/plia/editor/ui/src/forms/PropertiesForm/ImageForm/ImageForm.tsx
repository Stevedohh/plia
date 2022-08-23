import { Component } from 'solid-js';
import { createForm } from '@felte/solid';

import { Id } from '@plia/plia/types';

import { updateComponentProps } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { useAppDispatch } from '~editor/ui/src/store';
import { Input } from '~editor/ui/src/components/controls/Input/Input';
import { BlockStylesForm } from '~editor/ui/src/types';

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

  const dispatch = useAppDispatch();

  const updateImageProps = () => {
    dispatch(updateComponentProps({ componentId: props.componentId, props: imageData() }));
  };

  return (
    // @ts-ignore
    <form use:form onFocusOut={updateImageProps}>
      <Input label="Source" name="src" id="imageSource" value={props.initialValues.src} />
      <Input label="Alt text" name="alt" id="imageAlt" value={props.initialValues.alt} />
    </form>
  );
};
