import { Component } from 'solid-js';

import { DisplayFlexControls } from './DisplayFlexControls/DisplayFlexControls';

export const displayFormComponentMap = new Map<string, Component | null>();
displayFormComponentMap.set('block', null);
displayFormComponentMap.set('inline', null);
displayFormComponentMap.set('none', null);
// @ts-ignore
displayFormComponentMap.set('flex', DisplayFlexControls);
