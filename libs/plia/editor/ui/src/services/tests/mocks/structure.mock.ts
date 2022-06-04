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
          display: 'flex',
          'flex-direction': 'column',
          'padding-top': '100px',
          width: '1000px',
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
          id: 'asas1',
          component: 'Image',
          props: {
            alt: 'alt',
            // eslint-disable-next-line max-len
            src: 'https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2021/12/06/af_catvids_061221.jpg?VersionId=2JY9KmxK73nQlLlp5C5y.DCsG3PLE411',
          },
        },
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
