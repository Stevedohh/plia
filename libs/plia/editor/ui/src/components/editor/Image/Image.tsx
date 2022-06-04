import { Component } from 'solid-js';

export type ImageProps = {
    src: string;
    alt: string;
}

export const Image: Component<ImageProps> = (props) => (
  <img src={props.src} alt={props.alt} />
);
