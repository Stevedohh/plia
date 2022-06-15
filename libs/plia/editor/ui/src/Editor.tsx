import { Component } from 'solid-js';

import { Renderer } from './renderer/Renderer';
import { getComponentsStructure } from './stores/componentsStructure/getters/componentGetters';

export const Editor: Component = () => {
  const structure = getComponentsStructure();

  return <Renderer structure={structure} />;
};
