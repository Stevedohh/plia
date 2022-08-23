import { TinyButtonControlsSchemas } from '~editor/ui/src/types';

export const displayFlexControlsSchemas: TinyButtonControlsSchemas = [
  {
    controlName: 'flex-direction',
    label: 'Direction:',
    schema: [
      {
        value: 'row',
        children: 'row',
      },
      {
        value: 'column',
        children: 'column',
      },
      {
        value: 'row-reverse',
        children: 'rr',
      },
      {
        value: 'column-reverse',
        children: 'cr',
      },
    ],
  },
  {
    controlName: 'justify-content',
    label: 'Justify:',
    schema: [
      {
        value: 'flex-start',
        children: 'start',
      },
      {
        value: 'center',
        children: 'center',
      },
      {
        value: 'flex-end',
        children: 'end',
      },
      {
        value: 'space-between',
        children: 'between',
      },
      {
        value: 'space-around',
        children: 'around',
      },
    ],
  },
  {
    controlName: 'align-items',
    label: 'Align:',
    schema: [
      {
        value: 'flex-start',
        children: 'start',
      },
      {
        value: 'center',
        children: 'center',
      },
      {
        value: 'flex-end',
        children: 'end',
      },
      {
        value: 'space-between',
        children: 'between',
      },
      {
        value: 'space-around',
        children: 'around',
      },
    ],
  },
];
