import { ComponentNames } from '@plia/plia/types';

export const DROPPABLE_COMPONENTS = [
  ComponentNames.BLOCK,
  ComponentNames.COLUMNS,
  ComponentNames.COLUMN,
  ComponentNames.BODY,
  ComponentNames.IMAGE,
  ComponentNames.TYPOGRAPHY,
  ComponentNames.HEADING,
];

export const DROPPABLE_ONLY_SIDES = [
  ComponentNames.COLUMNS,
  ComponentNames.IMAGE,
  ComponentNames.TYPOGRAPHY,
  ComponentNames.HEADING,
];

export const DROPPABLE_ONLY_CENTER = [ComponentNames.COLUMN, ComponentNames.BODY];

export const NOT_DRAGGABLE_COMPONENTS = [ComponentNames.COLUMN];
