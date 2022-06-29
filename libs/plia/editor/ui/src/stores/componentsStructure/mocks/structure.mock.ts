/* eslint-disable max-len */

import { Structure } from '@plia/plia/types';

export const structureViewMock: Structure = {
  id: 'root',
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
      ],
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
            src: 'https://i.pinimg.com/originals/29/0b/22/290b2217b3a347177e938e1c88263b22.jpg',
          },
        },
      ],
    },
  ],
};
