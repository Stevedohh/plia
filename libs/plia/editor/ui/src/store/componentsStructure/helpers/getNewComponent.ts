import { nanoid } from 'nanoid';

import { Component, ComponentNames, Structure } from '@plia/plia/types';

export const getNewComponent = (componentName: ComponentNames): Structure | Component => {
  const componentId = nanoid();

  const component = {
    component: componentName,
    id: componentId,
    className: `s${componentId}`,
  };

  if (componentName === ComponentNames.BLOCK) {
    return {
      ...component,
      styles: {
        position: 'relative',
        border: '1px solid red',
        padding: 40,
      },
    };
  }

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

  if (componentName === ComponentNames.COLUMNS) {
    return {
      ...component,
      props: {
        amountOfColumns: 2,
      },
      children: [
        {
          component: ComponentNames.COLUMN,
          id: nanoid(),
          className: `s${nanoid()}`,
        },
        {
          component: ComponentNames.COLUMN,
          id: nanoid(),
          className: `s${nanoid()}`,
        },
      ],
    };
  }

  return component;
};
