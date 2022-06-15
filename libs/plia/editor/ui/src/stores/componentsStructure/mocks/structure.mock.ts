/* eslint-disable max-len */

import { Structure } from '@plia/plia/types';

export const structureViewMock: Structure = {
  id: '_2',
  component: 'Block',
  children: [
    {
      component: 'Block',
      id: '_1w',
      className: 'fafa',
      styles: {
        display: 'block',
        'flex-direction': 'column',
        'padding-top': 100,
        width: 'auto',
        overflow: 'visible',
        'margin-top': 50,
      },
      children: [
        {
          id: '_1few',
          component: 'Block',
          className: 'fafa1',
        },
        {
          id: '_1fw3',
          component: 'Block',
          className: 'fafa2',
        },
        {
          id: '_a1gfgf',
          component: 'Typography',
          props: {
            text: 'Typography',
          },
        },
      ],
    },
    {
      id: '_a1',
      component: 'Typography',
      props: {
        text: 'Typography',
      },
    },
    {
      component: 'Block',
      className: 'fafa4',
      id: '_1eeew',
      children: [
        {
          id: '_asas2',
          component: 'Image',
          props: {
            alt: 'alt',
            src: 'https://i.pinimg.com/originals/6f/9b/24/6f9b24e85d5bfb8acff726b5457bbd5c.jpg',
          },
        },
      ],
    },
  ],
};
