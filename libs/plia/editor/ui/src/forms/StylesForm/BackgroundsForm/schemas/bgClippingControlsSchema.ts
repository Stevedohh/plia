import { TinyButtonControlsSchema } from '../../../../types/types';

export const bgClippingControlsSchema: TinyButtonControlsSchema = [
  {
    value: 'none',
    children: 'none',
  },
  {
    value: 'padding-box',
    children: 'padding',
  },
  {
    value: 'content-box',
    children: 'content',
  },
  {
    value: 'text',
    children: 'text',
  },
];
