import { Component } from 'solid-js';

import { Renderer } from './renderer/Renderer';
import { structure } from './services/structure.service';

export const Editor: Component = () => <Renderer structure={structure} />;
