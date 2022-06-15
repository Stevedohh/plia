import { JSX } from 'solid-js';

export type Id = string | number;

export type Structure = {
  id: Id;
  component: string;
  children?: Structure[];
  props?: unknown;
  className?: string;
  styles?: JSX.CSSProperties;
};

export type StylesStructure = Array<{
  className: string;
  cssProperties: JSX.CSSProperties;
}>;
