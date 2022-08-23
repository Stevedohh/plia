import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  insertComponentByNameReducer,
  moveComponentReducer,
  putComponentPropsReducer,
  removeComponentReducer,
} from './reducers';
import {
  InsertComponentPayload,
  MoveComponentPayload,
  RemoveComponentPayload,
  UpdateComponentPropsPayload,
} from '../types';
import { structureViewMock } from './mocks/structure.mock';

export const componentStructureSlice = createSlice({
  name: 'componentStructure',
  initialState: {
    struct: JSON.parse(JSON.stringify(structureViewMock)),
  },
  reducers: {
    updateComponentProps: (state, action: PayloadAction<UpdateComponentPropsPayload>) => {
      const { componentId, props } = action.payload;

      putComponentPropsReducer(state.struct, componentId, props);
    },
    insertComponent: (state, action: PayloadAction<InsertComponentPayload>) => {
      const { componentName, droppableComponentId, direction } = action.payload;

      insertComponentByNameReducer(state.struct, droppableComponentId, componentName, direction);
    },
    moveComponent: (state, action: PayloadAction<MoveComponentPayload>) => {
      const { droppableComponentId, draggableComponentId, direction } = action.payload;

      moveComponentReducer(state.struct, droppableComponentId, draggableComponentId, direction);
    },
    removeComponent: (state, action: PayloadAction<RemoveComponentPayload>) => ({
      ...state,
      struct: removeComponentReducer(state.struct, action.payload.componentId),
    }),
  },
});

export const { updateComponentProps, removeComponent, insertComponent, moveComponent } =
  componentStructureSlice.actions;
