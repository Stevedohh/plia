import { createStore } from 'solid-js/store';
import { StylesStructure } from '@plia/plia/types';
import { createEffect } from 'solid-js';
import { updateStylesView } from '../../services/stylesView.service';

export const [stylesStructure, setStylesStructure] = createStore<{ state: StylesStructure }>({
  state: [],
});

createEffect(() => {
  updateStylesView(stylesStructure.state);
});
