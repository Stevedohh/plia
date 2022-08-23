import { TypedUseSelectorHook, useDispatch, useSelector } from 'solid-redux-primitives';
import { configureStore } from '@reduxjs/toolkit';

import { componentStructureSlice } from './componentsStructure/componentStructure.slice';
import { stylesStructureSlice } from './stylesStructure/stylesStructure.slice';

export const store = configureStore({
  reducer: {
    componentStructure: componentStructureSlice.reducer,
    stylesStructure: stylesStructureSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
