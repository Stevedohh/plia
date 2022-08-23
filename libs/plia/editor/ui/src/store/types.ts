import { JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { ComponentNames, DroppableDirections } from '../types';

export type UpdateComponentPropsPayload = {
  componentId: Id;
  props: unknown;
};

export type RemoveComponentPayload = {
  componentId: Id;
};

export type InsertComponentPayload = {
  droppableComponentId: Id;
  componentName: ComponentNames;
  direction: DroppableDirections;
};

export type MoveComponentPayload = {
  droppableComponentId: Id;
  draggableComponentId: Id;
  direction: DroppableDirections;
};

export type InsertStylesPayload = {
  styles: JSX.CSSProperties;
  className: string;
};
