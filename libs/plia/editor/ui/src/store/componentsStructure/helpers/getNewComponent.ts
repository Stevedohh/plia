import { nanoid } from 'nanoid';

import { Component, ComponentNames } from '@plia/plia/types';

export const getNewComponent = (componentName: ComponentNames): Component => {
  const componentId = nanoid();

  const component = {
    component: componentName,
    id: componentId,
    className: `s${componentId}`,
  };

  if (componentName === ComponentNames.IMAGE) {
    return {
      ...component,
      props: {
        alt: 'placeholder',
        src: 'https://i.stack.imgur.com/y9DpT.jpg',
      },
      styles: {
        width: '100%',
      },
    };
  }

  if (componentName === ComponentNames.TYPOGRAPHY) {
    return {
      ...component,
      props: {
        text: '<p>Typography</p>',
      },
    };
  }

  if (componentName === ComponentNames.HEADING) {
    return {
      ...component,
      props: {
        text: '<h1>Typography</h1>',
      },
    };
  }

  return component;
};
