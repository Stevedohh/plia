import { JSX } from 'solid-js';

import { Id, Structure } from '@plia/plia/types';

import { DroppableDirections } from '../types';

export type UpdateComponentPropsPayload = {
  componentId: Id;
  props: unknown;
};

export type RemoveComponentPayload = {
  componentId: Id;
};

export type InsertComponentPayload = {
  droppableComponentId: Id;
  component: Omit<Structure, 'children'>;
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
