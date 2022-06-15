import { createStore } from 'solid-js/store';
import { StylesStructure } from '@plia/plia/types';

export const [stylesStructure, setStylesStructure] = createStore<StylesStructure>([]);
