import { useService } from 'solid-services';
import { Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import { ImageLoadingService } from '~editor/ui/src/services/imageLoaded.service';

import styles from './styles.module.scss';

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
      class={classNames(props.class, styles.image)}
      onLoad={() => {
        setIsImageLoaded(props.id);
      }}
    />
  );
};
