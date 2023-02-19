import { useService } from 'solid-services';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PageService } from '@plia/plia/network';

import {
  insertComponentReducer,
  moveComponentReducer,
  putComponentPropsReducer,
  putComponentStylesReducer,
  removeComponentReducer,
} from './reducers';
import {
  FetchComponentsInput,
  InsertComponentPayload,
  MoveComponentPayload,
  RemoveComponentPayload,
  UpdateComponentPropsPayload,
  UpdateComponentStylesPayload,
} from '../types';

export const fetchComponentsStructure = createAsyncThunk<any, FetchComponentsInput>(
  'componentStructure/fetchPageById',
  async ({ siteId, pageId }) => {
    const pageService = useService(PageService)();
    const page = await pageService.getPage({ pageId, siteId });

    return page.data;
  },
);

export const componentStructureSlice = createSlice({
  name: 'componentStructure',
  initialState: {
    struct: null,
  },
  reducers: {
    updateComponentProps: (state, action: PayloadAction<UpdateComponentPropsPayload>) => {
      const { componentId, props } = action.payload;

      putComponentPropsReducer(state.struct, componentId, props);
    },
    updateComponentsStyles: (state, action: PayloadAction<UpdateComponentStylesPayload>) => {
      const { componentId, styles } = action.payload;

      putComponentStylesReducer(state.struct, componentId, styles);
    },
    insertComponent: (state, action: PayloadAction<InsertComponentPayload>) => {
      const { component, droppableComponentId, direction } = action.payload;

      insertComponentReducer(state.struct, droppableComponentId, component, direction);
    },
    moveComponent: (state, action: PayloadAction<MoveComponentPayload>) => {
      const { droppableComponentId, draggableComponentId, direction } = action.payload;

      moveComponentReducer(state.struct, droppableComponentId, draggableComponentId, direction);
    },
    removeComponent: (state, action: PayloadAction<RemoveComponentPayload>) => ({
      ...state,
      struct: removeComponentReducer(state.struct, action.payload.componentId),
    }),
    clearComponentsStructure: (state) => ({
      ...state,
      struct: null,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComponentsStructure.fulfilled, (state, action) => {
      state.struct = action.payload.components_structure;
    });
  },
});

export const {
  updateComponentProps,
  updateComponentsStyles,
  removeComponent,
  insertComponent,
  moveComponent,
  clearComponentsStructure,
} = componentStructureSlice.actions;
