import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InsertStylesPayload } from '../types';
import { updateStructStylesReducer } from './reducers';

export const stylesStructureSlice = createSlice({
  name: 'stylesStructure',
  initialState: {
    struct: [],
  },
  reducers: {
    insertStyles: (state, action: PayloadAction<InsertStylesPayload>) => {
      const { styles, className } = action.payload;

      return {
        ...state,
        struct: updateStructStylesReducer(state.struct, className, styles),
      };
    },
  },
});

export const { insertStyles } = stylesStructureSlice.actions;
