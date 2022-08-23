import { nanoid } from 'nanoid';

import { ComponentNames } from '~editor/ui/src/types';

export const getNewComponent = (componentName: ComponentNames) => {
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

  return component;
};
