import { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Id, ComponentNames } from '@plia/plia/types';

import { PropertiesFormMap } from './propertiesFormMap';

type PropertiesFormProps = {
  id: Id;
  componentName: ComponentNames;
  properties: unknown;
};

export const PropertiesForm: Component<PropertiesFormProps> = (props) => (
  <div>
    <Dynamic
      component={PropertiesFormMap.get(props.componentName)}
      componentId={props.id}
      initialValues={props.properties}
    />
  </div>
);
