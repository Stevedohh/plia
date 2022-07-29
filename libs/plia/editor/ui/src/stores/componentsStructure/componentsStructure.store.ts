import { createStore } from 'solid-js/store';

import { Structure } from '@plia/plia/types';

import { structureViewMock } from './mocks/structure.mock';

export const [componentsStructure, setComponentsStructure] =
  createStore<Structure>(structureViewMock);
