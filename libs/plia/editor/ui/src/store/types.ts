import { JSX } from 'solid-js';

import { Component, Id, Structure } from '@plia/plia/types';

import { DroppableDirections } from '../types';

export type UpdateComponentPropsPayload = {
  componentId: Id;
  props: unknown;
};

export type UpdateComponentStylesPayload = {
  componentId: Id;
  styles: unknown;
};

export type RemoveComponentPayload = {
  componentId: Id;
};

export type InsertComponentPayload = {
  droppableComponentId: Id;
  component: Component;
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

export type Page = {
  name: string;
  id: string;
  components_structure: Structure;
};

export type FetchComponentsInput = {
  pageId: string;
  siteId: string;
};
