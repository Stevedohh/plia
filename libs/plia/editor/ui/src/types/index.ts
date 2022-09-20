import { Component, JSX, JSXElement } from 'solid-js';

export const BODY = 'body';

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
  CENTER_LAST = 3,
}

export type SimplifiedDraggable = {
  isActiveDraggable: boolean;
  transform: {
    x: number;
    y: number;
  };
};

export enum EditorFormNames {
  PROPERTIES = 'PROPERTIES',
  STYLES = 'STYLES',
}

export enum DragComponentActions {
  INSERT = 'INSERT',
  MOVE = 'MOVE',
}
