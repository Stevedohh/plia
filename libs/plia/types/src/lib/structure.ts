import { JSX } from 'solid-js';

export type Id = string | number;

export enum ComponentNames {
  BLOCK = 'Block',
  IMAGE = 'Image',
  TYPOGRAPHY = 'Typography',
  HEADING = 'Heading',
}
export type Structure = {
  id: Id;
  component: ComponentNames;
  children?: Structure[];
  props?: any;
  className?: string;
  styles?: JSX.CSSProperties;
};

export type StylesStructure = Array<{
  className: string;
  cssProperties: JSX.CSSProperties;
}>;

export type Component = Omit<Structure, 'children'>;
