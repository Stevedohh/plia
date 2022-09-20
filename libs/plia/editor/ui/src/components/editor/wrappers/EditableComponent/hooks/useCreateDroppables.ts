import { Accessor, Setter } from 'solid-js';
import { nanoid } from 'nanoid';
import { createDroppable } from '@thisbeyond/solid-dnd';
import { Transform } from '@thisbeyond/solid-dnd/dist/types/layout';

import { Id } from '@plia/plia/types';

import { DroppableDirections } from '~editor/ui/src/types';

type useCreateDroppablesInput = {
  droppableId: Id;
  isDroppableSides: Accessor<boolean>;
  isDroppableCenter: Accessor<boolean>;
};

type Droppable = {
  (
    element: HTMLElement,
    accessor?: () => {
      skipTransform?: boolean;
    },
  ): void;
  ref: Setter<HTMLElement | null>;
  get isActiveDroppable(): boolean;
  get transform(): Transform;
};

type useCreateDroppablesOutput = {
  droppableTop: Droppable;
  droppableCenter: Droppable;
  droppableBottom: Droppable;
};

export const useCreateDroppables = (
  params: useCreateDroppablesInput,
): useCreateDroppablesOutput => {
  const droppableTop =
    params.isDroppableSides() &&
    createDroppable(nanoid(), {
      droppableId: params.droppableId,
      droppableDirection: DroppableDirections.TOP,
    });

  const droppableCenter =
    params.isDroppableCenter() &&
    createDroppable(nanoid(), {
      droppableId: params.droppableId,
      droppableDirection: DroppableDirections.CENTER,
    });

  const droppableBottom =
    params.isDroppableSides() &&
    createDroppable(nanoid(), {
      droppableId: params.droppableId,
      droppableDirection: DroppableDirections.BOTTOM,
    });

  return {
    droppableTop,
    droppableCenter,
    droppableBottom,
  };
};
