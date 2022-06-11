/* eslint-disable max-len */

import { Structure } from '@plia/plia/types';

export const structureMock: Structure = {
  id: '1',
  component: 'Block',
  children: [
    {
      component: 'Block',
      id: '1w',
      children: [
        {
          id: '1f',
          component: 'Typography',
          props: {
            text: 'text',
          },
        },
      ],
    },
    {
      id: 'a1',
      component: 'Typography',
      props: {
        text: 'Typography',
      },
    },
    {
      id: 'asas1',
      component: 'Image',
      props: {
        alt: 'alt',
        src: 'https://content2.rozetka.com.ua/goods/images/original/17790648.jpg',
      },
    },
  ],
};

export const updatedStructureMock: Structure = {
  id: '1',
  component: 'Block',
  children: [
    {
      component: 'Block',
      id: '1w',
      children: [
        {
          id: '1f',
          component: 'Typography',
          props: {
            text: 'some text',
          },
        },
      ],
    },
    {
      id: 'a1',
      component: 'Typography',
      props: {
        text: 'Typography',
      },
    },
    {
      id: 'asas1',
      component: 'Image',
      props: {
        alt: 'alt',
        src: 'https://content2.rozetka.com.ua/goods/images/original/17790648.jpg',
      },
    },
  ],
};

export const structureViewMock = {
  id: '1',
  component: 'Block',
  children: [
    {
      component: 'Block',
      id: '1w',
      props: {
        styles: {
          display: 'block',
          'flex-direction': 'column',
          'padding-top': '100px',
          width: 'auto',
          overflow: 'visible',
        },
      },
      children: [
        {
          id: '1fw',
          component: 'Block',
        },
        {
          id: '1fw3',
          component: 'Block',
        },
        {
          id: 'a1gfgf',
          component: 'Typography',
          props: {
            text: 'Typography',
          },
        },
      ],
    },
    {
      id: 'a1',
      component: 'Typography',
      props: {
        text: 'Typography',
      },
    },
    {
      component: 'Block',
      id: '1eeew',
      children: [
        {
          id: 'asas2',
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
