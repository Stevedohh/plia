import { useService } from 'solid-services';
import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { ImageLoadingService } from '~editor/ui/src/services/imageLoaded.service';

export type ImageProps = {
  src: string;
  alt: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Image: Component<ImageProps> = (props) => {
  const { setIsImageLoaded } = useService(ImageLoadingService)();

  return (
    <img
      src={props.src}
      alt={props.alt}
      class={props.class}
      onLoad={() => {
        setIsImageLoaded(props.id);
      }}
    />
  );
};
