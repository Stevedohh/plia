/* eslint-disable max-len */

import { ComponentNames, Structure } from '@plia/plia/types';

export const structureViewMock: Structure = {
  id: 'body',
  component: ComponentNames.BLOCK,
  children: [
    {
      component: ComponentNames.BLOCK,
      id: '_1w',
      className: '_1w',
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
          id: '_1fdddew',
          component: ComponentNames.BLOCK,
          className: '_1fdddew',
          children: [
            {
              id: 'huiIDasd-1as',
              component: ComponentNames.TYPOGRAPHY,
              className: 'Typographyfaf555',
              props: {
                text: '<p>Typographyfaf555</p>',
              },
            },
          ],
        },
        {
          id: '_1fw3',
          component: ComponentNames.BLOCK,
          className: '_1fw3',
          children: [
            {
              id: 'huiIDasdsdvsdvs-1as',
              component: ComponentNames.TYPOGRAPHY,
              className: 'Typographyfaf555',
              props: {
                text: '<p>Typographyfaf555</p>',
              },
            },
          ],
        },
      ],
    },
    {
      component: ComponentNames.BLOCK,
      className: 'fafa4',
      id: 'fafa4',
      children: [
        {
          id: '_asas2',
          component: ComponentNames.IMAGE,
          className: '_asas2',
          styles: {
            width: '400px',
          },
          props: {
            alt: 'alt',
            src: 'https://i.pinimg.com/originals/29/0b/22/290b2217b3a347177e938e1c88263b22.jpg',
          },
        },
      ],
    },
  ],
};
