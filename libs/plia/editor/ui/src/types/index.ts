import { Component, JSX, JSXElement } from 'solid-js';

export enum ComponentNames {
  BLOCK = 'Block',
  IMAGE = 'Image',
  TYPOGRAPHY = 'Typography',
}

export type SpacingControl = {
  name: string;
  value: number;
};

export type SpacingControls = {
  top: SpacingControl;
  right: SpacingControl;
  bottom: SpacingControl;
  left: SpacingControl;
};

export type SpacingControlsProps = {
  class?: string;
  label: string;
  controls: SpacingControls;
  children?: Element | JSXElement;
};

export type BlockStylesForm = JSX.CSSProperties;

export type TinyButtonControlsSchema = Array<{
  value: string;
  children: Element | JSXElement | Component;
}>;

export type TinyButtonControlsSchemas = Array<{
  controlName: string;
  schema: TinyButtonControlsSchema;
  label?: string;
}>;

export enum DroppableDirections {
  TOP = 0,
  BOTTOM = 1,
  CENTER = 2,
}

export enum EditorFormNames {
  PROPERTIES = 'PROPERTIES',
  STYLES = 'STYLES',
}

export enum DragComponentActions {
  INSERT = 'INSERT',
  MOVE = 'MOVE',
}
